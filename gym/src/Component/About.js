import React from 'react';
import "../style/Navbar.css";
import wel from "../images/wel.jpg"

const About = () => {
  return (
    <>
    <h1 className='Heading' id='about'>About Us</h1>
    <div className='About-container'>
    <div className='about-text'>
      Welcome to [Gym Name]!

At [Gym Name], we believe in the power of fitness to transform lives. Established in [Year], our mission is to provide a welcoming, motivating, and supportive environment where everyone, from beginners to seasoned athletes, can pursue their health and fitness goals.

Our state-of-the-art facility is equipped with the latest exercise machines, free weights, and a variety of fitness equipment to cater to all your workout needs. We offer a diverse range of fitness programs, including strength training, cardio workouts, yoga, Pilates, spinning, and high-intensity interval training (HIIT). Our group classes are designed to challenge and inspire you, helping you stay motivated and engaged.

Our team of certified personal trainers and fitness instructors are dedicated to helping you achieve your goals. Whether you need personalized workout plans, nutritional advice, or simply some encouragement, our experts are here to support you every step of the way.

At [Gym Name], we are more than just a gym; we are a community. We host regular events, workshops, and challenges to keep our members connected and motivated. Our facility includes modern amenities such as spacious locker rooms, showers, saunas, and a relaxation area to enhance your gym experience.

We are committed to maintaining a clean, safe, and friendly environment where you can focus on your fitness journey. Join us today and become a part of the [Gym Name] family. Together, we can achieve greatness and build a healthier, happier future.

For any inquiries or to schedule a tour, please contact us at [Contact Information].

Stay fit, stay healthy, and see you at [Gym Name]!
      
    </div>
    <img src={wel} alt='About' />
    </div>

    </>
  )
}

export default About
