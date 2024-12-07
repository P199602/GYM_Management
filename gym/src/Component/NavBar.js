import React ,{useEffect, useState} from 'react'
import "../style/Navbar.css";
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {

  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const checkUserRegistration = () => {
    const storedData = JSON.parse(localStorage.getItem('User registered:'));
    return storedData && storedData.userData && storedData.userData.Email && storedData.userData.Name;
  };

  useEffect(() => {
    setIsUserRegistered(checkUserRegistration());
  }, []);

  return (
    <div className='Navbar-Top'>
      <div className='Logo'><h5>FitGYM</h5></div>
      <ul className='Navbar-Menu'>
        <li><Link to="#welcome">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#bmi">BMI</Link></li>
        <li><Link to="#services">Services</Link></li>
        <li><Link to="#products">Products</Link></li>
        <li><Link to="#contact">Contact</Link></li>
        {isUserRegistered ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <li><Link to="/signup">Signup</Link></li>
        )}
      </ul>
    </div>
  )
}

export default NavBar
