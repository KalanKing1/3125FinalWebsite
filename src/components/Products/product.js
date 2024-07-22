import React, {useContext} from 'react'
import './product.css';
import { Button } from '../Button';
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    
    const cartItemAmount = cartItems[id];
  return (
    <div className ="product">
        <div className="image-container">
            <Link to={`/product-details/${id}`}>
                <img className="product-image" src={productImage} alt='product'/>
            </Link>
        </div>
        <div className='description-container'>
            <p className ="productName">
                <b>{productName}</b>
            </p>
            <p className ="price">
                price: ${price}
            </p>
        </div>
        <div className="single-button-container">
            <Button className="add-button" buttonStyle="btn--outline" onClick={() => addToCart(id)}> 
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </Button>
        </div>
    </div>
  )
}

