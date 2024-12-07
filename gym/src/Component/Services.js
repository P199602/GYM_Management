import React from 'react';
import "../style/Navbar.css";
import personal from "../images/personal.jpg";
import nurture from "../images/nurture.jpg";
import welbeing from "../images/welbeing.jpg";
import locker from "../images/locker.jpg";
import online from "../images/online.jpg";

const Services = () => {
  return (
    < div className='services' id='services'>
    <h1 className='Heading'>Services</h1>
    <div className='Personal-Tra service'>
    <h4 className='Heading'>Personal trainers </h4>
    <h6>Our certified personal trainers work with you one-on-one to develop customized workout plans tailored to your goals and fitness level. Whether you're looking to build muscle, lose weight, or improve your overall fitness, our trainers are here to guide and motivate you</h6>
    <img src={personal} alt="img1" />
    </div>
    <div className='Nutrition-Cou service'>
    <h4 className='Heading'>Nutrition counselors </h4>
    <h6>Achieving your fitness goals involves more than just working out. Our nutrition counselors provide personalized dietary advice to help you make healthy food choices and create balanced meal plans that complement your fitness routine.</h6>
    <img src={nurture} alt="img1" />
    </div>
    <div className='Wellness-Programs service'>
    <h4 className='Heading'>Wellness Programs </h4>
    <h6>We offer various wellness programs aimed at improving overall health, including stress management workshops, mindfulness sessions, and holistic health education.</h6>
    <img src={welbeing} alt="img1" />
    </div>
    <div className='Locker-Rooms service'>
    <h4 className='Heading'>Locker Rooms</h4>
      <h6>Our modern locker rooms are equipped with secure lockers, showers, and saunas to enhance your post-workout experience. We also offer towel service and personal care products for your convenience.</h6>
      <img src={locker} alt="img1" /></div>
    <div className='Online service'>
    <h4 className='Heading'>Online service</h4>
      <h6>For those who prefer to work out at home, we offer virtual training sessions and online fitness classes. Stay connected and fit, no matter where you are.</h6>
      <img src={online} alt="img1" />
    </div>
    </div>
  )
}

export default Services
