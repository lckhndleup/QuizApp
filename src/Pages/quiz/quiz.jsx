import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { useParams } from "react-router-dom";
import * as api from "../../Api/api";
import QuestionsCard from "../../Components/questioncard/QuestionsCard";
import Modal from "../../Components/modal/modal";

function Quiz() {
  const { difficulty, amount } = useParams();

  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);

  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
    };
    getData();
  }, []);

  console.log(questionsData);

  return (
    <div className="quiz">
      {modal ? (
        <Modal score={score}/>
      ) : (
        <QuestionsCard
          questionsData={questionsData}
          count={count}
          setCount={setCount}
          score={score}
          setScore={setScore}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
}

export default Quiz;
