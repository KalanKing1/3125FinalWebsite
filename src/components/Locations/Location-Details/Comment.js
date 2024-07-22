import React from 'react'

export const Comment = (props) => {
    const {id, locationId,commentName, commentText, commentRank} = props.data

  return (
    <div className='review'>
      <h1>{commentName}</h1>
      <h2>{commentRank} <i class="fa-solid fa-star"></i></h2>
      <p>{commentText}</p>
    </div>
  )
}

