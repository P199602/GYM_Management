import React from 'react';
import "../style/Navbar.css";
import gymq from "../images/gymq.jpg";
import gymm from "../images/gymm.jpg";
import gymg from "../images/gymg.jpg";
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navg=useNavigate();

  const navSignup=()=>{
     navg("/signup")
     
  }


  return (
    <div>
      <h1 className='Heading' id='products'>Products</h1>
      <div className='cards'>
      <div className='card'>
        <div className='Text-card'>
        <h3>Yearly Pack</h3>
        <h5> Rs.12999</h5>
        <button type='submit' className='register' onClick={navSignup}>Register</button>
        </div>
        <img src={gymg} alt="price1"/>

      </div>
      <div className='card'>
        <div className='Text-card'>
        <h3>Monthly Pack</h3>
        <h5> Rs.1999</h5>
        <button type='submit' className='register' onClick={navSignup}>Register</button>
        </div>
        <img src={gymm} alt="price1"/>

      </div>
      <div className='card'>
        <div className='Text-card'>
        <h3>Quterly Pack</h3>
        <h5> Rs.3999</h5>
        <button type='submit' className='register' onClick={navSignup}>Register</button>
        </div>
        <img src={gymq} alt="price1"/>
        </div>
      </div>
    </div>
  )
}

export default Products;
