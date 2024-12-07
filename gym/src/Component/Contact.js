import React from 'react';
import { useState  } from 'react';
import "../style/Navbar.css";


const Contact = () => {
  const [Name,setname]=useState("");
  const [Email,setEmail]=useState("");
  const [Mobile,setmobile]=useState("");
  return (
    <>
    <h1 className='Heading' id='contact'>Contact Us</h1>
    <div className='contact'>
      <div className='Heading'>
         Message us
      </div>
      <div className='contact-Box'>
        <label>Enter your name
        <input value={Name} type="text" onChange={(e)=>setname(e.target.value)} /></label>
        <label>Enter your name
        <input value={Email} type="text" onChange={(e)=>setEmail(e.target.value)} /></label>
        <label>Enter your name
        <input value={Mobile} type="text" onChange={(e)=>setmobile(e.target.value)} /></label>
        <button type='submit' className='submit-con'>submit</button>
      </div>
    </div>
    </>
  )
}

export default Contact
