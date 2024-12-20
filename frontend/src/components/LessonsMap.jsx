import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import backgroundImage from "../assets/b.jpg"; // Background image path
import petImage from "../kid/Pet.png"; // Pet image

const lessons = [
  { id: 1, stars: 3 },
  { id: 2, stars: 2 },
  { id: 3, stars: 3 },
  { id: 4, stars: 2 },
  { id: 5, stars: 3 },
];

const LessonsMap = () => {
  const [completedLessons, setCompletedLessons] = useState([]);
  const [showPetMessage, setShowPetMessage] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const attendedLesson = localStorage.getItem("attendedLesson");
    const lastLesson = localStorage.getItem("lastLesson");

    if (attendedLesson === "true" && lastLesson) {
      localStorage.removeItem("attendedLesson");
      setShowPetMessage(true);
    }
  }, []);

  const handleLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((prev) => [...prev, lessonId]);

      // Save flags in localStorage when the lesson is completed
      localStorage.setItem("attendedLesson", "true");
      localStorage.setItem("lastLesson", lessonId);

      // Redirect to Google Meet after the lesson is completed
      window.location.href = "https://meet.google.com";
    }
  };

  const handleFeedPet = () => {
    setShowPetMessage(false);
    navigate("/store"); // Navigate to the /store route (Foodpage)
  };

  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
      {/* Scrollable background */}
      <div
        className="relative bg-cover bg-no-repeat bg-top w-full h-[200vh]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="absolute flex flex-col items-center transform translate-x-[-50%] translate-y-[-50%]"
            style={getPosition(lesson.id)}
            onClick={() => handleLessonComplete(lesson.id)}
          >
            {/* Lesson Badge */}
            <div
              className={`w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full ${
                completedLessons.includes(lesson.id)
                  ? "bg-green-400 border-green-600"
                  : "bg-yellow-400 border-red-500"
              } border-4 text-lg md:text-2xl lg:text-3xl font-bold cursor-pointer`}
            >
              {lesson.id}
            </div>
            {/* Stars */}
            <div className="mt-1 flex space-x-1 text-gray-300 text-sm md:text-lg lg:text-xl">
              {Array.from({ length: 3 }, (_, i) => (
                <span
                  key={i}
                  className={`${
                    i < lesson.stars ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pet Interaction Modal */}
      {showPetMessage && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-4">
            <img
              src={petImage}
              alt="Pet"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <p className="text-xl font-bold text-gray-800">
              Thank you for finishing the course! I'm hungry. Should you feed me?
            </p>
            <button
              onClick={handleFeedPet}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Feed the Pet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Define positions for lessons
const getPosition = (id) => {
  const positions = {
    1: { top: "85%", left: "20%" },
    2: { top: "75%", left: "40%" },
    3: { top: "65%", left: "60%" },
    4: { top: "50%", left: "30%" },
    5: { top: "30%", left: "50%" },
  };
  return positions[id] || {};
};

export default LessonsMap;
