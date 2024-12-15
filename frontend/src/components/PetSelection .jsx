import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const pets = [
  { id: 1, name: "Dog", image: "/images/dog.png" },
  { id: 2, name: "Cat", image: "/images/cat.png" },
  { id: 3, name: "Rabbit", image: "/images/rabbit.png" },
  { id: 4, name: "Pony", image: "/images/pony.png" },
  { id: 5, name: "Crocodile", image: "/images/croc.png" },
  { id: 6, name: "Turtle", image: "/images/turtle.png" },
];

const PetSelection = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handlePetClick = (petName) => {
    if (petName === "Dog") {
      navigate("/kid"); // Navigate to FirstPage when Dog is clicked
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-purple-300 flex flex-col items-center py-10">
      {/* Animated Header */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-6xl font-extrabold text-black mb-5"
        style={{ fontFamily: "Comic Sans MS, cursive" }}
      >
        hello!
      </motion.h1>

      {/* Subtitle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-pink-500 py-3 px-6 mb-5 rounded-full shadow-lg"
      >
        <h2
          className="text-3xl font-bold text-white"
          style={{ fontFamily: "Comic Sans MS, cursive" }}
        >
          choose your pet
        </h2>
      </motion.div>

      {/* Pet Cards */}
      <div className="bg-purple-700 rounded-lg p-5 grid grid-cols-2 md:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <motion.div
            key={pet.id}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: pet.id * 0.2 }}
            className="flex flex-col items-center bg-white rounded-2xl p-5 shadow-2xl cursor-pointer hover:bg-yellow-100"
            onClick={() => handlePetClick(pet.name)} // Handle pet click
          >
            {/* Pet Image */}
            <img
              src={pet.image}
              alt={pet.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400"
            />
            {/* Pet Name */}
            <p
              className="mt-3 text-2xl font-bold text-gray-800"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              {pet.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PetSelection;
