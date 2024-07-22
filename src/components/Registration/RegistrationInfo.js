import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './RegistrationInfo.css';
import Calendar from 'react-calendar';
import { CList } from '../Lists/CList';
import { Button } from '../Button';

function RegistrationInfo(){
    const [date, setDate] = useState(new Date());
    console.log(date)

    return(
        <div className='top-registration'>
            <div className='left-registration'>
                <div className='calendar-container'>
                    <Calendar onChange={setDate} value={date}/>
                </div>
                <p className='date-text'>
                    <span>Selected Date:</span>{' '}
                    {date.toDateString()}
                </p>
                <div className='select-course'>
                    <h1 className='select-course-text'>Please select a course:</h1>
                    <select className="course-dropdown" id="dropDown" defaultValue="Please select another date">
                        {CList.map((option)=>{
                            for (let i =0; i < option.days.length; i++){
                                if(option.days[i] === date.getDate() && option.months[i] === date.getMonth() +1 && option.years[i] === date.getFullYear()){
                                    return <option>{option.courseName} : {option.time}</option>
                                }
                            }
                            return null;
                        }
                        )}
                </select>
                </div>
                
                <div className='add-comment'>
                    <h2> Add a comment: </h2>
                    <input className="review-box" name="review-box" defaultValue=""/>
                </div>
            </div>
             <div className='right-registration'>
                <Link to="/" className="back-button"> 
                    <i className='fa-solid fa-arrow-left'/> Back
                </Link>   
                <div className="registration-text-container">
                    <h1 className='big-text'>Can't wait to see you</h1>
                    <p className='sub-text'>Rock climbing courses are designed to teach participants the skills and techniques needed to climb safely and effectively. They vary in duration, intensity, and focus, catering to different skill levels from beginners to advanced climbers.</p>
                </div>
                <div className="input-container">
                    <h2> 1. Personal Information</h2>
                    <input className="input" name="Fname" placeholder="First Name"/>
                    <input className="input" name="Lname" placeholder="Last Name"/>
                    <input className="input" name="Email" placeholder="Email address"/>
                    <Button className='confirm-button' class="btns" buttonStyle="btn--outline"> Checkout</Button>
                </div>
                <div className='confirm-button'>
                </div>
             </div>
        </div>
    )
}

export default RegistrationInfo;