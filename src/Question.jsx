import React from "react";

function Question({ questions, currentIndex, handleAnswer, selectedAnswer }) {
  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl sm:h-full md:h-full ">
        {/* Soru Başlığı */}
        <h2 className="font-bold text-xl mb-4 text-center md:text-2xl">
          <span>{questions[currentIndex].id}. </span>
          {currentQuestion.question}
        </h2>

        {/* Resim */}
        <div className="flex justify-center mb-8">
          <img
            className="w-64 h-64 object-cover rounded-md"
            src={currentQuestion.image}
            alt="Question"
          />
        </div>

        {/* Butonlar */}
        <div className="grid grid-cols-2 gap-6">
          {currentQuestion.options.map((option, index) => {
            const isCorrectOption = option === currentQuestion.correctAnswer;
            const isSelectedOption = option === selectedAnswer;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null} // bir seçim yapıldıysa, diğerlerini devredışı bırak
                className={`py-4 px-6 text-lg rounded cursor-pointer
                  ${selectedAnswer
                    ? isSelectedOption
                      ? isCorrectOption
                        ? "bg-green-600 text-white" // Doğru seçilen cevap
                        : "bg-red-600 text-white" // Yanlış seçilen cevap
                      : isCorrectOption
                      ? "bg-green-600 text-white" // Doğru cevap (yanlış seçilmişse)
                      : "bg-gray-300 text-black" // Seçilmeyen diğer seçenekler
                    : "bg-purple-700 text-white hover:bg-purple-900" // Henüz seçim yapılmamışsa
                  }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Question;
