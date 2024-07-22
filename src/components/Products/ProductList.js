import React, {useState} from 'react';
import './ProductList.css';
import {PList} from "../Lists/PList";
import {Product} from './product';
import { Link } from 'react-router-dom';

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



function ProductList (){
    const [filters, setFilters] = useState([]);
    return (
        <div className="top">
            <div className="shop"> 
                <div className="top-container">
                    <div className="products">
                    {PList.map((product) =>{
                        if (filters.length === 0){
                            return <Product data={product}/>
                        }else {
                            
                            for (const element of filters){
                                console.log(element);
                                if (product.filters.includes(element)){
                                    console.log("hello");
                                    return <Product data={product}/>
                                }
                            }
                            return null;
                        }
                    })}
                    </div>
                </div>
            </div>
            
            <div className = "shop-faceted-search">
            <   Link to="/Cart" className="shop-logo">
                    Cart <i class="fa-solid fa-cart-shopping"></i>
                </Link>
                <ul >
                    <li>
                        <h1 className="main-option">Popularity</h1>
                        <ul >
                            <li>
                                <label className="sub-option">
                                    <input  id="radio" type="checkbox" name="Checkbox" value="popular" onChange={(e) => setFilters(getRadioValue())} /> Popular
                                </label>
                            </li>
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="semi-popular" onChange={(e) => setFilters(getRadioValue())}/> Semi-popular 
                                </label>
                            </li>
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="unpopular" onChange={(e) => setFilters(getRadioValue())}/> Unpopular
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1 className="main-option">Equipment</h1>
                        <ul >
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="shoe" onChange={(e) => setFilters(getRadioValue())}/> Shoes
                                </label>
                            </li>
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="harness" onChange={(e) => setFilters(getRadioValue())}/> Harnesses
                                </label>
                            </li>
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="chalk" onChange={(e) => setFilters(getRadioValue())}/> Chalk
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1 className="main-option">Level</h1>
                        <ul>
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="beginner" onChange={(e) => setFilters(getRadioValue())}/> Beginner
                                </label>
                            </li>
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="intermediate" onChange={(e) => setFilters(getRadioValue())}/> Intermediate
                                </label>
                            </li>
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="advanced"onChange={(e) => setFilters(getRadioValue())}/> Advanced
                                </label>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h1 className="main-option">Price</h1>
                        <ul>
                            <li>
                                <label className="sub-option">
                                    <input type="checkbox" name="Checkbox" value="cheap" onChange={(e) => setFilters(getRadioValue())}/> Wallet friendly
                                </label>
                            </li>
                            <li>
                                <label className="sub-option">
                                    <input  type="checkbox" name="Checkbox" value="mid-range" onChange={(e) => setFilters(getRadioValue())}/> Mid-Range
                                </label>
                            </li>
                            <li>
                                <label className="sub-option">
                                    <input  type="checkbox" name="Checkbox" value="expensive" onChange={(e) => setFilters(getRadioValue())}/> Expensive
                                </label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

export default ProductList;