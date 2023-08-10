// old code with props as object of complete data  props{{datakey:dataValue},{datakey:dataValue},{datakey:dataValue}}


import React, { useState } from 'react'
import './HouseBox.css'
import { useNavigate } from 'react-router-dom';
import Comparebtn from '../Comparebtn/Comparebtn';
import PriceShow from '../PriceShow/PriceShow';
const HouseBox = (props) => {
    // const navigate = useNavigate();
    // console.log("temo",props)
    // let { id } = useParams();
    // let id = 1 // id = props.id;
    // const [compared,setCompared] = useState(false);
    const [liked,setliked] = useState(false);
    // const [liked,setliked] = useState(props.isLiked);
    const [warned,setWarned] = useState(false);
    const navigate = useNavigate();
    // console.log(props.id)
    return (
    <div className='houseBox'>
      <div className="houseBox-body">
        <div className="houseBox-imgSection">
            {/* img */}
            <div className="houseBox-top-tag-box">
                {`${props.title}`}
            </div>
            {/* props.Photos[0].imgUrl */}
            {/* <NavLink to={`/housepreview/`} > */}
                <img src={props?.Photos[0]?.imgUrl} alt="house ki image" onClick={()=> {navigate(`/housepreview/${props.id}`)}}/>
                {/* <img src={props.Photos[0].imgUrl} alt="house ki image" onClick={()=> {navigate(`/housepreview/${props.id}`)}}/> */}
            {/* </NavLink> */}
            <div className="houseBox-imgsection-textArea">
                <p> { props.Purpose}</p>
            </div>
        </div>
        <div className="houseBox-descripstion-container">
            <div className="houseBox-name">
                <p> {`Property`} in {props.location}</p>
            </div>
            <div className="houseBox-address">                
                <a href={props.location_url}> <i className="fa-solid fa-location-dot"/>Location</a>
                {/* <link rel="stylesheet" href={props.location_url} />Location */}
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
                    <span className="houseBox-bottomSection-left-price"><PriceShow price = {props.price}/></span>
                </div>   
                <div className="houseBox-bottomSection-right">
                    <div>
                        <i className="fa-solid fa-heart" onClick={()=>setliked(!liked)} style={{color:`${liked?"red":"#aaadb1"}`}}/>
                    </div>
                    <div className='compare-icon-container'>                
                        <Comparebtn id={props.id} warned={warned} setWarned={setWarned}  />
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



// // new code with props as object of object of complete data props{content:{datakey:dataValue}}


// import React, { useState } from 'react'
// import './HouseBox.css'
// import { useNavigate } from 'react-router-dom';
// import Comparebtn from '../Comparebtn/Comparebtn';
// const HouseBox = (props) => {
//     // const navigate = useNavigate();
//     console.log(props)
//     // let { id } = useParams();
//     // let id = 1 // id = props.content.id;
//    let [ok,setOk] = useState(false);
//    console.log("ok",ok)
//     // const [compared,setCompared] = useState(false);
//     const [liked,setliked] = useState(false);
//     // const [liked,setliked] = useState(props.content.isLiked);
//     const [warned,setWarned] = useState(false);
//     const navigate = useNavigate();
    
//     return (
//     <div className='houseBox' onClick={()=>{
//         navigate(`/housepreview/${props.content._id}`)
//       }} >
//       <div className="houseBox-body">
//         <div className="houseBox-imgSection">
//             {/* img */}
//             <div className="houseBox-top-tag-box">
//                 {`${props.content.title}`}
//             </div>
//             {/* <NavLink to={`/housepreview/`} > */}
//                 <img src="./Images/house-1.jpg" alt="house" onClick={()=> {navigate(`/housepreview/${props.content.id}`)}}/>
//             {/* </NavLink> */}
//             <div className="houseBox-imgsection-textArea">
//                 <p> { props.content.Purpose}</p>
//             </div>
//         </div>
//         <div className="houseBox-descripstion-container">
//             <div className="houseBox-name">
//                 <p> {`Home\\Villa`} in {props.content.location}</p>
//             </div>
//             <div className="houseBox-address">                
//                 <p><span><i className="fa-solid fa-location-dot"/></span>{props.content.location_url}</p>
//             </div>
//             <div className="houseBox-areaMeasure">
//                 <div className="houseBox-areaMeasure-container">
//                     <p>Bedrooms</p>
//                     <div className="houseBox-areaMeasure-icon">
//                         <i class="fa-solid fa-bed"/>
//                         <span>{props.content.bedRoom}</span>
//                     </div>
//                 </div>
//                 <div className="houseBox-areaMeasure-container">
//                     <p>Bathrooms </p>
//                     <div className="houseBox-areaMeasure-icon">
//                         <i className="fa-solid fa-shower"/>
//                         <span>{props.content.bathRoom}</span>
//                     </div>
//                 </div>
//                 <div className="houseBox-areaMeasure-container">
//                     <p>Area</p>
//                     <div className="houseBox-areaMeasure-icon">                        
//                         {/* <i className="fa-regular fa-square"/> */}
//                         <span>{props.content.areaSqFt} SqFt</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="houseBox-bottomSection">
//                 <div className="houseBox-bottomSection-left">
//                     <p>Price </p>
//                     <span className="houseBox-bottomSection-left-price">{props.content.price} 💰</span>
//                 </div>   
//                 <div className="houseBox-bottomSection-right">
//                     <div>
//                         <i className="fa-solid fa-heart" onClick={()=>setliked(!liked)} style={{color:`${liked?"red":"#aaadb1"}`}}/>
//                     </div>
//                     <div className='compare-icon-container'>                
//                         <Comparebtn id={props.content.id} warned={warned} setWarned={setWarned}  />
//                     </div>
//                 </div>                     
//             </div>
//         </div>
//         <div className={`compare-warning-msg ${warned?'active':''}`} >
//             <p>Compare item limit is 4, Remove an item to add new</p>
//         </div>
//       </div>
//     </div>
//   )
// }


// export default HouseBox




// // title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,Area,Floors,location,Address,City,Postalcode, Parking,Video_url,location_url, Note,CurrentStatus
// // title,location, location_url, price, areaSqFt, hall, bedRoom, bathRoom,Listingyear,imageContainer,Photos,Description,Featured,addMoreDetails,Feature,Note,Rating,CurrentStatus