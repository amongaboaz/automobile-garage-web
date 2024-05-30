import React from 'react';
import './Deatiling.css'; // Import CSS

import step1Image from '../Assets/Ceramic.jpg';
import step2Image from '../Assets/t10.jpg';
import step3Image from '../Assets/t13.jpg';
import step4Image from '../Assets/t7.jpg';

const Detailing = () => {
  return (
    <div className="ceramic-page">
      <h1>Ceramic Coating for Cars</h1>

      <section className="ceramic-steps">
        <h2>Steps for Ceramic Coating</h2>
        <div className="step">
          <div className="card">
            <img src={step1Image} alt="Step 1" />
            <p>Step 1: Wash and Prepare the Car Surface</p>
          </div>
          <div className="card">
            <img src={step2Image} alt="Step 2" />
            <p>Step 2: Apply Ceramic Coating Evenly</p>
          </div>
          <div className="card">
            <img src={step3Image} alt="Step 3" />
            <p>Step 3: Allow Coating to Bond and Cure</p>
          </div>
          <div className="card">
            <img src={step4Image} alt="Step 4" />
            <p>Step 4: Buff and Polish for Shine</p>
          </div>
        </div>
      </section>

      <section className="ceramic-details">
        <h2>Advantages of Ceramic Coating</h2>
        <ul>
          <li>Enhanced Gloss and Shine</li>
          <li>Protection Against UV Damage</li>
          <li>Resistance to Chemicals and Contaminants</li>
          <li>Reduced Maintenance Needs</li>
        </ul>

        <h2>Disadvantages of Ceramic Coating</h2>
        <ul>
          <li>Initial Cost Can Be High</li>
          <li>Requires Proper Application for Effectiveness</li>
          <li>Not Permanent, Requires Reapplication</li>
          <li>May Not Completely Eliminate the Need for Washing</li>
        </ul>
      </section>
    </div>
  );
};

export default Detailing;
