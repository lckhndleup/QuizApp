import React from 'react';
import "./Modal.css";
import { Navigate } from 'react-router-dom';

function Modal({score}) {
    
  return (
    <div className='section'>
        <div className='score'>Skorunuz: {score}</div>
        <div onClick={() => Navigate("/")} className='modal-btn'>Tekrar başla</div>
        </div>
  )
}

export default Modal