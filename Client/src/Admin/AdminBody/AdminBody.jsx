import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Property from '../Pages/Property/Property'
import Project from '../Pages/Project/Project'
import './Adminbody.css'
import ContactQuery from '../Pages/ContactQuery/ContactQuery';
import Appointment from '../Pages/Appointment/Appointment';
import Popup from '../Pages/Popup/Popup';

const AdminBody = (props) => {

   const navigate=useNavigate()
   const [authentic, setauthentic] = useState(false);
    // console.log("bhanu",authentic);
      useEffect(() => {
         axios.get("/adminapi/isauth")
        .then((res)=>{setauthentic(res.data)
        if(res.data===false){
          navigate("/login")
        }
        });

      }, [])

  const [admincontent, setadmincontent] = useState("project");
  const history = useNavigate();

  async function logout() {
    try {
      await axios.get("adminapi/logout").then((res)=>{alert("Logged out successfully ")})
      window.location.reload()
    } catch (err) {
      console.error(err);
    }
  }
  

  return (


        <div className='admin-full'>
     
      <nav className="nav-bar">
       <div className="left-align">
         <h1 className="nav-link text-black" style={{fontSize:"25px"}}>Admin Panel</h1>
        </div>
         <div className="right-align">
           <button className="nav-link text-black" onClick={()=>{logout()}}>Log out <i className="fa fa-sign-out" aria-hidden="true"></i></button>
          </div>   
        </nav>

        <div className='admin-options'>
        <div onClick={()=>{setadmincontent("project")}} className='single-admin-option' >
            <i ></i>
            <h1>Project</h1>
        </div>
    
        <div onClick={()=>{setadmincontent("property")}} className='single-admin-option'>
        <i ></i>
            <h1>Property</h1>
        </div>
        <div onClick={()=>{setadmincontent("contactquery")}} className='single-admin-option'>
        <i ></i>
            <h1>Contact Us</h1>
            
        </div>
        <div onClick={()=>{setadmincontent("appointment")}} className='single-admin-option'>
        <i ></i>
            <h1>Appointment</h1>
        </div>
         <div onClick={()=>{setadmincontent("popup")}} className='single-admin-option'>
        <i ></i>
            <h1>Popup</h1>
        </div>
       
        </div>
        {admincontent==="property"?<Property/>:<></>}
        {admincontent==="project"?<Project/>:<></>}
        {admincontent==="contactquery"?<ContactQuery/>:<></>}
        {admincontent==="appointment"?<Appointment/>:<></>}
        {admincontent==="popup"?<Popup/>:<></>}
    </div>


  )
}

export default AdminBody


// property==event
// project==blog

// property model
// title,location,property_url, propertytype,Nearby, Gallery,  Purpose,location_url, price, areaSqFt,
//  hall, bedRoom, bathRoom,Listingyear,imageContainer,Photos,Description
//  ,addMoreDetails,Feature,Note,Rating,CurrentStatus


// project model
// title,description,imageContainer,Gallery,addMoreDetails,Photos,Floorplan,Feature,Featured,Area,Floors,
// location,Address,City,Postalcode,Parking,Video_url,location_url, Note,CurrentStatus





// import React, { useState } from 'react'
// import Property from '../Pages/Property/Property'
// import Project from '../Pages/Project/Project'
// import './Adminbody.css'
// import axios from "axios"
// import { useNavigate } from "react-router-dom"


// import ContactQuery from '../Pages/ContactQuery/ContactQuery';
// export default function AdminBody() {
//   const [admincontent, setadmincontent] = useState("project");
//   const history = useNavigate();

//   async function logout() {
//     try {
//       await axios.get("admin/logout").then((res)=>{alert("Logged out successfully")})
//     } catch (err) {
//       console.error(err);
//     }
//   }
//   return (
//     <div >
//       <nav className="nav-bar">
//        <div className="left-align">
//          <h1 className="nav-link text-white" style={{fontSize:"30px"}}>Admin Panel</h1>
//         </div>
//          <div className="right-align">
//            <button className="nav-link text-white" onClick={()=>{logout()}}>Log out <i className="fa fa-sign-out" aria-hidden="true"></i></button>
//           </div>   
//         </nav>

//         <div className='admin-options'>
//         <div onClick={()=>{setadmincontent("blog")}} className='single-admin-option' >
//             <i className="fa-sharp fa-solid fa-pager fa-9x"></i>
//             <h1>Project</h1>
//         </div>
    
//         <div onClick={()=>{setadmincontent("event")}} className='single-admin-option'>
//         <i className="fa-solid fa-calendar-days fa-9x"></i>
//             <h1>Property</h1>
//         </div>
//         <div onClick={()=>{setadmincontent("query")}} className='single-admin-option'>
//         <i className="fa-solid fa-address-book fa-8x"></i>
//             <h1>Query</h1>
//         </div>
//         </div>
//         {admincontent==="property"?<Property/>:<></>}
//         {admincontent==="project"?<Project/>:<></>}
//         {admincontent==="contactquery"?<ContactQuery/>:<></>}
//     </div>
//   )
// }