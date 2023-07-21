import React, { useEffect } from 'react'
import { NavLink , useLocation}  from "react-router-dom";
import './Header.css'

const Header = () => {
  let location = useLocation();
  useEffect(() =>{
    console.log(location.pathname);
  }, [location]);

  return (
    <div className="header">
    {console.log("hello",location.pathname)}

    {/* <div className={location.pathname==="/" ? 'navbar home-page-header': 'navbar'}> */}
    <div className="navbar" style={location.pathname==='/'?{position:"absolute"}:{}}>
      {/* <div className="bgimage">
    </div> */}
      <div className="nav-left">
        <NavLink to='/'>
          <img className="headerlogo" src="./Images/Realspacelogosss.png" alt="logo" />
          
          <img className="headerlogo2" src="./Images/Realspacelogowhite.png" alt="logo" />
        </NavLink>
      </div>
      <div className="nav-center">   
        <div className="nav-center-navigation-box">
        <NavLink to="/">
          <p className='nav-center-navigation-box-text'>
            <i class="fa-solid fa-house"/> Home</p>
          </NavLink>
        </div>
        <div className="nav-center-navigation-box"  >
          <div>          
              <p className='nav-center-navigation-box-text'>
              <i class='fas fa-project-diagram'/> Projects <i class="fa-solid fa-angle-down"/></p>          
          </div>
          <div className="header-dropdown projectPage-dropdown ">
            <div className="header-dropdown-menu">
              <NavLink to="/currentproject">
                <p className='nav-center-navigation-box-text-dropdown'>Current</p>
              </NavLink>
              <NavLink to="/previousproject">
                <p className='nav-center-navigation-box-text-dropdown'>Prevoius</p>
              </NavLink>    
            </div>
          </div>
        </div>
        <div className="nav-center-navigation-box">
          <div>
              <p className='nav-center-navigation-box-text'>
              <i class="fa-solid fa-house-chimney"/> House <i class="fa-solid fa-angle-down"/></p>
          </div>
          <div className="header-dropdown">
            <div className="header-dropdown-menu">
              <NavLink to="/housesale">
                <p className='nav-center-navigation-box-text-dropdown'>For Sale</p>
              </NavLink>
              <NavLink to="/houserent">
                <p className='nav-center-navigation-box-text-dropdown'>For rent</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav-center-navigation-box">
          <div>
            {/* <NavLink to="/Contact"> */}
              <p className='nav-center-navigation-box-text'>
              <i class="fa-solid fa-phone"/> Contact <i class="fa-solid fa-angle-down"/></p>
            {/* </NavLink>  */}
          </div>
          <div className="header-dropdown">
            <div className="header-dropdown-menu">
              <NavLink to="/Contact">
                <p className='nav-center-navigation-box-text-dropdown'>Contact us</p>
              </NavLink>
              <NavLink to="/Appointment">
                <p className='nav-center-navigation-box-text-dropdown'>Appointment</p>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="nav-center-navigation-box">
        <NavLink to="/About">
          <p className='nav-center-navigation-box-text'>
            <i class="fa-solid fa-address-card"/> About</p>
          </NavLink>
        </div>
        <div className="nav-center-navigation-box">
        <NavLink to="/Faq">
          <p className='nav-center-navigation-box-text'>
          <i class="fa-solid fa-clipboard-question"/> FAQ</p>
          </NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}



export default Header