import React, { useState } from 'react';
import "./Introduce.css"
import Dropdown from '../../Components/dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';

function Introduce() {
  const difficulty = ["easy","medium","hard"]
  const [difficultyChange,setDifficultyChange] = useState('')
  const navigate = useNavigate();
  const TOTAL_QUESTİONS = 10

  const startQuiz = () => {
    if (difficultyChange) { //difficultyChange Dropdown ile içi dolarak gelmişse if koşulu boş değildir ve sağlar
      navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTİONS}`)
    }
  }
  return (
    <div className='introduce'>
      <div className='introduce-container'>
        <img src="https://i.pinimg.com/originals/f7/d7/b7/f7d7b7e726ed728fca81ef507da1e457.gif" alt="" />
        <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange}/>
        <div onClick={startQuiz} className='introduce-btn'>Quiz'e Başla</div>
      </div>
    </div>
  )
}

export default Introduce