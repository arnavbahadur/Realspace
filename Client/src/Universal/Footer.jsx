import React from 'react'
import './Footer.css'

import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer">
   <div className="containerbaby">
    <div className="row-realfoot">
      <div className="footer-box">
        <div className="single_footer">
        <h4>Realspace group</h4>
          <ul>
            
              <NavLink to={"/"}>
            <img src="./Images/logo.png" alt="realspace logo" className="footerlogo" />
            </NavLink>
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="footer-box">
        <div className="single_footer">
          <h4>Page Link</h4>
          <ul>
            <li>
            <NavLink to={"/About"}>
              <a href="#">Team</a>
              </NavLink>
            </li>
            <li>
            <NavLink to={"/Mymodal"}>
              <a href="#">Latest offers </a>
              </NavLink>
            </li>
            <li>
            <NavLink to={"/Contact"}>
              <a href="#">Contact us</a>
              </NavLink>
            </li>
            <li>
            <NavLink to={"/Appointment"}>
              <a href="#"> book appointment</a>
              </NavLink>
            </li>
            <li>
            <NavLink to={"/faq"}>
              <a href="#"> FAQ'S</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="footer-box">
        <div className="single_footer single_footer_address">
          <h4>Services</h4>
          <ul>
            <li>
            <NavLink to={"/housesale"}>
              <a href="#"> Sale</a>
              </NavLink>
            </li>
            <li>
            <NavLink to={"/houserent"}>
              <a href="#"> Rent</a>
              </NavLink>
               </li>
            <li>
            <NavLink to={"/faq"}>
              <a href="#"> Commericial Project</a>
              </NavLink>
                </li>
            <li>
            <NavLink to={"/faq"}>
              <a href="#"> Residential Project</a>
              </NavLink>
            </li>
            <li>
            <NavLink to={"/faq"}>
              <a href="#"> Other Project</a>
              </NavLink>
            </li>
            <li>
            <NavLink to={"/previousproject"}>
              <a href="#"> Previous Glories</a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="footer-box">
        <div className="single_footer single_footer_address">
          <h4>Subscribe today</h4>
          <div className="signup_form">
            <form action="#" className="subscribe">
              <input
                type="text"
                className="subscribe__input"
                placeholder="Enter Email Address"
              />
              <button type="button" className="subscribe__btn">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
        <div className="social_profile">
          <ul>
            <li>
              <a href="https://www.facebook.com/RealSpaceGroup">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="mailto: realspacegroups@gmail.com">
              <img className="footergmail" src="/Images/gmail.png" alt="" />
             
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/realspace-group/">
               <img className="footerlinkedin" src="/Images/linkdin.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/realspacegroups/">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*- END COL */}
    </div>
    {/*- END ROW */}
    <div className="bottom-right">
      <div className="col-lg-12 col-sm-12 col-xs-12">
        <p className="copyright">
          Copyright © 2023 <a href="#">Realspace group</a>.
        </p>
      </div>
      {/*- END COL */}
    </div>
    {/*- END ROW */}
  </div>
  {/*- END CONTAINER */}
</div>

  )
}

export default Footer
