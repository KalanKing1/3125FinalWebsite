import React from 'react'
import { Button } from '../Button';
import './HomeText.css';

function FHomeText() {
  return (
    <div className ='home-container'>
      <div className ='item-container'>
        <h1 className ='adventure-text'>LA AVENTURA ESPERA
        </h1>
        <p className ='what-text'>¿Que estas esperando?</p>
        <div className="home-btns">
            <Button src="/Learning" className="btns" buttonStyle="btn--outline">
                Empezar
            </Button>
            <Button src ="/Register" className="btns" buttonStyle="btn--outline">
             inscripción al curso
            </Button>
        </div>
      </div>
    </div>
  )
};

export default FHomeText
