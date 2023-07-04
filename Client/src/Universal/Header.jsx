import React from 'react'
import { NavLink }  from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        {/* LOgo */}
        <img src=".\image\logo.jpg" alt="logo" />
        {/* <img src="..\Images\house-1.jpg" alt="logo" /> */}
      </div>
      <div className="nav-center">
          
        <div className="nav-center-navigation-box">
        <NavLink to="/">
          <p className='nav-center-navigation-box-text'>Home</p>
          </NavLink>
        </div>
            

        <div className="nav-center-navigation-box">
        < NavLink to="/Partner">
          <p className='nav-center-navigation-box-text'>Partner</p>
          </NavLink>
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
      </div>
      <div className="nav-right">
        {/* search,login/out */}
        {/* <div className="nav-right-searchBtn">
          <p>Search <i className="fa-solid fa-magnifying-glass"/></p>
        </div> */}
        <div className="nav-right-user">
          <i className="fa-solid fa-user"/>
        </div>
      </div>
    </div>
  )
}

export default Header
