import React, { useState } from 'react';
import "../style/Navbar.css";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();
    if (!height || !weight || !gender) {
      alert("Please enter all the details");
      return;
    }
    const heightMeter = height / 100;
    const bmiValue = ((weight / (heightMeter * heightMeter)).toFixed(2));
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      alert("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      alert("You are fit");
    } else if (bmiValue > 24.9 && bmiValue < 29.9) {
      alert("You are overweight");
    } else {
      alert("Please contact us for further assistance");
    }
  }

  return (
    <>
      <h1 className='Heading' id='bmi'>BMI Calculator</h1>
      <div className='BMI'>
      <div className='Bmical'>
        <label>Height(cm)
        <input type='number' value={height} onChange={(e) => setHeight(e.target.value)} /></label>
        <label>Weight(Kg)
        <input type='number' value={weight} onChange={(e) => setWeight(e.target.value)} /></label>
        <label>Gender<select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select></label>
        <button type='submit' onClick={calculateBmi}>Calculate BMI</button>
        <h6>{`Your BMI: ${bmi}`}</h6>
        </div>
      </div>
    </>
  );
}

export default Bmi;
