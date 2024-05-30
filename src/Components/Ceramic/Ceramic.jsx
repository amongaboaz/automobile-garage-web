import React from 'react';
import './Ceramic.css'; 

import step1Image from '../Assets/Ceramic.jpg';
import step2Image from '../Assets/t10.jpg';
import step3Image from '../Assets/t13.jpg';
import step4Image from '../Assets/t7.jpg';

const Ceramic = () => {
  return (
    <div className="ceramic-page">
      

      <section className="ceramic-steps">
        <h1>Ceramic Coating for Cars</h1>
        <h2>Steps for Applying Ceramic Coating</h2>
        <p>Ceramic coating is a popular way to protect your car's paint and maintain its shine. Follow these steps for a successful application:</p>
        <div className="step">
          <div className="card">
            <img src={step1Image} alt="Step 1" />
            <p>Step 1: Wash and Prepare the Car Surface</p>
            <p>Thoroughly clean the car to remove dirt, dust, and debris. Use a clay bar to remove any contaminants for a smooth surface.</p>
          </div>
          <div className="card">
            <img src={step2Image} alt="Step 2" />
            <p>Step 2: Apply Ceramic Coating Evenly</p>
            <p>Using an applicator, apply the ceramic coating evenly on small sections of the car, ensuring full coverage and avoiding streaks.</p>
          </div>
          <div className="card">
            <img src={step3Image} alt="Step 3" />
            <p>Step 3: Allow Coating to Bond and Cure</p>
            <p>Let the coating bond with the paint surface for the recommended time. This allows it to form a strong protective layer.</p>
          </div>
          <div className="card">
            <img src={step4Image} alt="Step 4" />
            <p>Step 4: Buff and Polish for Shine</p>
            <p>Once the coating has cured, buff the surface with a microfiber cloth to enhance the shine and remove any excess coating.</p>
          </div>
        </div>
      </section>

      <section className="ceramic-details">
        
        <div className="advantages">
          <h3>Advantages:</h3>
          <ul>
            <li>Enhanced Gloss and Shine</li>
            <li>Protection Against UV Damage</li>
            <li>Resistance to Chemicals and Contaminants</li>
            <li>Reduced Maintenance Needs</li>
          </ul>
        </div>
        <div className="disadvantages">
          <h3>Disadvantages:</h3>
          <ul>
            <li>Initial Cost Can Be High</li>
            <li>Requires Proper Application for Effectiveness</li>
            <li>Not Permanent, Requires Reapplication</li>
            <li>May Not Completely Eliminate the Need for Washing</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Ceramic;
