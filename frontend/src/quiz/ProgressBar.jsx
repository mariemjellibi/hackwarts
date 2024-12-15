

const ProgressBar = ({ current, total }) => {
  const stars = Array.from({ length: total }, (_, index) =>
    index < current ? "⭐" : "⚪"
  );

  return (
    <div className="mb-6 flex justify-center space-x-1 text-2xl">
      {stars.map((star, idx) => (
        <span key={idx}>{star}</span>
      ))}
    </div>
  );
};

export default ProgressBar;
