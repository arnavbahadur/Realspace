import React, { useState } from 'react'
import './Appointment.css'
import axios from 'axios';

const Appointment = () => {
  const [apointment,setcontactData]=useState({
    f_name:"",
    l_name:"",
    phone:"",
    date:"",
    message:""
  });


  const handleChange = e => {
    const { name, value } = e.target
    setcontactData({
        ...apointment,
        [name]: value
    })
}



async function submit() {
  try {
    console.log(apointment)
    await axios.post("/apointmentapi/apointment",apointment)
    .then(()=>{alert("form added successfully")})
    .catch((err)=>{alert(err)})
  } catch (err) {
    alert(err);
  }
}
  // $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 
  return (
    // <div>
            <div className="container">
        <div className="contactInfo"> 
          <div>
            <h2>Our Contact</h2>
            <ul className="info">
              <li>
                <span><img src="./Images/location.png" /></span>
                <span>101, Shridhar Bhawan, <br />158, Gokul Nagar, <br />
                Indore, Madhya Pradesh <br />
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
            {/* <a href="mailto: realspacegroups@gmail.com">
              <img className="appointmentgmail" src="/Images/gmail.png" alt="" />
             
              </a> */}
              <li><a href="https://twitter.com/nassosanagn"><img src="./Images/twiter.png" /></a></li>
            <li><a href="https://www.linkedin.com/company/realspace-group/"><img src="./Images/linkdin.png" /></a></li>
          </ul>


        </div>
        <div className="contactForm">
          <h2>Appointment</h2>
          <div className="formBox">
            {/* <div className="inputBox w50">
              <input type="text" name required />
              <span>First Name</span>
            </div> */}
            <input type="text" id="" className='inputBox w50' placeholder='First Name'  onChange={ handleChange } name="f_name" value={apointment.f_name}/> 
            {/* <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div> */}
            <input type="text" id="" className='inputBox w50' placeholder='Last Name'  onChange={ handleChange } name="l_name" value={apointment.l_name}/>
         
            {/* <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div> */}
            <input type="text" id="" className='inputBox w50' placeholder='Contact'  onChange={ handleChange } name="phone" value={apointment.phone}/>
            {/* <div className="inputBox w50"> */}
              {/* <input type="date" required /> */}
              {/* <span className="inputBox w51">Date</span> */}
            {/* </div> */}
            <input type="date" id="" className='inputBox w50' placeholder='date'  onChange={ handleChange } name="date" value={apointment.date}/>
             
           
            {/* <div className="inputBox w100">
              <textarea required defaultValue={""} />
              <span>Write your message here...</span>
            </div> */}
            <textarea  id=""  className='inputBox w100' cols="30" rows="5" placeholder='message'  onChange={ handleChange } name="message" value={apointment.message} required/>
            {/* <div className="inputBox w100">
              <input type="submit" defaultValue="Send" />
            </div> */}
            <button className="inputBox w100" onClick={()=>{submit()}} id='blog-txt-add' >Submit</button>
          </div>
        </div>
      </div>
    
  )
}

export default Appointment;





