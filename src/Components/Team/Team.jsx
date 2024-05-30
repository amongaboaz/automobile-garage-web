// src/Components/Teams/Teams.jsx

import React from 'react';
import './Team.css'; 

import team1 from '../Assets/t1.jpg';
import team2 from '../Assets/t2.jpg';
import team3 from '../Assets/t3.jpg';
import team4 from '../Assets/t4.jpg';
import team5 from '../Assets/t5.jpg';
import team6 from '../Assets/t6.jpg';
import team7 from '../Assets/t7.jpg';
import team8 from '../Assets/t8.jpg';
import team9 from '../Assets/t9.jpg';
import team10 from '../Assets/t10.jpg';
import team11 from '../Assets/t11.jpg';
import team12 from '../Assets/t12.jpg';
import team13 from '../Assets/t13.jpg';
import team14 from '../Assets/t14.jpg';
import team15 from '../Assets/t15.jpg';
import team16 from '../Assets/t16.jpg';
import team17 from '../Assets/t1.jpg';
import team18 from '../Assets/t2.jpg';
import team19 from '../Assets/t3.jpg';
import team20 from '../Assets/t4.jpg';

const Team = () => {
  const teamMembers = [
    { img: team1, name: 'John Doe', position: 'CEO' },
    { img: team2, name: 'Jane Smith', position: 'COO' },
    { img: team3, name: 'Michael Brown', position: 'CTO' },
    { img: team4, name: 'Emily Johnson', position: 'CFO' },
    { img: team5, name: 'Chris Lee', position: 'Lead Mechanic' },
    { img: team6, name: 'Anna Wilson', position: 'Service Advisor' },
    { img: team7, name: 'David Martinez', position: 'Technician' },
    { img: team8, name: 'Sophia Anderson', position: 'Customer Service' },
    { img: team9, name: 'James Thompson', position: 'Technician' },
    { img: team10, name: 'Linda Davis', position: 'Parts Manager' },
    { img: team11, name: 'Robert White', position: 'Detailing Specialist' },
    { img: team12, name: 'Patricia Harris', position: 'Receptionist' },
    { img: team13, name: 'Daniel Clark', position: 'Tire Specialist' },
    { img: team14, name: 'Jennifer Lewis', position: 'Sales Manager' },
    { img: team15, name: 'Mark Walker', position: 'Body Shop Manager' },
    { img: team16, name: 'Lisa Hall', position: 'Marketing Manager' },
    { img: team17, name: 'Daniel Clark', position: 'Tire Specialist' },
    { img: team18, name: 'Jennifer Lewis', position: 'Sales Manager' },
    { img: team19, name: 'Mark Walker', position: 'Body Shop Manager' },
    { img: team20, name: 'Lisa Hall', position: 'Marketing Manager' },
  ];

  return (
    <div className="team-container">
      <section className="team-header">
        <h1>Meet Our Team</h1>
        <p>
          Our dedicated team of professionals is here to provide the best service for your vehicle. Meet the people who make it all happen.
        </p>
      </section>

      <section className="team-members">
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h2>{member.name}</h2>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
