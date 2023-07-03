import React from 'react'
import './Team.css'
const Team = () => {
  return (
    <div>
     <div id="our-team-section"> 
        <div id="our-team-title">
    
        </div>
        <hr style={{borderColor: '#5B838A', width: '16%'}} />
        <div id="team-tile-container">
          <div id="team-left-tile">
            <img className="team-headshot" src="./Images/house-1.jpg" />
            <div className="team-name-bio">Lorem ipsum dolor sit amet i, pariatur quis alias fugiat enim necessitatibus beatae est, sed voluptatum quisquam soluta qui id quaerat aspernatur veniam asperiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi velit voluptas, quas cupiditate enim fugiat dolorum! Iusto eaque culpa sed iure harum quod, deleniti dolores, eos ipsa earum similique rerum!Ut enim ad minim veniam,iquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore. </div>
            <div className="team-name-banner"> First Person </div>
            <div className="team-title-banner"> Job Title Here </div>
            {/* <div className="team-contact">
              <a href="mailto:someone@example.com"><img className="email-tile" src="https://res.cloudinary.com/zelcro/image/upload/v1487627736/Contact%20Card/email.png" /></a>
              <a href="tel:01010101010">	
              <img className="phone-tile" src="./Images/call.png" /></a>
            </div> */}
          </div>
          <div id="team-right-tile">
            <img className="team-headshot" src="./Images/house-2.jpg" />
            <div className="team-name-bio">Lorem ipsum dolor sit amet consectetuias? Reucimus numquam. Delectus nesciunt corporis eligendi voluptate sit, molestias earum harum quidem adipisci illo voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae error magnam voluptas, provident quae aspernatur illo harum illum possimus dignissimos esse sequi aliquam maxime ipsa aut labore optio quod.Ut enim ad minim veniamo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore. </div>
            <div className="team-name-banner"> Second Person </div>
            <div className="team-title-banner"> Job Title Here </div>
            {/* <div className="team-contact"> 
              <a href="mailto:someone@example.com"><img className="email-tile" src="https://res.cloudinary.com/zelcro/image/upload/v1487627736/Contact%20Card/email.png" /></a>
              <a href="tel:01010101010">	
              <img className="phone-tile" src="./Images/call.png" /></a>
            </div> */}
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Team