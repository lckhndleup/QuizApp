import React, { useState } from "react";
import "./QuestionsCard.css";
import { useEffect } from "react";

function QuestionsCard({
  questionsData,
  count,
  setCount,
  score,
  setScore,
  modal,
  setModal,
}) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    setTimer(30);
  }, [count]);

  useEffect(() => {
    if (timer > 0) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
    if (timer === 0 && count < 10) {
      setCount((prevCount) => prevCount + 1);
      setTimer(30);
    } else if (count >= 10) {
      setModal(true);
    }
  }, [timer]);
  const approvedChoice = (event) => {
    const trueAnswer = questionsData[count]?.correct_answer;
    const checkAnswer = event.target.value === trueAnswer;

    if (checkAnswer) {
      setScore(score + 100);
    }
    setCount(count + 1);
    if (count === 9) setModal(true);
    console.log(modal);
  };
  return (
    <div className="QuestionsCard">
      <div className="timer">{timer}</div>
      <div className="CardContent">
        {count + 1}/10-{questionsData[count]?.question}
        <br />
        {questionsData[count]?.answers.map((answer, i) => (
          <button onClick={approvedChoice} key={i} value={answer}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionsCard;
