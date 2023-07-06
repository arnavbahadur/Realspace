import React from 'react'
import './Feature.css'
// import { NavLink } from 'react-router-dom';
const Feature = () => {
    
   
  return (
   <div>
     <div className='feature-container-heading'>
      Projects
    </div>
    <div className='feature-container-top'>
      <div className="feature-container">
      <img src="./Images/house-1.jpg" alt="" />
      <p className='feature-container-text'>commersial</p>
    
      </div>
      <div className="feature-container">
      <img src="./Images/house-1.jpg" alt="" />
      <p className='feature-container-text'>resenditial</p>
      
      </div>
      <div className="feature-container">
      <img src="./Images/house-1.jpg" alt="" />
      <p className='feature-container-text'>othrr</p>
      
      </div>
    </div>
    </div>
  )
}

export default Feature