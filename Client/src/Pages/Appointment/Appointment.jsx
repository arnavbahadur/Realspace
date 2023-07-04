// import React from 'react'
// import './Appointment.css'
// import Calendar from 'react-calendar';

// const Contact = () => {
//   // $('.input-group.date').datepicker({format: "dd.mm.yyyy"}); 
//   return (
//     // <div>
//             <div className="container">
//         <div className="contactInfo"> 
//           <div>
//             <h2>Contact Info</h2>
//             <ul className="info">
//               <li>
//                 <span><img src="./Images/location.png" /></span>
//                 <span>505 shreeji hights<br />
//                   Indore<br />
//                   11472</span>
//               </li>
//               <li>
//                 <span><img src="./Images/mail.png" /></span>
//                 {/* <span>nassosanagn@gmail.com</span> */}
//                 <span><a href="mailto: nassosanagn@gmail.com">parmarsinghbhanu@gmail.com</a></span>
//               </li>
//               <li>
//                 <span><img src="./Images/call.png" /></span>
//                 <span>9174912843</span>
//               </li>
//             </ul>
//           </div>
//           <ul className="sci">
//             <li><a href="https://www.facebook.com/nassosanagn/"><img src="./Images/fb.png" /></a></li>
//             <li><a href="https://www.instagram.com/nassosanagn_/?hl=el"><img src="/./Images/insta.png" /></a></li>
//             <li><a href="https://twitter.com/nassosanagn"><img src="./Images/twiter.png" /></a></li>
//             <li><a href="https://www.linkedin.com/in/realspace-group-8aba1021a/"><img src="./Images/linkdin.png" /></a></li>
//           </ul>


//         </div>
//         <div className="contactForm">
//           <h2>Appointment</h2>
//           <div className="formBox">
//             <div className="inputBox w50">
//               <input type="text" name required />
//               <span>First Name</span>
//             </div>
//             <div className="inputBox w50">
//               <input type="text" required />
//               <span>Last Name</span>
//             </div>
         
//             <div className="inputBox w50">
//               <input type="text" required />
//               <span>Mobile Number</span>
//             </div>
//             <div className="inputBox w50">
//               <input type="text" required />
//               <span>Date</span>
//             </div>
           
//               <div class="input-group date" data-date-format="dd.mm.yyyy">
//             <input  type="text" class="form-control" placeholder="dd.mm.yyyy"/>
//             <div class="input-group-addon" >
//               <span class="glyphicon glyphicon-th"></span>
//             </div>
//           </div>
           
//             <div className="inputBox w100">
//               <textarea required defaultValue={""} />
//               <span>Write your message here...</span>
//             </div>
//             <div className="inputBox w100">
//               <input type="submit" defaultValue="Send" />
//             </div>
//           </div>
//         </div>
//       </div>
    
//   )
// }

// export default Contact;



import React , { useState } from 'react'
import Calendar from 'react-calendar';
const Appointment = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      
      <Calendar onChange={onChange} value={value} />
    </div>
    
  );
}

