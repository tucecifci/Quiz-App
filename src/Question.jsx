import React from "react";

function Question({ questions, currentIndex, handleAnswer, selectedAnswer, isCorrectAnswer }) {
  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {/* Soru Başlığı */}
        <h2 className="font-bold text-2xl mb-4 text-center">
          {questions[currentIndex].question}{" "}
        </h2>

        {/* Resim */}
        <div className="flex justify-center mb-8">
          <img
            className="w-64 h-64 object-cover rounded-md"
            src={questions[currentIndex].image}
            alt="Question"
          />
        </div>

        {/* Butonlar */}
        <div className="grid grid-cols-2 gap-6">
          {questions[currentIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null} // bir seçim yapıldıysa, diğerlerini devredışı bırak
              className= {`py-4 px-6 text-lg rounded cursor-pointer
               ${selectedAnswer === option
                ? isCorrectAnswer
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
                : "bg-purple-400 text-white hover:bg-purple-700"
                } `}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Question;
