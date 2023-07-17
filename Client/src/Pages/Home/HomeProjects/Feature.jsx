//./Images/comm.jpg 
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
      <img className="imgfeature" src="./Images/comm.jpg " />
      <h3 className="h3feature">Commercial</h3>
      <p className="pfeature">View more</p>
    </div>
<div className="blob"></div>
</div>
<div className="cardbackfeature">
    <div className="cardfeature">
      <img className="imgfeature" src="./Images/rese.jpg " />
      <h3 className="h3feature">Residential</h3>
      <p className="pfeature">View more</p>
      
    </div>
    <div className="blob"></div>
    </div>
    <div className="cardbackfeature">
        <div className="cardfeature">
            <img className="imgfeature" src="./Images/others.jpg " />
            <h3 className="h3feature">Others</h3>
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
