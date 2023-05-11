import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/quiz.scss";
//퀴즈 문제 항목 부분
const questions = [
  {
    question: "강아지의 다리의 갯수는?",
    options: ["10개", "4개", "6개", "8개"],
    answer: "4개",
  },
  {
    question: "강아지가 좋아하는 것은?",
    options: ["개껌", "치킨", "피자", "라면"],
    answer: "개껌",
  },
  {
    question: "강아지의 올바른 훈육방법 중 적합하지 않는 방법은?",
    options: [
      "긍정강화훈육",
      "일관성있는훈육",
      "엄격한훈육",
      "항상칭찬하는훈육",
    ],
    answer: "항상칭찬하는훈육",
  },
  {
    question: "강아지의 훈련순서 중 가장 먼제 해야 하는 훈련은?",
    options: ["배변훈련", "분리훈련", "복종훈련", "입질 훈련"],
    answer: "배변훈련",
  },
  {
    question: "다음 중 강아지가 먹을 수 있는 과일은?",
    options: ["사과", "체리", "포도", "오렌지"],
    answer: "오렌지",
  },
  {
    question: "강아지를 사람을 물었을 때 올바르지 않은 대처법은?",
    options: [
      "빠르게 저지하기",
      "침착하고 정중하기",
      "도망가기",
      "병원에 연락하기",
    ],
    answer: "도망가기",
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [passed, setPassed] = useState(false);
  //퀴즈에 대한 스코어가 쌓이는 코드
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    //퀴즈를 풀었을 때 다음 퀴즈로 넘어가는 코드
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true); //점수가 나오는 코드
      setPassed(score >= 5); //점수에 대한 커트 라인 부분 현재 5개이하로 설정
    }
  };

  return (
    <div className="Quiz">
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            {/* 퀴즈 맞춘 갯수 표시 부분 */}
            <h1>
              {questions.length} 문제 중 {score}문제를 맞추셨습니다!
            </h1>
            {/* 퀴즈 합 불 표시부분 */}
            <h1>
              {passed
                ? "축하합니다! 합격이에요"
                : "아쉽지만 불합격이에요. 다시 한번 풀어보세요"}
            </h1>

            <button
              onClick={() => navigate("/quizhome")}
              className="result_btn"
            >
              돌아가기
            </button>
          </div>
        ) : (
          <>
            {/* 퀴즈 화면 부분 */}
            <div className="question-section">
              <div className="question-count">
                {/* 퀴즈 제목?과 퀴즈넘버 부분 */}
                <span>강아지 훈련 기초편 QUIZ! {currentQuestion + 1}</span>/
                {questions.length}
              </div>
              <br />
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>
            {/* 퀴즈 정답 버튼 항목 부분 */}
            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <ul key={option}>
                  <button
                    className="answer-button"
                    onClick={() =>
                      handleAnswerOptionClick(
                        option === questions[currentQuestion].answer
                      )
                    }
                  >
                    {option}
                  </button>
                </ul>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
