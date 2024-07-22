import React from 'react'
import './App.css';
import {Home} from './components/Pages/Home';
import {Learning} from './components/Pages/Learning';
import {Checkout} from './components/Pages/Checkout';
import {Products} from './components/Pages/Products';
import {Register} from './components/Pages/Register';
import { fHome } from './components/Pages/fHome';
import {Cart} from './components/Pages/Cart'
import { ProductView } from './components/Pages/ProductView';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/NavBar/Navbar';
import ShopContextProvider from './context/shop-context';
import { LocationView } from './components/Pages/LocationView';



function App() {
  return (
    <Router>
      <Navbar/>
      <ShopContextProvider>
      <Routes>
        <Route path ="/" element= {<Home />}/>
        <Route path = "/fr" element = {<fHome />}/>
        <Route path = "/Learning" element= {<Learning/>}/>
        <Route path ="/Checkout" element={<Checkout/>}/>
        <Route path ="/Products" element={<Products/>}/>
        <Route path ="/Cart" element ={<Cart/>}/>
        <Route path = "/product-details/:id" element = {<ProductView/>}/>
        <Route path ="/Register" element ={<Register/>}/>
      </Routes>
      </ShopContextProvider>
      
          

    </Router>
    
      
      
  );
}

export default App;
