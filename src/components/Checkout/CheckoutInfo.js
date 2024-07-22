import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './CheckoutInfo.css';
import { Button } from '../Button';
import { regex } from 'regex';

function CheckoutInfo(){

    const [promoCode, setPromoCode] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');

    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');

    function confirmOrder (params){
        for (let i=1; i<params.length;i++){
            if (params[i].length === 0){
                alert("All boxes must be filled")
                return false;
            }
    }
}


    return(
        <div className='box'>
             <div className='leftbox'>
             <div className='box-item left'></div>
             <div className="left input-container">
                    <h2> 2. Payment Information</h2>
                    <input className="input" name="cardNumber" placeholder="Card Number" onChange={(e)=>{setCardNumber(e.target.value);}}/>
                    <input className="input" name="expirationDate" placeholder="mm/yy" onChange={(e)=>{setExpirationDate(e.target.value);}}/>
                    <input className="input" name="cvv" placeholder="cvv" onChange={(e)=>{setCvv(e.target.value);}}/>
                </div>
             </div>
             <div className='rightBox'>
                <Link to="/Cart" className="back-button"> 
                    <i className='fa-solid fa-arrow-left'/> Back
                </Link>   
                <div className="right container">
                    <h1>Big text goes here</h1>
                    <p>this is text that I am placing for place holding</p>
                </div>
                <div className="right input-container">
                    <h2> 1. Shipping Information</h2>
                    <input className="input" name="promoCode" placeholder="Promo Code" onChange={(e)=>{setPromoCode(e.target.value);}}/>
                    <input className="input" name="address" placeholder="Address" onChange={(e)=>{setAddress(e.target.value);}}/>
                    <input className="input" name="postalCode" placeholder="postalCode" onChange={(e)=>{setPostalCode(e.target.value);}}/>
                </div>
                <div className="right input-container">
                    <h2> Leave us a review: </h2>
                    <input className="review-box" name="review-box" placeholder="Leave us a review"/> 
                </div>
                <div className='right confirm-button'>
                <Button onClick={()=>{confirmOrder([promoCode, address, postalCode, cardNumber, expirationDate, cvv])}}></Button>
                </div>
             </div>
        </div>
    )
}

export default CheckoutInfo;