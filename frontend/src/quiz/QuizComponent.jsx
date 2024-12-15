import React, { useState } from "react";
import questions from "./questions";
import ProgressBar from "./ProgressBar";
import AnswerButton from "./AnswerButton";
import "./quizStyles.css"; // For kid-friendly styles

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selected) => {
    if (selected === currentQuestion.correct) {
      alert("🎉 Correct! Great job! 🌟");
    } else {
      alert("🙈 Oops! Try again next time!");
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      alert("🏆 Quiz Complete! You're a superstar! 🌟");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-purple-500 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 text-center border-4 border-yellow-400">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-yellow-500 mb-4 font-kids">
          🚀 Level {currentQuestion.id} 🚀
        </h2>

        {/* Progress Bar */}
        <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />

        {/* Question */}
        <p className="text-xl text-blue-800 font-bold mb-4 font-kids">
          {currentQuestion.question}
        </p>

        {/* Code Block */}
        {currentQuestion.code && (
          <div className="bg-gray-200 font-mono text-lg text-left p-4 rounded-lg shadow-inner border-l-4 border-blue-500 mb-6">
            <span className="text-blue-600">print</span>
            <span>(</span>
            <span className="text-red-500">"{currentQuestion.code}"</span>
            <span>)</span>
          </div>
        )}

        {/* Answer Buttons */}
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <AnswerButton
              key={option.id}
              text={`${option.id}  ${option.text}`}
              onClick={() => handleAnswer(option.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
