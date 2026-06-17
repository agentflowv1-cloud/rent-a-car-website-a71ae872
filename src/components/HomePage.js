import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='home-page'>
      <h1>Car Rental Services</h1>
      <div className='card-container'>
        <div className='card'>
          <h2>Service 1</h2>
          <p> Rent a car for a day</p>
          <button>Book Now</button>
        </div>
        <div className='card'>
          <h2>Service 2</h2>
          <p> Rent a car for a week</p>
          <button>Book Now</button>
        </div>
        <div className='card'>
          <h2>Service 3</h2>
          <p> Rent a car for a month</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;