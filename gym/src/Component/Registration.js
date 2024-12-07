import React, { useState } from 'react';
import axios from 'axios';
import "../style/Navbar.css";
import {useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setconPassword] = useState('');
  const Navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/signup', {
        Name: name,
        Email: email,
        Password: password
      });
      const userData=response.data
      Navigate("/login");
      localStorage.setItem("User registered:" ,JSON.stringify({ userData }));
      
      
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <div className='signupForm'>
    <form onSubmit={handleSubmit} className='Registration'>
      <h1 className='signup'> signup</h1>
      <div>
        <label>Name</label>
        <input className='nameS' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input className='emailS' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Conform Password</label>
        <input type="password" value={conpassword} onChange={(e) => setconPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegisterComponent;
