import React from 'react';
import './Ppf.css'; // Import CSS

import step1Image from '../Assets/Deatiling-1.jpg';
import step2Image from '../Assets/Detailing.jpg';
import step3Image from '../Assets/t11.jpg';
import step4Image from '../Assets/PPF.jpg';

const Ppf = () => {
  return (
    <div className="ppf-page">
      <h1>Paint Protection Film (PPF) for Cars</h1>

      <section className="ppf-steps">
        <h2>Steps for Applying Paint Protection Film</h2>
        <div className="step">
          <div className="card">
            <img src={step1Image} alt="Step 1" />
            <p>Step 1: Clean and Prep the Car Surface</p>
          </div>
          <div className="card">
            <img src={step2Image} alt="Step 2" />
            <p>Step 2: Cut and Apply PPF to Each Panel</p>
          </div>
          <div className="card">
            <img src={step3Image} alt="Step 3" />
            <p>Step 3: Heat and Stretch the Film for Contour</p>
          </div>
          <div className="card">
            <img src={step4Image} alt="Step 4" />
            <p>Step 4: Finish with Trimming and Heat Setting</p>
          </div>
        </div>
      </section>

      <section className="ppf-details">
        <h2>Advantages of Paint Protection Film (PPF)</h2>
        <ul>
          <li>Superior Protection Against Rock Chips and Scratches</li>
          <li>Preserves Paint Color and Gloss</li>
          <li>Self-Healing Properties for Minor Scratches</li>
          <li>Can Be Removed Without Damaging Original Paint</li>
        </ul>

        <h2>Disadvantages of Paint Protection Film (PPF)</h2>
        <ul>
          <li>Higher Initial Cost Compared to Wax or Sealants</li>
          <li>Requires Professional Installation for Best Results</li>
          <li>Potential for Visible Edges or Trapped Dirt if Installed Improperly</li>
          <li>Not Completely Maintenance-Free, Regular Cleaning Required</li>
        </ul>
      </section>
    </div>
  );
};

export default Ppf;
