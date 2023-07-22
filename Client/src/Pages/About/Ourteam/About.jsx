import React from 'react'
import Team from './Team'
import './About.css'
import Choose from './Choose'
import Overview from './Overview'
import  { useState } from "react";

const About = () => {
  const [color, setColor] = useState(<Overview/>);

  return (
    <div>
      <div className="about-all-button">
        <button onClick={() => setColor(<Team/>)} className="aboutbutton">Our Team</button>
        <button onClick={() => setColor(<Overview/>)} className="aboutbutton">Overview</button>
        <button onClick={() => setColor(<Choose/>)} className="aboutbutton">Why choose us</button>
      </div>
        
        {color}
    </div>
  )
}

export default About