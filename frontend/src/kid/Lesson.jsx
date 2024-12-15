
import { completeLesson } from "./services/api";

const Lesson = ({ userId, lessonName, onLessonComplete }) => {
  const handleCompleteLesson = async () => {
    await completeLesson(userId, lessonName);
    alert(`${lessonName} completed!`);
    if (onLessonComplete) onLessonComplete();
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-700">{lessonName}</h2>
      <button
        onClick={handleCompleteLesson}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow"
      >
        Complete Lesson
      </button>
    </div>
  );
};

export default Lesson;
