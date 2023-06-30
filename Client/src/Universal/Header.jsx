import React from 'react'
// import NavLink  from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className='navbar'>
      <div className="nav-left logo">
        {/* LOgo */}
        <img src=".\image\logo.jpg" alt="logo" />
        <img src="" alt="" />
      </div>
      <div className="nav-center">
        {/* navigation menu */}
        <div className="nav-center-navigation-box">
          <p>Home</p>
        </div>
            {/* <li className="Nav-list">
              < NavLink to="/team"><i className="nav-center-navigation-box" aria-hidden="true"></i> team</NavLink>
            </li> */}
        
        <div className="nav-center-navigation-box">
          <p>Partner</p>
        </div>
        <div className="nav-center-navigation-box">
          <p>Contact</p>
        </div>
        <div className="nav-center-navigation-box">
          <p>FAQ</p>
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
