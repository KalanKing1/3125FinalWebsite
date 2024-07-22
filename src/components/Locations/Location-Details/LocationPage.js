import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { LList } from '../../Lists/LList';
import { Button } from '../../Button';
import { CoList } from '../../Lists/CoList';
import { Comment } from './Comment';
import { round } from 'mathjs';


import './LocationPage.css';

const LocationPage = () => {

  const { id } = useParams();
  const location = LList[id-1];

  const [in1, setin1] = useState('');
  const [in2, setin2] = useState('');
  const [in3, setin3] = useState('');


  function average(){
    let sum = 0;
    let temp = [];
    for(let i=0; i<CoList.length; i++){
      if (CoList[i].locationId === location.id){
        temp.push(CoList[i].commentRank);
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

  function addComment(params){
    CoList.push({
      id: CoList.length,
      locationId: location.id,
      commentName: params[0],
      commentText: params[1],
      commentRank: params[2]
    })
  }

  const rating = average();

  return (
    <div className='top-container'>
      <div className="image-container">
        <img className="l-image" src={location.locationImage} alt='location'/>
        {location.altImages.map((image) => {
            return <img className="l-image" src={image} alt='location'/>
        })}
      </div>
      <div className='desc-container'>
        <h1 className='l-name'>{location.locationName}</h1>
        <h2 className='l-distance'>${location.distance}</h2>
        <h2>Rating: {rating} <i class="fa-solid fa-star"></i></h2>
        <p className='l-desc'> {location.locationDesc}</p>
        <div className='comment-container'>
          
            {CoList.map((comment) => {
              if (comment.locationId === location.id){
                return <Comment data={comment}/>
              }else {
                return null;
              }
              
            })}
        </div>
        <div className='addComment-container'>
            <input name="input" type='text' onChange={(e)=>{setin1(e.target.value);}}></input>
            <select onChange={(e)=>{setin3(e.target.value);}}>
              <option></option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <input name="input" type='text' onChange={(e)=>{setin2(e.target.value);}}></input>
            <Button onClick={()=>{addComment([in1, in2, in3])}}></Button>
        </div>
      </div>

      

    </div>
    
  )
}

export default LocationPage
