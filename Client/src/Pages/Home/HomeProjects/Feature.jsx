//./Images/comm.jpg 
import { NavLink } from 'react-router-dom';
import React from 'react'
import './Feature.css'
const Feature = () => {
  return (
    <div>
      <>
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:400,700"
    rel="stylesheet"
  />
  <div className="containerfeaturee">
  <div className="cardbackfeature">
 <div className="cardfeature">
  <NavLink to="/commercial">
      <img className="imgfeature" src="https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg?w=2000" />
      <h3 className="h3feature">Commercial</h3>
      </NavLink>
       <p className="pfeature">View more</p>

  </div>
<div className="blob"></div>
</div>

<div className="cardbackfeature">
    <div className="cardfeature">
    <NavLink to="/residential">
      <img className="imgfeature" src="https://img.freepik.com/free-photo/3d-electric-car-building_23-2148972401.jpg?w=2000" />
      <h3 className="h3feature">Residential</h3>
      </NavLink>
        <p className="pfeature">View more</p>
     
    </div>
    <div className="blob"></div>
    </div>
    <div className="cardbackfeature">
        <div className="cardfeature">
          <NavLink to="/others"> 
            <img className="imgfeature" src="https://st2.depositphotos.com/3767467/7104/i/950/depositphotos_71046753-stock-photo-city-park-with-modern-building.jpg " />
            <h3 className="h3feature">Additional.</h3>
            </NavLink>
            <p className="pfeature">View more</p>
            
          </div>
      
  <div className="blob"></div>
</div>
   
  
  </div>
</>

    </div>
  )
}

export default Feature
