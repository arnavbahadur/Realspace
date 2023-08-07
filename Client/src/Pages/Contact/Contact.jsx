import React, { useState } from 'react'
import './Contact.css'
import Appointment from './Appointment/Appointment'
import axios from 'axios';

const Contact = () => {

  const [contactData,setcontactData]=useState({
    f_name:"",
    l_name:"",
    phone:"",
    email:"",
    requirement:"",
    budget:"",
    message:""
  });

  // const [contactData,setcontactData]=useState([]);

  const handleChange = e => {
    const { name, value } = e.target
    setcontactData({
        ...contactData,
        [name]: value
    })
}


  async function submit() {
    try {
      console.log(contactData)
      await axios.post("/contactapi/addmsg",contactData)
      .then(()=>{alert("form added successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }



  return (
    // <div>
            <div className="container">
        <div className="contactInfo"> 
          <div>
            <h2>Our Contact</h2>
            <ul className="info">
              <li>
                <span><a href="https://goo.gl/maps/ZSXpMLWhskfLxKfD8"><img src="./Images/location.png" /></a></span>
                <span>101, Shridhar Bhawan, <br />158, Gokul Nagar, <br />
                Indore, Madhya Pradesh <br />
                452001</span>
              </li>
              <li>
                <span><img src="./Images/mail.png" /></span>
          
                <span><a href="mailto: realspacegroups@gmail.com">realspacegroups@gmail.com</a></span>
              </li>
              <li>
                <span><img src="./Images/call.png" /></span>
                <span>9589533998</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href="https://www.facebook.com/nassosanagn/"><img src="./Images/fb.png" /></a></li>
            <li><a href="https://www.instagram.com/nassosanagn_/?hl=el"><img src="/./Images/insta.png" /></a></li>
            <li><a href="https://twitter.com/nassosanagn"><img src="./Images/twiter.png" /></a></li>
            <li><a href="https://www.linkedin.com/in/realspace-group-8aba1021a/"><img src="./Images/linkdin.png" /></a></li>
          </ul>


        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
           
            <input type="text" id="" className='inputBox w50' placeholder='First Name'  onChange={ handleChange } name="f_name" value={contactData.f_name}/>       
             <input type="text" id="" className='inputBox w50' placeholder='Last Name'  onChange={ handleChange } name="l_name" value={contactData.l_name}/>
             <input type="text" id="" className='inputBox w50' placeholder='Email'  onChange={ handleChange } name="email" value={contactData.email}/>
             <input type="text" id="" className='inputBox w50' placeholder='Contact'  onChange={ handleChange } name="phone" value={contactData.phone}/>
             <input type="text" id="" className='inputBox w50' placeholder='Requirement'  onChange={ handleChange } name="requirement" value={contactData.requirement}/>
             <input type="text" id="" className='inputBox w50' placeholder='Budget'  onChange={ handleChange } name="budget" value={contactData.budget}/>
             <textarea  id=""  className='inputBox w100' cols="30" rows="5" placeholder='Message'  onChange={ handleChange } name="message" value={contactData.message} required/>
            <button className="inputBox w100" onClick={()=>{submit()}} id='blog-txt-add' >Submit</button>
           
          </div>
         
        </div>
      
      </div>
    
  )
}

export default Contact;