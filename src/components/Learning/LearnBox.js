import React from 'react'
import './LearnBox.css';

function LearnBox(){
    return(
        <div className='top-box'>
             <div className='left-box'>
                <div className='center-box-item'>
                    <h1 className='oneStop-text'>New to climbing?</h1>
                    <h1 className='oneStop-text'>Don't worry we're here to help you get started.</h1>
                </div>
                <div className='center-box-text'>
                    <h1 className='synopsis-text'>Climbing can be a confusing sport to start. </h1>
                    <br/>
                    <p className='synopsis-text'>What equipment do I use?</p>
                    <p className='synopsis-text'>Should I rent or buy? </p>
                    <p className='synopsis-text'>where do I even go to start climbing?</p>
                    <br/>
                    <br/>
                    <h1 className='synopsis-text'>By the end of this video you should be an expert </h1>
                </div>
             </div>
             <div className='right-box'>
                <div className='video-box'>
                    <video className='video' src="https://www.youtube.com/watch?v=TIudRBkNjWA" controls>
                        <source src='https://www.youtube.com/watch?v=TIudRBkNjWA'/>
                        Your browser does not support the video tag
                    </video>
                </div>
                <div className='left-box-text'>
                    <p className='desc-text'>Rock climbing is a physically and mentally demanding sport that involves ascending natural rock formations or artificial rock walls. Climbers use various techniques and equipment, such as ropes, harnesses, and specialized climbing shoes, to navigate routes of varying difficulty. The sport tests strength, endurance, agility, and balance, as well as mental fortitude and problem-solving skills. Rock climbing can be enjoyed both indoors at climbing gyms and outdoors on cliffs and mountains, making it a versatile and adventurous activity suitable for all skill levels.</p>
                </div>
             </div>
        </div>
    )
}

export default LearnBox;