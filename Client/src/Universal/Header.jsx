import React from 'react'
import { NavLink }  from "react-router-dom";
import './Header.css'



const Header = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        {/* LOgo */}
        <NavLink to='/'>
          <img src=".\image\logo.jpg" alt="logo" />
          {/* <img src="..\Images\house-1.jpg" alt="logo" /> */}
        </NavLink>
      </div>
      <div className="nav-center">
          
        <div className="nav-center-navigation-box">
        <NavLink to="/">
          <p className='nav-center-navigation-box-text'>Home</p>
          </NavLink>
        </div>
            

        <div className="nav-center-navigation-box">
          <div>          
            < NavLink to="/Project">
              <p className='nav-center-navigation-box-text'>Projects <i class="fa-solid fa-angle-down"/></p>          
            </NavLink>
          </div>
          <div className="header-dropdown projectPage-dropdown ">
            <div className="header-dropdown-menu">
              {/* <NavLink to="/Project"> */}
                <p>Present</p>
              {/* </NavLink> */}
                <p>Past</p>
                <p>Future</p>
            </div>
          </div>
        </div>



        <div className="nav-center-navigation-box">
      <NavLink to="/Contact">
      <p className='nav-center-navigation-box-text'>Contact</p>
      </NavLink> 
        </div>

        <div className="nav-center-navigation-box">
        <NavLink to="/About">
          <p className='nav-center-navigation-box-text'>About</p>
          </NavLink>
        </div>
        <div className="nav-center-navigation-box">
        <NavLink to="/Faq">
          <p className='nav-center-navigation-box-text'>FAQ</p>
          </NavLink>
          
        </div>
        <div className="nav-center-navigation-box">
        <NavLink to="/Appointment">
          <p className='nav-center-navigation-box-text'>Appointment</p>
        </NavLink>
          
        </div>
      </div>
      {/* <div className="nav-right">
        <div className="nav-right-user">
          <i className="fa-solid fa-user"/>
        </div>
      </div> */}
    </div>
  )
}

export default Header
