const Teacher = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 min-h-screen p-6 text-white font-sans">
      {/* Navigation Bar */}
      <div className="bg-gray-200 rounded-lg p-4 mb-6 flex items-center shadow-lg">
        <input
          type="text"
          placeholder="Barre de navigation"
          className="w-full rounded-md px-4 py-2 text-gray-600"
        />
        <button className="ml-2 bg-purple-700 p-2 rounded-full">
          🔍
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Section */}
        <div className="col-span-8 bg-white rounded-lg p-6 shadow-lg text-gray-800">
          {/* Teacher Info */}
          <div className="bg-blue-200 rounded-lg p-4 mb-4">
            <p className="text-gray-700 font-semibold">
              <span className="text-blue-900">Nom du professeur:</span> {" "}
            </p>
            <p className="text-gray-700 font-semibold">
              <span className="text-blue-900">Matière:</span> {" "}
            </p>
          </div>

          {/* Students List */}
          <div>
            <h2 className="font-bold text-gray-700 mb-4">Liste des élèves</h2>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <div className="flex justify-between bg-gray-200 p-2 rounded-lg">
                <span className="text-purple-600 font-semibold">Nom</span>
                <span className="font-semibold">Prénom</span>
              </div>
              {/* Student entries */}
              {/* ... */}
            </div>
          </div>

          {/* Progress Chart */}
          <div className="mt-6 flex items-center justify-center">
            <div className="w-1/2">
              <div className="relative w-48 h-48 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="purple"
                    strokeWidth="8"
                    fill="transparent"
                  ></circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="green"
                    strokeWidth="8"
                    strokeDasharray="25, 75"
                    fill="transparent"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-gray-800">
                  <div className="text-lg font-bold">
                    75% <br />
                    <span className="text-gray-500 text-sm">cours terminé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Lesson Section */}
          <div className="mt-6 bg-blue-200 p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-gray-800">Ajouter un cours</h3>
            <form className="mt-4">
              <div className="mb-4">
                <label htmlFor="lesson-title" className="block text-gray-700 font-semibold">
                  Titre du cours
                </label>
                <input
                  id="lesson-title"
                  type="text"
                  className="w-full mt-2 p-2 rounded-lg border border-gray-300"
                  placeholder="Titre du cours"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lesson-description" className="block text-gray-700 font-semibold">
                  Description du cours
                </label>
                <textarea
                  id="lesson-description"
                  className="w-full mt-2 p-2 rounded-lg border border-gray-300"
                  placeholder="Description du cours"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="lesson-date" className="block text-gray-700 font-semibold">
                  Date du cours
                </label>
                <input
                  id="lesson-date"
                  type="date"
                  className="w-full mt-2 p-2 rounded-lg border border-gray-300"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-700 text-white px-6 py-2 rounded-full mt-4 hover:bg-purple-900 transition-colors duration-300"
              >
                Ajouter le cours
              </button>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-4 bg-white rounded-lg p-6 shadow-lg text-gray-800">
          <h2 className="font-bold mb-4">Prochains événements</h2>
          <div className="space-y-4">
            {/* Event Entries */}
            {/* ... */}
          </div>

          {/* Average Score */}
          <div className="mt-6 bg-blue-200 p-4 rounded-lg text-center">
            <h3 className="text-gray-800 font-semibold">Score moyen des élèves</h3>
            <p className="text-blue-900 text-3xl font-bold mt-2">85%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
