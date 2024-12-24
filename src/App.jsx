import { useEffect, useState } from "react";
import "./App.css";
import Question from "./Question";
import monica from "./assets/monica.jpeg";
import ross from "./assets/ross.jpeg";
import phoebe from "./assets/phoebe.jpeg";
import joey from "./assets/joey.jpeg";
import rachel from "./assets/rachel.jpeg";
import chandler from "./assets/chandler.jpeg";
import janice from "./assets/janice.jpeg";
import myEyes from "./assets/myeyes.jpeg";
import mondler from "./assets/mondler.jpeg";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { use } from "react";
import WelcomePage from "./WelcomePage";
import ResultPage from "./ResultPage";

const questions = [
  {
    id: 1,
    question: "Phoebe’nin ünlü şarkısının adı nedir?",
    options: ["Smelly Dog", "Smelly Cat", "Happy Cat", " Stinky Cat"],
    correctAnswer: "Smelly Cat",
    image: phoebe,
  },

  {
    id: 2,
    question: "Joey’nin en sevdiği yemek nedir?",
    options: ["Pizza", "Sandviç", "Makarna", "Burger"],
    correctAnswer: "Sandviç",
    image: joey,
  },
  {
    id: 3,
    question: "Ross’un ilk eşinin adı nedir?",
    options: ["Carol", "Susan", "Emily", "Julie"],
    correctAnswer: "Carol",
    image: ross,
  },

  {
    id: 4,
    question: "Bu fotoğraf konuşabilse ne derdi?",
    options: [
      "I wish I could, but I dont want to.",
      "My Eyes! My Eyes!",
      "Oh My God",
      "I Know",
    ],
    correctAnswer: "My Eyes! My Eyes!",
    image: myEyes,
  },

  {
    id: 5,
    question: "Chandler'ın ikinci ismi nedir?",
    options: ["Michael", "Matthew", "Muriel", "Mitchell"],
    correctAnswer: "Muriel",
    image: chandler,
  },
  {
    id: 6,
    question: "Monica'nın lise lakabı neydi?",
    options: ["Big Mon", "Harmonica", "Little Chef", "Big Fat Goalie"],
    correctAnswer: "Big Fat Goalie",
    image: monica,
  },
  {
    id: 7,
    question:
      "Rachel'ın Barry'nin düğününde söylediği şarkının ismi aşağıdakilerden hangisidir?",
    options: [
      "My Heart Will Go On",
      "I Will Always Love You",
      "Copa Cabana",
      "I Will Survive",
    ],
    correctAnswer: "Copa Cabana",
    image: rachel,
  },

  {
    id: 8,
    question: "Bu fotoğraf konuşabilse ne derdi?",
    options: ["Oh My God!", "Shup Up", "I Know!", "My Eyes!"],
    correctAnswer: "Oh My God!",
    image: janice,
  },
  {
    id: 9,
    question: "Rachel'ın Ross'a yazdığı mektup kaç sayfadır?",
    options: [
      "1 page",
      "8 pages",
      "Rachel Ross'a hiç mektup yazmamıştır",
      "18 pages front and back",
    ],
    correctAnswer: "18 pages front and back",
    image: ross,
  },
  {
    id: 10,
    question: "Chandler ve Monica'yı ilk kim öğrenir?",
    options: ["Joey", "Ross", "Rachel", "Phoebe"],
    correctAnswer: "Joey",
    image: mondler,
  },
];

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    questions.map(() => ({ selectedAnswer: null, isCorrectAnswer: null }))
  ); //her sorunun seçilen cevabının doğru/yanlış durumunu saklar
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      // setCurrentQuestionIndex[currentQuestionIndex+1]; //reactta setState asenkron çalışır, bu nedenle currentQuestionındex i güncellerken, güncel değer hemen etkili olmaz.
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // yukardaki yerine callback functionu ekleyeceksin.
    } else {
      setQuizFinished(true);
    }
  }
  function handleBeforeQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  }

  const handleAnswer = (selectedOption) => {
    const isCorrect =
      questions[currentQuestionIndex].correctAnswer === selectedOption;
    // setSelectedAnswer(selectedOption); //seçilen cevabı kaydet
    // setIsCorrectAnswer(isCorrect); //doğru yanlış durumunu kontrol et

    setAnswers((prevAnswers) =>
      prevAnswers.map((answer, index) =>
        index === currentQuestionIndex
          ? { selectedAnswer: selectedOption, isCorrectAnswer: isCorrect }
          : answer
      )
    );
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  //klavye olayları için useEffect
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        handleNextQuestion();
      }
      if (e.key === "ArrowLeft") {
        handleBeforeQuestion();
      }
    };
    window.addEventListener("keydown", handleKeyDown); // Olay dinleyicisini ekle
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentQuestionIndex]);

  return (
    <>
      {!quizStarted ? (
        <WelcomePage onStartQuiz={() => setQuizStarted(true)} />
      ) : quizFinished ? (
        <ResultPage score={score} totalQuestions={questions.length} />
      ) : (
        <div className="flex flex-col justify-around h-screen bg-purple-100">
          <FaRegArrowAltCircleLeft
            size="2em"
            className="absolute left-96 cursor-pointer"
            onClick={handleBeforeQuestion}
          />
          <Question
            questions={questions}
            currentIndex={currentQuestionIndex}
            handleAnswer={handleAnswer}
            selectedAnswer={answers[currentQuestionIndex].selectedAnswer}
            isCorrectAnswer={answers[currentQuestionIndex].isCorrectAnswer}
          />
          <FaRegArrowAltCircleRight
            size="2em"
            className="absolute right-96 cursor-pointer"
            onClick={handleNextQuestion}
          />
        </div>
      )}
    </>
  );
}

export default App;
