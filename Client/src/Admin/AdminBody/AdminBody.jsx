import React, { useState } from 'react'
import Blog from '../Pages/Blog/Blog'
import Event from '../Pages/Event/Event'
import './adminbody.css'

import axios from "axios"
import { useNavigate } from "react-router-dom"


import ContactQuery from '../Pages/ContactQuery/ContactQuery';
export default function AdminBody() {
  const [admincontent, setadmincontent] = useState("blog");
  const history = useNavigate();

  async function logout() {
    try {
      await axios.get("admin/logout").then((res)=>{alert("Logged out successfully")})
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div >
      <nav className="nav-bar">
       <div className="left-align">
         <h1 className="nav-link text-white" style={{fontSize:"30px"}}>Admin Panel</h1>
        </div>
         <div className="right-align">
           <button className="nav-link text-white" onClick={()=>{logout()}}>Log out <i className="fa fa-sign-out" aria-hidden="true"></i></button>
          </div>   
        </nav>

        <div className='admin-options'>
        <div onClick={()=>{setadmincontent("blog")}} className='single-admin-option' >
            <i className="fa-sharp fa-solid fa-pager fa-9x"></i>
            <h1>Blogs</h1>
        </div>
    
        <div onClick={()=>{setadmincontent("event")}} className='single-admin-option'>
        <i className="fa-solid fa-calendar-days fa-9x"></i>
            <h1>Events</h1>
        </div>
        <div onClick={()=>{setadmincontent("query")}} className='single-admin-option'>
        <i className="fa-solid fa-address-book fa-8x"></i>
            <h1>Query</h1>
        </div>
        </div>
        {admincontent==="blog"?<Blog/>:<></>}
        {admincontent==="event"?<Event/>:<></>}
        {admincontent==="query"?<ContactQuery/>:<></>}
    </div>
  )
}
