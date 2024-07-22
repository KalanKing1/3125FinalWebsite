import React, {useContext} from 'react'
import { PList } from '../Lists/PList';
import { ShopContext } from '../../context/shop-context';
import {CartItem} from './cartItem';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './CartInfo.css';

const CartInfo = () => {
    const { cartItems } = useContext(ShopContext);
    
    const isEmpty = () => {
        for (const keys in cartItems) {
            if (cartItems[keys] > 0) {
                return false;
            }
        }
        return true;
    }

    var totalPrice = 0;
    var totalItems = 0;




  return (
    <div className='cart'>
        <div>
            <Link to="/Products" className="cart-back-button"> 
                    <i className='fa-solid fa-arrow-left'/> Back
                </Link>
                <h1 className='cart-title'>Your cart</h1>
        </div>
        <div className='top-level'>
            
            <div className='cart-items'>
                
                
                {PList.map((product) => {
                if (cartItems[product.id] !== 0) {
                    for (let i = 0; i< cartItems[product.id]; i++){
                            totalPrice += product.price;
                            totalItems += 1;
                    } 
                        return <CartItem data={product}/>
                    } else {
                        return null;
                    }
                })}
                {isEmpty() === true && <h1 className='cart-empty'>Add some items to your cart to get started</h1>}
                
            </div>
            <div className='order-summary'>
                <h1 className='summary-text'> Order summary</h1>
                <p className='total-items'>Total items: {totalItems}</p>
                <p className='total-cost'>Total cost: {totalPrice}</p>
                {isEmpty() === false && <Button class="btns" buttonStyle="btn--outline" src="/Checkout"> Checkout</Button>}
                
            </div>
        </div>
    </div>
  )
}

export default CartInfo
