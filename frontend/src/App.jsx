
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
