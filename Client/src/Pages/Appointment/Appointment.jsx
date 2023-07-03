import React from 'react'
import './Appointment.css'

const Appointment =()=> {
   
  return (
   <div className="Appointment">
    <div className="detail-appointment">
            <div className="inputBox w50">
              <input type="text" name required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
           
            <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Requirement</span>
            </div>
           
            <div className="inputBox w100">
              <input type="submit" defaultValue="Send" />
            </div>
          </div>
          </div>
      
    
         
  )
}

export default Appointment;
