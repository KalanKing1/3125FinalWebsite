import React from 'react'
import { Link } from 'react-router-dom';

export const Location = (props) => {
    const {id, locationName, distance, locationImage} = props.data;
  return (
    <div className ="location">
        <Link to={`/location-details/${id}`}>
            <img src={locationImage} alt="location"/>
        </Link>
        <div className='description'>
            <p>
                <b>{locationName}</b>
            </p>
            <p>
                distance: {distance}
            </p>
        </div>
    </div>
  )
}

