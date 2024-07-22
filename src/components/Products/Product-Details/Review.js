import React from 'react'
import './Review.css'

export const Review = (props) => {
    const {id, productId,reviewName, reviewText, reviewRank} = props.data

  return (
    <div className='review'>
      <h1>{reviewName}</h1>
      <h2>{reviewRank} <i class="fa-solid fa-star"></i></h2>
      <p>{reviewText}</p>
    </div>
  )
}

