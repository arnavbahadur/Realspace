import React, { useState } from 'react'
import './HouseBox.css'
import { NavLink, useNavigate } from 'react-router-dom';
import Comparebtn from '../Comparebtn/Comparebtn';
const HouseBox = (props) => {
    let id = 1 // id = props.id;
   let [ok,setOk] = useState(false);
   console.log("ok",ok)
    // const [compared,setCompared] = useState(false);
    const [liked,setliked] = useState(false);
    const [warned,setWarned] = useState(false);
    const navigate = useNavigate();
    
    return (
    <div className='houseBox' >
      <div className="houseBox-body">
        <div className="houseBox-imgSection">
            {/* img */}
            <div className="houseBox-top-tag-box">
                {`${props.title} ,${props._id}`}
            </div>
            {/* <NavLink to={`/housepreview/${id}`} > */}
                <img src="./Images/house-1.jpg" alt="house" onClick={()=> {navigate(`/housepreview/${id}`,{state:{ id :id,ok:ok }})}}/>
            {/* </NavLink> */}
            <div className="houseBox-imgsection-textArea">
                <p> { props.Purpose}</p>
            </div>
        </div>
        <div className="houseBox-descripstion-container">
            <div className="houseBox-name">
                <p> {`Home\\Villa`} in {props.location}</p>
            </div>
            <div className="houseBox-address">                
                <p><span><i className="fa-solid fa-location-dot"/></span>{props.location_url}</p>
            </div>
            <div className="houseBox-areaMeasure">
                <div className="houseBox-areaMeasure-container">
                    <p>Bedrooms</p>
                    <div className="houseBox-areaMeasure-icon">
                        <i class="fa-solid fa-bed"/>
                        <span>{props.bedRoom}</span>
                    </div>
                </div>
                <div className="houseBox-areaMeasure-container">
                    <p>Bathrooms </p>
                    <div className="houseBox-areaMeasure-icon">
                        <i className="fa-solid fa-shower"/>
                        <span>{props.bathRoom}</span>
                    </div>
                </div>
                <div className="houseBox-areaMeasure-container">
                    <p>Area</p>
                    <div className="houseBox-areaMeasure-icon">                        
                        {/* <i className="fa-regular fa-square"/> */}
                        <span>{props.areaSqFt} SqFt</span>
                    </div>
                </div>
            </div>
            <div className="houseBox-bottomSection">
                <div className="houseBox-bottomSection-left">
                    <p>Price </p>
                    <span className="houseBox-bottomSection-left-price">{props.price} 💰</span>
                </div>   
                <div className="houseBox-bottomSection-right">
                    <div>
                        <i className="fa-solid fa-heart" onClick={()=>setliked(!liked)} style={{color:`${liked?"red":"#aaadb1"}`}}/>
                    </div>
                    <div className='compare-icon-container'>                
                        <Comparebtn id={id} warned={warned} setWarned={setWarned}  />
                    </div>
                </div>                     
            </div>
        </div>
        <div className={`compare-warning-msg ${warned?'active':''}`} >
            <p>Compare item limit is 4, Remove an item to add new</p>
        </div>
      </div>
    </div>
  )
}


export default HouseBox




// title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,Area,Floors,location,Address,City,Postalcode, Parking,Video_url,location_url, Note,CurrentStatus
// title,location, location_url, price, areaSqFt, hall, bedRoom, bathRoom,Listingyear,imageContainer,Photos,Description,Featured,addMoreDetails,Feature,Note,Rating,CurrentStatus