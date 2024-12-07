import React from 'react';
import "../style/Navbar.css";
import wel from "../images/wel.jpg";

const welcome = () => {
  return (
    <div className='welcomeBar' id='#welcome'>
      <img className='wel-img' src={wel} alt="wel" />
      <div className='text'><h4>It's Time to change your self</h4>
      <h6>Let start</h6>
      </div>
    </div>
  )
}

export default welcome
