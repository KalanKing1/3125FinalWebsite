import React, {useContext} from 'react';
import './cartItem.css';
import { ShopContext } from '../../context/shop-context';
import { Button } from '../Button';

export const CartItem = (props) => {

    const {id, productName, price, productImage} = props.data;
    const { removeFromCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
  return (
    
    <div className='product-cart'>
      <img src={productImage} alt='product'/>
        <div className='description'>
            <p className ="productName">
                <b>{productName}</b>
            </p>
            <p className ="price">
                price: ${price}
            </p>
        </div>
        <Button class="btns" buttonStyle="btn--outline" onClick={() => removeFromCart(id)}> 
            Remove From Cart {cartItemAmount > 1 && <>({cartItemAmount})</>}
        </Button>
    </div>
  )
}

