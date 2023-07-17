import React from 'react'
import './Appointment.css'

const Contact = () => {
  // $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 
  return (
    // <div>
            <div className="container">
        <div className="contactInfo"> 
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><img src="./Images/location.png" /></span>
                <span>505 shreeji hights<br />
                  Indore<br />
                  452001</span>
              </li>
              <li>
                <span><img src="./Images/mail.png" /></span>
                {/* <span>nassosanagn@gmail.com</span> */}
                <span><a href="mailto: realspacegroups@gmail.com">realspacegroups@gmail.com</a></span>
              </li>
              <li>
                <span><img src="./Images/call.png" /></span>
                <span>9589533998</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href="https://www.facebook.com/RealSpaceGroup"><img src="./Images/fb.png" /></a></li>
            <li><a href="https://www.instagram.com/realspacegroups/"><img src="/./Images/insta.png" /></a></li>
            <a href="mailto: realspacegroups@gmail.com">
              <img className="appointmentgmail" src="/Images/gmail.png" alt="" />
             
              </a>
            <li><a href="https://www.linkedin.com/company/realspace-group/"><img src="./Images/linkdin.png" /></a></li>
          </ul>


        </div>
        <div className="contactForm">
          <h2>Appointment</h2>
          <div className="formBox">
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
              <input type="date" required />
              {/* <span className="inputBox w51">Date</span> */}
            </div>
           
             
           
            <div className="inputBox w100">
              <textarea required defaultValue={""} />
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" defaultValue="Send" />
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Contact;





