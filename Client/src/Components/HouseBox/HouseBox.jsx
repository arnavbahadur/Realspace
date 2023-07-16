import React, { useRef, useState } from 'react'
import './HouseBox.css'
import { NavLink } from 'react-router-dom';
const HouseBox = ({post}) => {
    const likedRef = useRef();
    const [compared,setCompared] = useState(false);
    const [liked,setliked] = useState(false);
    
  return (
    <div className='houseBox'>
      <div className="houseBox-body">
        <div className="houseBox-imgSection">
            {/* img */}
            <div className="houseBox-top-tag-box">
                tags
            </div>
            <NavLink to={`/HousePreview`}>
                <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="house" />
            </NavLink>
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
                        <i class="fa-solid fa-bed"/>
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
                    <span className="houseBox-bottomSection-left-price">{`$40,000`}</span>
                </div>   
                <div className="houseBox-bottomSection-right">
                    <div>
                        <i ref={likedRef} className="fa-solid fa-heart" onClick={()=>setliked(!liked)} style={{color:`${liked?"red":"#aaadb1"}`}}/>
                    </div>
                    <div className='compare-icon-container'>
                        <i className="fa-solid fa-arrows-turn-to-dots" onClick={()=>{setCompared(!compared)}} style={{color:`${compared?'black':'#aaadb1'}`}}/>                    
                        <div className="iLabel">
                            <div className="iLabel-up-arrow"></div>
                            <div className="iLabel-text">
                                <p>Compare</p>
                            </div>
                        </div>
                    </div>
                </div>                     
            </div>
        </div>
        <div className="compare-warning-msg" >
            <p>Compare item limit is 4, Remove an item to add new</p>
        </div>
      </div>
    </div>
  )
}

export default HouseBox
