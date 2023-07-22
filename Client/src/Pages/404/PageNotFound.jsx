import React from 'react'
import "./PageNotFound.css";
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='not-page'>
    <div className="notfound">
  <h1>404 Page Not Found</h1>
  </div>
  <div className="error-container">
    <span className="four">
      <span className="screen-reader-text">4</span>
    </span>
    <span className="zero">
      <span className="screen-reader-text">0</span>
    </span>
    <span className="four">
      <span className="screen-reader-text">4</span>
    </span>
  </div>
  <div className="link-container">
  <NavLink to="/">
    <a
      target="_blank"
      href="https://www.silocreativo.com/en/creative-examples-404-error-css/"
      className="more-link"
    >
    Go to Home Page
    </a>
    </NavLink>
  </div>
    </div>
  )
}

export default PageNotFound