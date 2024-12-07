import React, { useState } from 'react';
import "../style/Navbar.css";
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        Email: email,
        Password: password
      });

      if (response.data.success) {
        console.log(response.data)
        const userData = response.data;
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/payment');
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error('Error logging in:', err);
      if (err.response) {
        // Server responded with a status other than 2xx
        alert(err.response.data.message || 'Login failed');
      } else if (err.request) {
        // Request was made but no response received
        alert('Server did not respond');
      } else {
        // Something else happened
        alert('An error occurred');
      }
    }
  };

  return (
    <div className='signupForm'>
      <form onSubmit={handleSubmit} className='Registration'>
        <h1 className='signup'>Login</h1>
        <div>
          <label>Email</label>
          <input
            className='emailS'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
