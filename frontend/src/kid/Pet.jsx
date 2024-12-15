import { useEffect, useState } from "react";
import { checkPetStatus } from "../kid/services/api";
import petImage from "../kid/pet.jpg";
import petHungryImage from "../kid/pet-hungry.jpg";

const Pet = ({ userId }) => {
  const [isHungry, setIsHungry] = useState(false);

  // Periodically check if the pet is hungry
  useEffect(() => {
    const interval = setInterval(async () => {
      const hungry = await checkPetStatus(userId);
      setIsHungry(hungry);
    }, 5002); // Check every 5 seconds

    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
        <img
          src={isHungry ? petHungryImage : petImage}
          alt="Virtual Pet"
          className="w-44 h-44 object-contain"
        />
      </div>
      {isHungry && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-300 px-4 py-2 rounded-lg">
          <p>I'm hungry! Feed me! 🍎</p>
        </div>
      )}
    </div>
  );
};

export default Pet;
