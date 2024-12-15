
const NavigationButton = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105"
    >
      <img src={icon} alt={text} className="w-6 h-6" />
      <span>{text}</span>
    </button>
  );
};

export default NavigationButton;
