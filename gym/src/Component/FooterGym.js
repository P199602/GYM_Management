import React from 'react';
import "../style/Navbar.css";
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='footer-text'>
        <h2>FitGYM</h2>
        Mandsaur Ramtekri 
        Mandsaur 
        Madhya Pradesh
      
      </div>
       <div className='footer-text'>
        <h5>Products</h5>
        <h6><li><Link to="/products">Yearly Package</Link></li></h6>
        <h6><li><Link to="/products">Quaterly Package</Link></li></h6>
        <h6><li><Link to="/products">Monthly Package</Link></li></h6>

      </div>
      <div className='footer-text'>
        <h5>social Media</h5>
        <h6><a href='https://www.facebook.com/'>facebook</a></h6>
        <h6><a href='https://www.instagram.com/'>instagram</a></h6>
        <h6><a href='https://www.youtube.com/'>youtube</a></h6>
      </div>
      <div className='footer-text'>
        <h5>contact us</h5>
        <h6><a href='https://mail.google.com/'>FitGYM@gmail.com</a></h6>
        <h6>Mobile no 9999999999</h6>
        <h6>other no 44444444444</h6>
      </div>
    </div>
    </>
  )
}

export default footer
