import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className="footer">
   <div className="containerbaby">
    <div className="row-realfoot">
      <div className="footer-box">
        <div className="single_footer">
        <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Realspace group</a>
            </li>
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="footer-box">
        <div className="single_footer">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Filter</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Latest offers </a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#"> book appointment</a>
            </li>
            <li>
              <a href="#"> FAQ'S</a>
            </li>
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="footer-box">
        <div className="single_footer single_footer_address">
          <h4>Page Link</h4>
          <ul>
            <li>
              <a href="#">Lorem Ipsum</a>
            </li>
            <li>
              <a href="#">Simply dummy text</a>
            </li>
            <li>
              <a href="#">The printing and typesetting </a>
            </li>
            <li>
              <a href="#">Standard dummy text</a>
            </li>
            <li>
              <a href="#">Type specimen book</a>
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
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="#">
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
