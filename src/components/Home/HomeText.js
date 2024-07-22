import React from 'react'
import { Button } from '../Button';
import './HomeText.css';

function HomeText() {
  return (
    <div className ='home-container'>
      <div className ='item-container'>
        <h1 className ='adventure-text'>ADVENTURE AWAITS</h1>
        <p className ='what-text'>What are you waiting for?</p>
        <div className="home-btns">
            <Button src="/Learning" className="btns" buttonStyle="btn--outline">
                Get Started
            </Button>
            <Button src ="/Register" className="btns" buttonStyle="btn--outline">
                Course sign up
            </Button>
        </div>
      </div>
    </div>
  )
};

export default HomeText
