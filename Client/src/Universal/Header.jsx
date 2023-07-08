import React from 'react'
import { NavLink }  from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        {/* LOgo */}
        <NavLink to='/'>
          <img src="../../../public/Images/Real space logo.png" alt="logo" />
          {/* <img src={<LOgo/>} alt="logo" /> */}
        </NavLink>
      </div>
      <div className="nav-center">
          
        <div className="nav-center-navigation-box">
        <NavLink to="/">
          <p className='nav-center-navigation-box-text'>Home</p>
          </NavLink>
        </div>
            

        <div className="nav-center-navigation-box"  >
          <div>          
            < NavLink to="/Project">
              <p className='nav-center-navigation-box-text'>Projects <i class="fa-solid fa-angle-down"/></p>          
            </NavLink>
          </div>
          <div className="header-dropdown projectPage-dropdown ">
            <div className="header-dropdown-menu">
              <NavLink to="/Compare">
                <p className='nav-center-navigation-box-text'>Present</p>
              </NavLink>
              <NavLink to="">
                <p className='nav-center-navigation-box-text'>Past</p>
              </NavLink>
              <NavLink to="">
                <p className='nav-center-navigation-box-text'>Future</p>
              </NavLink>
            </div>
          </div>
        </div>



        <div className="nav-center-navigation-box">
          <div>

            <NavLink to="/Contact">
              <p className='nav-center-navigation-box-text'>Contact <i class="fa-solid fa-angle-down"/></p>
            </NavLink> 
          </div>
          <div className="header-dropdown">
            <div className="header-dropdown-menu">
              <NavLink to="/Appointment">
                <p className='nav-center-navigation-box-text'>Appointment</p>
              </NavLink>
              <NavLink to="/Contact">
                <p className='nav-center-navigation-box-text'>Contact us</p>
              </NavLink>
            </div>
        </div>
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
