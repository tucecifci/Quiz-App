import { useState } from "react";
import "./App.css";
import Question from "./Question";
import monica from "./assets/monica.jpeg";
import ross from "./assets/ross.jpeg";
import phoebe from "./assets/phoebe.jpeg";
import joey from "./assets/joey.jpeg";
import rachel from "./assets/rachel.jpeg";
import chandler from "./assets/chandler.jpeg";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { use } from "react";

const questions = [
  {
    id: 1,
    question: "Ross’un ilk eşinin adı nedir?",
    options: ["Carol", "Susan", "Emily", "Julie"],
    correctAnswer: "Carol",
    image: ross,
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
    question: "Phoebe’nin ünlü şarkısının adı nedir?",
    options: ["Smelly Dog", "Smelly Cat", "Happy Cat", " Stinky Cat"],
    correctAnswer: "Smelly Cat",
    image: phoebe,
  },
  {
    id: 4,
    question:
      "Rachel'ın dizinin ilk bölümünde düğünden kaçtığı nişanlısının adı nedir?",
    options: ["Barry", "Richard", "Joshua", "Mark"],
    correctAnswer: "Barry",
    image: rachel,
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
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState(null); //kullanıcının sectiği cevap
  // const [isCorrectAnswer, setIsCorrectAnswer] = useState(null); //doğru/yanlış mı
  const [answers, setAnswers] = useState(
    questions.map(() => ({ selectedAnswer: null, isCorrectAnswer: null }))
  ); //her sorunun seçilen cevabının doğru/yanlış durumunu saklar

  function handleNextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      // setCurrentQuestionIndex[currentQuestionIndex+1]; //reactta setState asenkron çalışır, bu nedenle currentQuestionındex i güncellerken, güncel değer hemen etkili olmaz.
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // yukardaki yerine callback functionu ekleyeceksin.
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
  };

  return (
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
  );
}

export default App;
