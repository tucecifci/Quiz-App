import React from "react";
import friends4 from "./assets/friends4.jpeg";

function ResultPage({ score, totalQuestions }) {
  let resultMessage;
  if (score === totalQuestions) {
    resultMessage =
      "Tebrikler🎉 Tüm soruları doğru yanıtladınız. Gerçek bir friends fanı olduğunuzu kanıtladınız.";
  } else if (score >= totalQuestions - 3) {
    resultMessage =
      "Fena değil, ancak bir kaç tekrara daha izlemeye ihtiyacın var. 📺 ";
  } else {
    resultMessage =
      "Sanırım hayatında hiç friends izlemedin yoksa bu kadar yanlışın başka bir açıklaması olamaz. 👿 Her ne yapıyorsan, bırak ve diziyi izle. ";
  }

  return (
    <div className="flex flex-col items-center justify-center bg-purple-200 min-h-screen">
      <h1 className="text-6xl font-bold text-center text-purple-800 mb-6">
        🥁 Sonuç 🥁
      </h1>
      <img className="w-96 mb-6 rounded-md" src={friends4} alt="" />
      <p className="text-xl text-gray-900 text-center max-w-lg">
        {resultMessage}
        <br />
        <span className="font-bold text-4xl mt-10">{score} / 10 </span>
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-purple-800 mt-6"
      >
        Yeniden Dene
      </button>
    </div>
  );
}

export default ResultPage;
