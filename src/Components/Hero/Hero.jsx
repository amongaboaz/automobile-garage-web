import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Welcome to UltraShine Auto Works</h1>
        <p>Discover amazing car detailing products and services tailored just for you!</p>
        {/* Link wrapped around the button */}
        <a href="https://maps.app.goo.gl/LUW1MTxVTTBnrvM19" target="_blank" rel="noopener noreferrer">
          <button className="explore-button">Visit Us</button>
        </a>
        <h2>SPEED <span>POWER</span>  gittgit nPERFORMANCE</h2>
      </div>
    </div>
  );
};

export default Hero;










