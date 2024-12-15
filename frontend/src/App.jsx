// // import React, { useRef, useEffect } from 'react';
// // import * as THREE from 'three';
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// // import './App.css';

// // const App = () => {
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const scene = new THREE.Scene();
// //     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// //     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
// //     renderer.setSize(window.innerWidth, window.innerHeight);
    
// //     // Create a simple cube to test Three.js rendering
// //     const geometry = new THREE.BoxGeometry();
// //     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// //     const cube = new THREE.Mesh(geometry, material);
// //     scene.add(cube);
    
// //     // Test the loading of the 3D model
// //     const loader = new GLTFLoader();
// //     loader.load(
// //       '/dog_model.glb',  // Ensure correct path to your model
// //       (gltf) => {
// //         console.log("Model loaded successfully");
// //         const pet = gltf.scene;
// //         pet.position.set(0, 0, 0);
// //         pet.scale.set(1, 1, 1);
// //         scene.add(pet);

// //         // Animate the scene
// //         const animate = () => {
// //           requestAnimationFrame(animate);

// //           cube.rotation.x += 0.01;  // Animate cube
// //           cube.rotation.y += 0.01;

// //           renderer.render(scene, camera);
// //         };

// //         animate();
// //       },
// //       undefined, // Optional progress callback
// //       (error) => {
// //         console.error('Error loading model:', error);
// //       }
// //     );

// //     camera.position.z = 10;
// //     camera.lookAt(new THREE.Vector3(0, 0, 0));

// //     return () => {
// //       renderer.dispose();
// //     };
// //   }, []);

// //   return (
// //     <div className="App">
// //       <h1>Your Virtual Pet</h1>
// //       <div className="flex justify-center items-center">
// //         <canvas ref={canvasRef}></canvas>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;
// import React from 'react'
// import LessonsMap from './components/LessonsMap'
// import Foodpage from './components/Foodpage'
// import HomePage from './pages/HomePage'
import 'animate.css';
// import Firstpage from './kid/firstpage';
// import QuizComponent from "./quiz/QuizComponent";
// const App = () => {
//   return (
//     <div>
//       {/* <LessonsMap/> */}
//       {/* <Foodpage/> */}
//       {/* <HomePage/> */}
//        <Firstpage /> 
//       {/* <QuizComponent />; */}
      
//     </div>
//   )
// }

// export default App

import {  Routes, Route } from "react-router-dom";
import FirstPage from "./kid/Firstpage";
import LessonsMap from "./components/LessonsMap";
import PetSelection from './components/PetSelection ';
import Teacher from './components/Teacher';
import Parent from './components/Parent';
import HomePage from "./pages/HomePage"
import QuizComponent from "./quiz/QuizComponent"
import Foodpage from './components/Foodpage';
const App = () => {
  return (

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/kid" element={<FirstPage />} />
        <Route path="/lessons" element={<LessonsMap />} />
        <Route path='/select' element={<PetSelection/>}/>
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/parent" element={<Parent/>} /> 
        <Route path="/quiz" element={<QuizComponent/>} /> 
        <Route path="/store" element={<Foodpage/>} /> 
      </Routes>

  );
};

export default App;
