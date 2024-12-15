
const AnswerButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-yellow-300 text-black font-semibold py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200 hover:bg-yellow-400"
    >
      {text}
    </button>
  );
};

export default AnswerButton;
