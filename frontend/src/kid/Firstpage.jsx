
import { useNavigate } from "react-router-dom";
import NavigationButton from "../components/NavigationButton";
import petImage from "../kid/Pet.png"; // Pet image
import playIcon from "../kid/playtime.png";
import storeIcon from "../kid/store.png";
import learnIcon from "../kid/knowledge.png";
import quizIcon from "../kid/quiz.png";

const FirstPage = () => {
  const navigate = useNavigate(); // React Router navigation hook

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-pink-200 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-50 animate-float delay-1000"></div>
      <div className="absolute top-1/4 left-1/3 w-28 h-28 bg-white rounded-full shadow-lg opacity-80 animate-pulse"></div>

      {/* Score Button */}
      <button className="absolute top-6 left-6 bg-white text-gray-800 px-6 py-2 rounded-full shadow-lg font-extrabold text-lg hover:scale-110 transition-transform duration-300">
        ⭐ Score
      </button>

      {/* Speech Bubble */}
      <div className="relative bg-white px-6 py-3 text-gray-800 text-xl font-semibold rounded-3xl shadow-md mb-2 animate-bounce">
        Hello, are you ready to learn?
        {/* Tail of Speech Bubble */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white rotate-45"></div>
      </div>

      {/* Animated Pet Image */}
      <div className="relative w-60 h-60 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-2xl mb-6 animate-pet-wiggle">
        <img
          src={petImage}
          alt="Pet"
          className="w-52 h-52 rounded-full object-contain animate-pet-jump"
        />
        {/* Floating Animation */}
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full animate-float"></div>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-2 gap-8">
        <NavigationButton
          text="🎮 Play"
          icon={playIcon}
          onClick={() => alert("Play Coming Soon!")}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:scale-110 transition-all duration-300 shadow-lg rounded-3xl text-white font-bold text-lg py-3"
        />
        <NavigationButton
          text="🛒 Store"
          icon={storeIcon}
          onClick={() => navigate("/store")}
          className="bg-gradient-to-r from-green-400 to-blue-400 hover:scale-110 transition-all duration-300 shadow-lg rounded-3xl text-white font-bold text-lg py-3"
        />
        <NavigationButton
          text="📚 Learn"
          icon={learnIcon}
          onClick={() => navigate("/lessons")} // Navigate to LessonsMap
          className="bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-110 transition-all duration-300 shadow-lg rounded-3xl text-white font-bold text-lg py-3"
        />
        <NavigationButton
          text="🧠 Practise"
          icon={quizIcon}
          onClick={() => navigate("/quiz")}
          className="bg-gradient-to-r from-pink-400 to-red-400 hover:scale-110 transition-all duration-300 shadow-lg rounded-3xl text-white font-bold text-lg py-3"
        />
      </div>
    </div>
  );
};

export default FirstPage;
