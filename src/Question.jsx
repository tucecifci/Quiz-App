import React from "react";

function Question({questions, currentIndex}) {
const currentQuestion = questions[currentIndex];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {/* Soru Başlığı */}
       <h2 className="font-bold text-2xl mb-4 text-center">{questions[currentIndex].question} </h2>

        
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
            {questions[currentIndex].options.map((option, index) =>(
             <button className="bg-blue-300 text-white py-4 px-6 text-lg rounded hover:bg-blue-600" key={index}>{option} </button>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Question;
