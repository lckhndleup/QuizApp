import React from 'react';
import "./Modal.css";
import { useNavigate } from 'react-router-dom';

function Modal({score}) {

  const navigate = useNavigate()
  const handleReset = () => {
    navigate('/');
  }
  return (
    <div className='section'>
        <div className='score'>Skorunuz: {score}</div>
        <div onClick={handleReset} className='modal-btn'>Tekrar başla</div>
        </div>
  )
}

export default Modal