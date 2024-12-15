import React from "react";

const Parent = () => {
  return (
    <div className="bg-purple-50 min-h-screen p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3584/3584194.png"
            alt="Parent"
            className="w-12 h-12"
          />
          <h1 className="text-purple-600 font-bold text-lg">
            Suivre la progression [Nom d’enfant]
          </h1>
        </div>
        <button className="bg-purple-400 text-white px-4 py-2 rounded-lg">
          Changer d'enfant
        </button>
      </div>

      {/* Progression Levels */}
      <div className="flex items-center justify-center space-x-6 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            ✅
          </div>
          <span>Level 1</span>
        </div>
        <div className="h-1 w-12 bg-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-yellow-300 rounded-full flex items-center justify-center">
            ⏳
          </div>
          <span>Level 2</span>
        </div>
        <div className="h-1 w-12 bg-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            🔒
          </div>
          <span>Level 3</span>
        </div>
        <div className="h-1 w-12 bg-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            🔒
          </div>
          <span>Level 4</span>
        </div>
      </div>

      {/* Cours Récents */}
      <div className="bg-purple-200 p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-bold text-gray-700">📚 Cours récents</h2>
        <table className="w-full mt-4 text-sm text-gray-600">
          <thead>
            <tr className="bg-purple-100">
              <th className="p-2">Cours</th>
              <th className="p-2">Statut</th>
              <th className="p-2">Score</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center bg-purple-50">
              <td className="p-2">HTML Débutant</td>
              <td className="p-2 text-purple-600 font-semibold">Terminé ✅</td>
              <td className="p-2">85%</td>
              <td className="p-2">12 juin 2024</td>
            </tr>
            <tr className="text-center bg-yellow-50">
              <td className="p-2">CSS Intermédiaire</td>
              <td className="p-2 text-yellow-500 font-semibold">En cours ⏳</td>
              <td className="p-2">-</td>
              <td className="p-2">-</td>
            </tr>
            <tr className="text-center bg-red-50">
              <td className="p-2">JS Débutant</td>
              <td className="p-2 text-red-600 font-semibold">
                🔒 Pour débloquer
              </td>
              <td className="p-2">-</td>
              <td className="p-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Badges Débloqués */}
      <div className="bg-purple-200 p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-bold text-gray-700">🏆 Badges débloqués</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center bg-yellow-100 p-3 rounded-lg">
            🏅 <span className="ml-2 text-gray-600">Champion de HTML</span>
          </div>
          <div className="flex items-center bg-yellow-100 p-3 rounded-lg">
            ⭐ <span className="ml-2 text-gray-600">Quiz master</span>
          </div>
        </div>
      </div>

      {/* Notification */}
      <div className="relative bg-pink-100 p-4 rounded-lg shadow text-center w-1/3 mx-auto">
        <span className="absolute -top-3 -left-3 text-yellow-500 text-2xl">
          🔔<span className="text-red-500">1</span>
        </span>
        <p className="text-pink-600 font-semibold">
          Quiz CSS terminé avec 80% de réussite 🎉🎉🎉
        </p>
      </div>

      {/* Commentaire de l'enseignant */}
      <div className="bg-purple-200 p-6 rounded-lg shadow mt-8">
        <h2 className="text-lg font-bold text-gray-700">📝 Commentaire de l'enseignant</h2>
        <p className="text-gray-600 mt-4">
          [Nom d’enfant] a montré une bonne progression dans le cours HTML, mais il doit encore améliorer sa compréhension des concepts de CSS. 
          Il est encouragé à travailler sur des projets pratiques pour renforcer ses compétences. 
          Le prochain niveau sera débloqué une fois que ces bases seront consolidées.
        </p>
      </div>
    </div>
  );
};

export default Parent;
