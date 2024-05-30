import React from 'react';
import './Spareparts.css'; // Import CSS

import sparepart1Image from '../Assets/con1.jpg';
import sparepart2Image from '../Assets/con2.jpg';
import sparepart3Image from '../Assets/con3.jpg';
import sparepart4Image from '../Assets/Ceramic.jpg';

const Spareparts = () => {
  return (
    <div className="spareparts-page">
      <h1>Car Spare Parts</h1>

      <section className="spareparts-info">
        <h2>Popular Spare Parts</h2>
        <div className="spareparts-container">
          <div className="sparepart card">
            <img src={sparepart1Image} alt="Spare Part 1" />
            <p>Engine Oil: Essential for lubrication and smooth running of the engine.</p>
          </div>
          <div className="sparepart card">
            <img src={sparepart2Image} alt="Spare Part 2" />
            <p>Brake Pads: Crucial for effective braking performance and safety.</p>
          </div>
          <div className="sparepart card">
            <img src={sparepart3Image} alt="Spare Part 3" />
            <p>Air Filter: Keeps the engine clean by filtering out dust and debris.</p>
          </div>
          <div className="sparepart card">
            <img src={sparepart4Image} alt="Spare Part 4" />
            <p>Battery: Powers the electrical components of the car.</p>
          </div>
        </div>
      </section>

      <section className="spareparts-details">
        
        <ul><h2>Benefits of Using Genuine Spare Parts</h2>
          <li>Ensures Compatibility and Performance</li>
          <li>Maintains Vehicle Warranty</li>
          <li>Enhances Safety and Reliability</li>
          <li>Longer Lifespan Compared to Counterfeit Parts</li>
        </ul>

        
        <ul><h2>Challenges of Finding Spare Parts</h2>
          <li>High Cost of Genuine Parts</li>
          <li>Availability Issues for Older Models</li>
          <li>Risk of Counterfeit Parts in the Market</li>
          <li>Need for Proper Installation</li>
        </ul>
      </section>
    </div>
  );
};

export default Spareparts;
