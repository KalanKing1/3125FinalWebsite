import React, {useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { PList } from '../../Lists/PList';
import { ShopContext } from '../../../context/shop-context';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { RList } from '../../Lists/RList';
import { Review } from './Review';
import { round } from 'mathjs';


import './ProductPage.css';

const ProductPage = () => {

  const { id } = useParams();
  const item = PList[id-1];

  const [in1, setin1] = useState('');
  const [in2, setin2] = useState('');
  const [in3, setin3] = useState('');

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  function average(){
    let sum = 0;
    let temp = [];
    for(let i=0; i<RList.length; i++){
      if (RList[i].productId === item.id){
        temp.push(RList[i].reviewRank);
      }
    }
    if (temp.length === 0){
      return "Not yet Rated";
    }
    for (let i=0; i < temp.length; i++){
      sum += temp[i];
    }
    return round(sum/temp.length * 10) /10;


  }

  function addReview(params){
    RList.push({
      id: RList.length,
      productId: item.id,
      reviewName: params[0],
      reviewText: params[1],
      reviewRank: params[2]
    })
  }

  const rating = average();
  

  return (
    <div className='top-container'>
      <div className="image-container">
        <img className="p-image" src={item.productImage} alt='product'/>
        {item.altImages.map((image) => {
            return <img className="p-image" src={image} alt='product'/>
        })}
      </div>
      <div className='desc-container'>
        <div className='product-desc'>
          <Link to="/Cart" className="shop-logo">
            Cart <i class="fa-solid fa-cart-shopping"></i>
          </Link>
          <h1 className='p-name'>{item.productName}</h1>
          <h2 className='p-price'>${item.price}</h2>
          <h2>Rating: {rating} <i class="fa-solid fa-star"></i></h2>
          <p className=''> {item.productDesc}</p>
          <Button class="btns" buttonStyle="btn--outline" onClick={() => addToCart(id)}> 
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </Button>
        </div>
        <div className='review-container'>
          
            {RList.map((review) => {
              if (review.productId === item.id){
                return <Review data={review}/>
              }else {
                return null;
              }
              
            })}
        </div>
        <div className='addReview-container'>
          <h1 className='add-review-text'>Add a review</h1>
          <div>
          <input placeholder='Name' className='review-name' name="input" type='text' onChange={(e)=>{setin1(e.target.value);}}></input>
            <select className='review-number' onChange={(e)=>{setin3(e.target.value);}}>
              <option></option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
            <input className='review-text' name="input" type='text' onChange={(e)=>{setin2(e.target.value);}}></input>
          <Button class="btns" buttonStyle="btn--outline" onClick={()=>{addReview([in1, in2, in3])}}> 
            Submit review
          </Button>
            
        </div>
      </div>

      

    </div>
    
  )
}

export default ProductPage
