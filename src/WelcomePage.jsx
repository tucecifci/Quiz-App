import React from "react";
import friends from "./assets/friendsfull.jpeg";


function WelcomePage({onStartQuiz}) {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-200 min-h-screen">
      <h1 className="text-5xl md:text-6xl font-bold text-center text-purple-900 mb-6">
        Hoş Geldiniz!
      </h1>
      <img className="rounded-md md:w-2/6 mb-6" src={friends} alt="friends" />
      <p className="text-lg p-2 md:text-xl text-black-900 text-center max-w-xl mb-6">
        Bu quiz, Friends dizisi hakkındaki bilginizi test etmek için
        tasarlanmıştır. Her sorunun bir doğru cevabı vardır. Hazırsanız başlayalım!
      </p>
      <button 
      onClick={onStartQuiz}
      className="bg-purple-700 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-purple-900">Teste Başla</button>
    </div>
  );
}

export default WelcomePage;
