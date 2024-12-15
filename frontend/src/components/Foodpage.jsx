

const Foodpage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-300 to-yellow-200 p-4">
      {/* Container */}
      <div className="bg-yellow-300 p-6 rounded-3xl shadow-lg w-full max-w-4xl">
        <h1 className="text-5xl text-center font-extrabold mb-8 text-purple-700 tracking-wide drop-shadow-lg animate-bounce">
          Drinks Menu!
        </h1>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/3 flex flex-col items-center space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-xl w-36 h-48 flex items-center justify-center transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              <img
                src="lime_drink.png"
                alt="Lime Drink"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-xl w-36 h-48 flex items-center justify-center transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-2xl">
              <img
                src="burger.png"
                alt="Burger"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Drinks Grid */}
          <div className="w-2/3 grid grid-cols-3 gap-6">
            {/* Drink Items */}
            {[
              { name: "water", img: "water.png" },
              { name: "coffee", img: "coffee.png" },
              { name: "tea", img: "tea.png" },
              { name: "juice", img: "juice.png" },
              { name: "iced coffee", img: "iced_coffee.png" },
              { name: "bubble tea", img: "bubble_tea.png" },
            ].map((drink, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg p-6 shadow-lg flex flex-col items-center transform transition-all hover:scale-110 hover:rotate-6 hover:shadow-2xl"
              >
                <img
                  src={drink.img}
                  alt={drink.name}
                  className="w-24 h-24 mb-4 object-contain transform transition-all hover:scale-125"
                />
                <p className="text-lg text-white font-bold drop-shadow-lg text-center animate-pulse">
                  {drink.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodpage;