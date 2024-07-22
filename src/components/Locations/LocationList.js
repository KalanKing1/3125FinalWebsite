import React, {useState} from 'react';
import './LocationList.css';
import {LList} from "../Lists/LList";
import {Location} from './Location';


function getRadioValue () {
    var btns = document.getElementsByName("Checkbox");
    var filters = [];

    for (let i=0; i< btns.length; i++) {
        if(btns[i].checked){
            filters.push(btns[i].value);
        }
    }
    return filters;
}


function LocationList (){
    const [filters, setFilters] = useState([]);
    return (
        <div className="shop">
            <h1 className="shopTitle"> Locations </h1>
            <div className="top-container">
            <div className = "faceted-search">
                <ul className='main-options'>
                    <li>
                        <h1>Popularity</h1>
                        <ul className='sub-options'>
                            <li>
                                <label>
                                    <input id="radio" type="checkbox" name="Checkbox" value="popular" onChange={(e) => setFilters(getRadioValue())} /> Popular
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="semi-popular" onChange={(e) => setFilters(getRadioValue())}/> Semi-popular 
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="unpopular" onChange={(e) => setFilters(getRadioValue())}/> Unpopular
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1>Equipment</h1>
                        <ul className='sub-options'>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="shoe" onChange={(e) => setFilters(getRadioValue())}/> Shoes
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="harness" onChange={(e) => setFilters(getRadioValue())}/> Harnesses
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="chalk" onChange={(e) => setFilters(getRadioValue())}/> Chalk
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1>Level</h1>
                        <ul className='sub-options'>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="beginner" onChange={(e) => setFilters(getRadioValue())}/> Beginner
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="intermediate" onChange={(e) => setFilters(getRadioValue())}/> Intermediate
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="advanced"onChange={(e) => setFilters(getRadioValue())}/> Advanced
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1>Price</h1>
                        <ul className='sub-options'>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="cheap" onChange={(e) => setFilters(getRadioValue())}/> Wallet friendly
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="mid-range" onChange={(e) => setFilters(getRadioValue())}/> Mid-Range
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type="checkbox" name="Checkbox" value="expensive" onChange={(e) => setFilters(getRadioValue())}/> Expensive
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
                <div className="locations" id="locations">
                    {LList.map((location) =>{
                        if (filters.length === 0){
                            return <Location data={location}/>
                        }else {
                            
                            for (const element of filters){
                                console.log(element);
                                if (location.filters.includes(element)){
                                    console.log("hello");
                                    return <Location data={location}/>
                                }
                            }
                            return null;
                        }
                    })}
                </div>
                
            </div>
        </div>
        
    )
}

export default LocationList;