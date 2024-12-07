import React, { useState } from 'react';
import gymq from '../images/gymq.jpg';
import gymm from '../images/gymm.jpg';
import gymg from '../images/gymg.jpg';

const Payment = () => {
  const [price, setPrice] = useState();

  return (
    <div className='payment-page'>
      <div>
        <h1 className='Heading' id='products'>Products</h1>
        <div className='cards'>
          <div className='card'>
            <div className='Text-card'>
              <h3>Yearly Pack</h3>
              <h5> Rs.12999</h5>
              <button type='button' className='register' onClick={() => setPrice(12999)}>Register</button>
            </div>
            <img src={gymg} alt="Yearly Pack" />
          </div>
          <div className='card'>
            <div className='Text-card'>
              <h3>Monthly Pack</h3>
              <h5> Rs.1999</h5>
              <button type='button' className='register' onClick={() => setPrice(1999)}>Register</button>
            </div>
            <img src={gymm} alt="Monthly Pack" />
          </div>
          <div className='card'>
            <div className='Text-card'>
              <h3>Quarterly Pack</h3>
              <h5> Rs.3999</h5>
              <button type='button' className='register' onClick={() => setPrice(3999)}>Register</button>
            </div>
            <img src={gymq} alt="Quarterly Pack" />
          </div>
        </div>
      </div>
      <div className='payment'>
        <h1>Make Payment</h1>
        <h2>Total : {price}</h2>
        <h6>Please insert card details</h6>
        <label>Card Number</label>
        <input type='number' />
        <label>Re-enter Card Number</label>
        <input type='number' />
        <label>CVV</label>
        <input type='number' />
        <label>Holder Name</label>
        <input type='text' />
      </div>
    </div>
  );
};

export default Payment;
