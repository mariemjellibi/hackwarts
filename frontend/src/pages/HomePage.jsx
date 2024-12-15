// import "../pages/HomePage.css";
// import butterflyImage from "../assets/butterfly.svg";  // Ensure this path is correct

// const HomePage = () => {
//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-400 relative overflow-hidden">
//       {/* Multiple 3D Butterfly Animations */}
//       {[...Array(5)].map((_, index) => (
//         <div
//           key={index}
//           className={`butterfly-animation butterfly-${index + 1}`}
//           style={{
//             position: 'absolute',
//             top: `${Math.random() * 100}vh`,
//             left: `${Math.random() * 100}vw`
//           }} // Random positioning to test visibility
//         >
//           {/* Use <img> to display the SVG as an image */}
//           <img
//             src={butterflyImage}
//             alt="Butterfly"
//             width="100"
//             height="100"
//             className="butterfly-3d"
//           />
//         </div>
//       ))}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 relative z-0">
//         {/* Child Block */}
//         <div className="text-center mb-4">
//           <h1 className="text-5xl font-extrabold text-white mb-4 text-shadow-xl animate__animated animate__bounceIn">
//             Play, Learn, Grow!
//           </h1>
//           <div className="block p-8 rounded-lg shadow-2xl bg-gradient-to-t from-yellow-400 to-yellow-600 text-center text-2xl font-semibold text-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl">
//             <h2 className="text-3xl font-bold text-white">Child</h2>
//             <p className="mt-2 text-lg text-white">Create your pet and explore the world!</p>
//           </div>
//         </div>

//         {/* Teacher Block */}
//         <div className="text-center mb-4">
//           <h1 className="text-5xl font-extrabold text-white mb-4 text-shadow-xl animate__animated animate__bounceIn">
//             Inspire the Future!
//           </h1>
//           <div className="block p-8 rounded-lg shadow-2xl bg-gradient-to-t from-pink-400 to-pink-600 text-center text-2xl font-semibold text-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl">
//             <h2 className="text-3xl font-bold text-white">Teacher</h2>
//             <p className="mt-2 text-lg text-white">Assign lessons and track progress!</p>
//           </div>
//         </div>

//         {/* Parent Block */}
//         <div className="text-center mb-4">
//           <h1 className="text-5xl font-extrabold text-white mb-4 text-shadow-xl animate__animated animate__bounceIn">
//             Guide the Way!
//           </h1>
//           <div className="block p-8 rounded-lg shadow-2xl bg-gradient-to-t from-indigo-400 to-indigo-600 text-center text-2xl font-semibold text-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl">
//             <h2 className="text-3xl font-bold text-white">Parent</h2>
//             <p className="mt-2 text-lg text-white">Monitor your child’s learning journey!</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import { Link } from "react-router-dom"; // Import Link from React Router
import "../pages/HomePage.css";
import butterflyImage from "../assets/butterfly.svg"; // Ensure this path is correct

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-400 relative overflow-hidden">
      {/* Multiple 3D Butterfly Animations */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`butterfly-animation butterfly-${index + 1}`}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }} // Random positioning to test visibility
        >
          <img
            src={butterflyImage}
            alt="Butterfly"
            width="100"
            height="100"
            className="butterfly-3d"
          />
        </div>
      ))}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 relative z-0">
        {/* Child Block */}
        <div className="text-center mb-4">
          <h1 className="text-5xl font-extrabold text-white mb-4 text-shadow-xl animate__animated animate__bounceIn">
            Play, Learn, Grow!
          </h1>
          <Link to="/select">
            <div className="block p-8 rounded-lg shadow-2xl bg-gradient-to-t from-yellow-400 to-yellow-600 text-center text-2xl font-semibold text-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              <h2 className="text-3xl font-bold text-white">Child</h2>
              <p className="mt-2 text-lg text-white">
                Create your pet and explore the world!
              </p>
            </div>
          </Link>
        </div>

        {/* Teacher Block */}
        <div className="text-center mb-4">
          <h1 className="text-5xl font-extrabold text-white mb-4 text-shadow-xl animate__animated animate__bounceIn">
            Inspire the Future!
          </h1>
          <Link to="/teacher">
            <div className="block p-8 rounded-lg shadow-2xl bg-gradient-to-t from-pink-400 to-pink-600 text-center text-2xl font-semibold text-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              <h2 className="text-3xl font-bold text-white">Teacher</h2>
              <p className="mt-2 text-lg text-white">
                Assign lessons and track progress!
              </p>
            </div>
          </Link>
        </div>

        {/* Parent Block */}
        <div className="text-center mb-4">
          <h1 className="text-5xl font-extrabold text-white mb-4 text-shadow-xl animate__animated animate__bounceIn">
            Guide the Way!
          </h1>
          <Link to="/parent">
            <div className="block p-8 rounded-lg shadow-2xl bg-gradient-to-t from-indigo-400 to-indigo-600 text-center text-2xl font-semibold text-gray-700 transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              <h2 className="text-3xl font-bold text-white">Parent</h2>
              <p className="mt-2 text-lg text-white">
                Monitor your child’s learning journey!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
