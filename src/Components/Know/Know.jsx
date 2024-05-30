import React from 'react';
import './Know.css'; // Import CSS

import carImage1 from '../Assets/c1.jpg';
import carImage2 from '../Assets/c2.jpg';
import carImage3 from '../Assets/c3.jpg';
import carImage4 from '../Assets/c4.jpg';
import carImage5 from '../Assets/c1.jpg';
import carImage6 from '../Assets/c2.jpg';

const Know = () => {
  return (
    <div className="general-info-page">
      <h1>General Information About Cars</h1>
      <div className="cards-container">
        <div className="card">
          <img src={carImage1} alt="Car 1" />
          <div className="card-content">
            <h2>TIPS</h2>
            <p>This car is known for its reliability and performance. It offers a smooth ride and great fuel efficiency.</p>
          </div>
        </div>
        <div className="card">
          <img src={carImage2} alt="Car 2" />
          <div className="card-content">
            <h2>HYBRID CARS</h2>
            <p>This model features advanced safety features and modern technology to enhance driving experience.</p>
          </div>
        </div>
        <div className="card">
          <img src={carImage3} alt="Car 3" />
          <div className="card-content">
            <h2>DESIGN</h2>
            <p>A compact car that is perfect for city driving, offering excellent maneuverability and parking ease.</p>
          </div>
        </div>
        <div className="card">
          <img src={carImage4} alt="Car 4" />
          <div className="card-content">
            <h2>COLOR</h2>
            <p>Known for its luxury and comfort, this car provides a premium driving experience with top-notch amenities.</p>
          </div>
        </div>
        <div className="card">
          <img src={carImage5} alt="Car 5" />
          <div className="card-content">
            <h2>DESIGN</h2>
            <p>A compact car that is perfect for city driving, offering excellent maneuverability and parking ease.</p>
          </div>
        </div>
        <div className="card">
          <img src={carImage6} alt="Car 6" />
          <div className="card-content">
            <h2>COLOR</h2>
            <p>Known for its luxury and comfort, this car provides a premium driving experience with top-notch amenities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Know;
