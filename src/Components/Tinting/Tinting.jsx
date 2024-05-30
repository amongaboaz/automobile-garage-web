import React from 'react';
import './Tinting.css'; // Import CSS

import step1Image from '../Assets/t1.jpg';
import step2Image from '../Assets/t2.jpg';
import step3Image from '../Assets/t3.jpg';


const Tinting = () => {
  return (
    <div className="tinting-page">
      <h1>Car Window Tinting</h1>

      <section className="tinting-steps">
        <h2>Steps for Car Window Tinting</h2>
        <div className="steps-container">
          <div className="step card">
            <img src={step1Image} alt="Step 1" />
            <p>Step 1: Clean the Windows Thoroughly</p>
          </div>
          <div className="step card">
            <img src={step2Image} alt="Step 2" />
            <p>Step 2: Cut the Tint Film to Fit Each Window</p>
          </div>
          <div className="step card">
            <img src={step3Image} alt="Step 3" />
            <p>Step 3: Apply the Tint Film Carefully</p>
          </div>
         
        </div>
      </section>

      <section className="tinting-details">
        
        <ul>
          <h2>Advantages of Window Tinting</h2>
          <li>Reduces Glare and Improves Visibility</li>
          <li>Blocks Harmful UV Rays</li>
          <li>Increases Privacy and Security</li>
          <li>Helps Keep Car Interior Cool</li>
        </ul>

        
        <ul>
          <h2>Disadvantages of Window Tinting</h2>
          <li>Initial Installation Cost</li>
          <li>Potential Legal Restrictions</li>
          <li>Quality and Durability Varies</li>
          <li>May Affect Nighttime Visibility</li>
        </ul>
      </section>
    </div>
  );
};

export default Tinting;
