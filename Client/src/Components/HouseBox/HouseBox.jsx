import React, { useRef, useState } from 'react'
import './HouseBox.css'
import { NavLink, useNavigate } from 'react-router-dom';
const HouseBox = (props) => {
    const warnRef = useRef();
    const navigate = useNavigate();
    const likedRef = useRef();
    const [compared,setCompared] = useState(false);
    const [liked,setliked] = useState(false);
    const compareBtn = () =>{
        let compareItem = JSON.parse(localStorage.getItem('compareItem'))
        if(!compared && compareItem.itemIds.length === 4){
            warnRef.classlist.add('.active')
            setTimeout(() => {
                warnRef.classlist.remove('.active')                
            }, 5000);
        }
        else{
            if(compared){
                for(let i = 0; i < 4;i++){      //to remove the item
                    compareItem.itemsId[i]==props.id?compareItem.itemsId.splice(i,1):console.log("compare id is not removed,some error is there");
                }    
            }
            else{       // to add the item
                compareItem.itemIds.push(props.id)
            }
            setCompared(!compared)
        }
    }
  return (
    <div className='houseBox' >
      <div className="houseBox-body">
        <div className="houseBox-imgSection">
            {/* img */}
            <div className="houseBox-top-tag-box">
                {props.title}
            </div>
            <NavLink to={`/housepreview/${props.id}`} >
                <img src="./Images/house-1.jpg" alt="house" onClick={()=> {navigate(`/housepreview`,{state:{id:props.id}})}}/>
            </NavLink>
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
                    <p>For {` sale/rent`}</p>
                    <span className="houseBox-bottomSection-left-price">{props.price}</span>
                </div>   
                <div className="houseBox-bottomSection-right">
                    <div>
                        <i ref={likedRef} className="fa-solid fa-heart" onClick={()=>setliked(!liked)} style={{color:`${liked?"red":"#aaadb1"}`}}/>
                    </div>
                    <div className='compare-icon-container'>
                        <i className="fa-solid fa-arrows-turn-to-dots" onClick={compareBtn} style={{color:`${compared?'black':'#aaadb1'}`}}/>                    
                        <div className="iLabel">
                            <div className="iLabel-up-arrow"></div>
                            <div className="iLabel-text ">
                                <p>Compare</p>
                            </div>
                        </div>
                    </div>
                </div>                     
            </div>
        </div>
        <div ref={warnRef} className="compare-warning-msg " >
            <p>Compare item limit is 4, Remove an item to add new</p>
        </div>
      </div>
    </div>
  )
}


export default HouseBox




// title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,Area,Floors,location,Address,City,Postalcode, Parking,Video_url,location_url, Note,CurrentStatus
// title,location, location_url, price, areaSqFt, hall, bedRoom, bathRoom,Listingyear,imageContainer,Photos,Description,Featured,addMoreDetails,Feature,Note,Rating,CurrentStatus