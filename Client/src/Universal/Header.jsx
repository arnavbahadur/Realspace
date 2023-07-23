import React, { useEffect, useState  } from 'react'
import { NavLink , useLocation}  from "react-router-dom";
import './Header.css'

const Header = () => {
  let location = useLocation();
  useEffect(() =>{
    console.log(location.pathname);
  }, [location]);

  const [display, setDisplay] = useState(window.innerWidth > 899 ? true : false);
  const [menue, setmenue] = useState(false);
  const { pathname } = useLocation();

  // useEffect(() => {
  //   setDisplay(window.innerWidth > 899 ? true : false);
  //   setmenue(false);
  // }, [pathname]);
  
  useEffect(() => {
    // setmenue(false);

    const changeWidth = () => {
      setDisplay(window.innerWidth > 899 ? true : false);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [pathname])

  return (
    <div className="header">
    {console.log("hello",location.pathname)}

    <div className="navbar" style={location.pathname==='/'&& window.innerWidth > 899 ?{position:"absolute"}:{}}>

      <div className="nav-left">
        <NavLink to='/'>
          <img className="headerlogo" src="./Images/whitereal.png" alt="logo" />
          
          {/* <img className="headerlogo2" src="./Images/Realspacelogowhite.png" alt="logo" /> */}
        </NavLink>
      </div>

      {display ? 
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
                <p className='nav-center-navigation-box-text-p'>Current</p>
              </NavLink>
              <NavLink to="/previousproject">
                <p className='nav-center-navigation-box-text-p'>Prevoius</p>
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
                <p className='nav-center-navigation-box-text-p'>For Sale</p>
              </NavLink>
              <NavLink to="/houserent">
                <p className='nav-center-navigation-box-text-p'>For rent</p>
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
                <p className='nav-center-navigation-box-text-p'>Contact us</p>
              </NavLink>
              <NavLink to="/Appointment">
                <p className='nav-center-navigation-box-text-p'>Appointment</p>
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
      </div> : <div className='handburg' onClick={() => 
  { setmenue(!menue) }}>
{!menue ? 
<i class="fa-solid fa-bars-staggered fa-2x"></i> 
 : <i class="fa-solid fa-xmark fa-2x"></i>}
</div>}
</div>

{menue ? 
        
<div className="navbar-items-for-mobile" style={location.pathname==='/'?{ /*position:"relative"*/}:{}} >
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
                <p className='nav-center-navigation-box-text-p'>Current</p>
              </NavLink>
              <NavLink to="/previousproject">
                <p className='nav-center-navigation-box-text-p'>Prevoius</p>
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
                <p className='nav-center-navigation-box-text-p'>For Sale</p>
              </NavLink>
              <NavLink to="/houserent">
                <p className='nav-center-navigation-box-text-p'>For rent</p>
              </NavLink>
            </div>
          </div>
        </div>
        
        <div className="nav-center-navigation-box">
          <div>
           
              <p className='nav-center-navigation-box-text'>
              <i class="fa-solid fa-phone"/> Contact <i class="fa-solid fa-angle-down"/></p>
           </div>
          <div className="header-dropdown">
            <div className="header-dropdown-menu">
              <NavLink to="/Contact">
                <p className='nav-center-navigation-box-text-p'>Contact us</p>
              </NavLink>
              <NavLink to="/Appointment">
                <p className='nav-center-navigation-box-text-p'>Appointment</p>
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
        </div> : <></>}


   


    </div>
  )
}



export default Header