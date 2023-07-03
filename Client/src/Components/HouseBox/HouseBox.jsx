import React, { useEffect, useRef, useState } from 'react'
import './HouseBox.css'
const HouseBox = () => {
    const likedRef = useRef();
    const [liked,setliked] = useState('false');
    // useEffect()
  return (
    <div>
      <div className="houseBox">
        <div className="houseBox-imgSection">
            {/* img */}
            <div className="houseBox-top-tag-box">
                tags
            </div>
            <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="house" />
            <div className="houseBox-imgsection-textArea">
                <p> For{` sale`}</p>
            </div>
        </div>
        <div className="houseBox-descripstion-container">
            <div className="houseBox-name">
                <p> {`Home\\Villa`} in { 'name of near location'}</p>
            </div>
            <div className="houseBox-address">                
                <p><span><i className="fa-solid fa-location-dot"/></span>{`Address link`}</p>
            </div>
            <div className="houseBox-areaMeasure">
                <div className="houseBox-areaMeasure-container">
                    <p>Bedrooms</p>
                    <div className="houseBox-areaMeasure-icon">
                        <i>icon</i>
                        <span>No.</span>
                    </div>
                </div>
                <div className="houseBox-areaMeasure-container">
                    <p>Bathrooms</p>
                    <div className="houseBox-areaMeasure-icon">
                        <i className="fa-solid fa-shower"/>
                        <span>No.</span>
                    </div>
                </div>
                <div className="houseBox-areaMeasure-container">
                    <p>Area</p>
                    <div className="houseBox-areaMeasure-icon">                        
                        <i className="fa-regular fa-square"/>
                        <span>No.</span>
                    </div>
                </div>
            </div>
            <div className="houseBox-bottomSection">
                <div className="houseBox-bottomSection-left">
                    <p>For {` sale/rent`}</p>
                    <span className="houseBox-bottomSection-left-price">$40,000</span>
                </div>   
                <div className="houseBox-bottomSection-right">
                    <i ref={likedRef} class="fa-solid fa-heart"/>
                    <i className="fa-solid fa-arrows-turn-to-dots"/>
                </div>                     
            </div>
        </div>
      </div>
    </div>
  )
}

export default HouseBox
