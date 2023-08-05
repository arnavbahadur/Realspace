import React, { useEffect, useState } from 'react'
import './HousePreview.css'
import CompareSideBtn from '../../Components/CompareSideBtn/CompareSideBtn';
import Comparebtn from '../../Components/Comparebtn/Comparebtn';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';
import PriceShow from '../../Components/PriceShow/PriceShow';

const HousePreview = (props) => {

  let { id } = useParams();
  const [content,setContent]=useState([]);
  const propertyapi = async () => {
    await axios.get(`/propertyapi/${id}`).then((property) => {
      setContent(property.data);
      console.log("bhanu",property.Photos)
      console.log("aman",property.data)
      // console.log(property.data)
    });
  };   

// console.log("hsfhsuf",content.Gallery)
// console.log("bhanu",property.Gallery)


useEffect(() => {
propertyapi();
}, [ ]);


  // const location = useLocation()
  // console.log("location",location)  //location.state brings data passed in navigate hook
  // console.log("location",location.state?.id)  //location.state brings data passed in navigate hook


 


  // location.state.setOk ( true);
  // console.log("location.state.ok",location.state?.ok)  //location.state brings data passed in navigate hook
  
  // let id = 1 // id = props.id;
  // const [compared,setCompared] = useState(false);
    const [liked,setliked] = useState(false);
    const [warned,setWarned] = useState(false);

  // console.log('location.state.id ', location.state.id)
  // const features = ["swimming pool","gym","Tenis court","Elivator"];
  // const featuresElem = features.map((item)=>{
  //   return(
  //     <li>{item}</li>
  //   )

  // })
  // console.log("naerby",content)
  // console.log("photo",content.Photos)
  return (
  <div>
    <div className='housePreivew-page'> 
    <CompareSideBtn/>
      <div className="housePreview-topSection">
      {/* {console.log("curr",content.Photos[0])} */}
          {/* <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=8" alt="house" /> */}
         {/* img bypass */}
          <img src={content.Photos?content?.Photos[0]?.imgUrl:null} alt="houseimage" />
        
          {/* <div className="filter"> */} 
          {/* <img src={props.Photos[0].imgUrl} alt="house ki image" /> */}
              {/* filterComponent */}
          {/* </div> */}
      </div>
      <div className="housePreview-section-1 housePreview-section">        
        <div className="housePreview-top">
          <div className="housePreview-top-left">
            <p className="housePreview-name">
              {`Name in Place`}
            </p>
            <p className="housePreview-location-name">
              {content.location}
            </p>
          </div>      
          <div className="housePreview-top-right">
            <p className="housePreview-price">
              <span>{content.Purpose}</span>
              <span className='housePreview-price-amount'><PriceShow price = {content.price}/></span>
            </p>
          </div>          
        </div>        
        <div className="housePreview-pics">
          {/* pic component */}
        </div>
      </div>
      <div className="housePreview-section-2 housePreview-section">
        <div className="housePreview-discription">
          <div className="housePreview-discription-top">
            <div className='housePreview-discription-top-left'>
              <p className="housePreview-propertyid">
                <span style={{fontWeight:'bold'}}>Rating of Property</span>
                {/* <span>{content._id}</span> */}
                <i className="fa-solid fa-copy"/>
              </p>
            </div>
            <div className='housePreview-discription-top-right'>
              {/* <i className="fa-solid fa-share"/> */}
              <div className='compare-icon-container'>
                  <i className="fa-solid fa-share" />                    
                  <div className="iLabel">
                      <div className="iLabel-up-arrow"></div>
                      <div className="iLabel-text ">
                          <p>Share</p>
                      </div>
                  </div>
              </div>
              <div>
                <i className="fa-solid fa-heart" onClick={()=>setliked(!liked)} style={{color:`${liked?"red":"#aaadb1"}`}}/>
              </div>
              {/* <i className="fa-solid fa-arrows-turn-to-dots"/> */}
              <div className='compare-icon-container'>
                <Comparebtn id={id} warned={warned} setWarned={setWarned} />
              </div>              
            </div>
          </div>
          <div className={`compare-warning-msg ${warned?'active':''}`} >
            <p>Compare item limit is 4, Remove an item to add new</p>
          </div>
          <hr />
          <div className="housePreview-discription-houseDetailIcon">
            <div>
              <p>Bedrooms</p>
              <div>
                <i className="fa-solid fa-bed"/>
                <span>{content.bedRoom}</span>
              </div>              
            </div>
            <div>
              <p>Bathrooms</p>
              <div>
                <i className="fa-solid fa-shower"/>
                <span>{content.bathRoom}</span>
              </div>              
            </div>
            <div>
              <p>Area</p>
              <div>
                <i className="fa-regular fa-square"/>
                <span>{content.areaSqFt}</span>
              </div>              
            </div>
            <div>
              <p>Year</p>
              <div>
                <i className="fa-solid fa-calendar-days"></i>
                <span>{content.created_at}</span>
              </div>              
            </div>
          </div>
          <div className="housediscription-textArea">
            <h3>Discription</h3>
            <p>{content.Description} </p>
          </div>
          {/* <div className="housediscription-textArea">
            <h3>Additional details</h3>
            {
              // content.Nearby.map((item)=>{
              //   return <p>{item.place}</p>
              // })
            }
            {/* <p>{content.Nearby.place}</p> */}
          <div className="housediscription-features">
            <h3>Features</h3>
            <ul> {content.Featured}</ul>  
          </div>
        </div>
      </div>
      <div className="housePreview-section-1 housePreview-section">
        <div className='housePreview-videoSection housePreview-iframe-section'>
          <h3>Property video</h3>
          <div className="housePreview-video housePreview-iframeContainer">
            {/* <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="house" />
            <div><p>Video Tour</p></div> */}
            <iframe src={content.property_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
          </div>
        </div>
        <div className='housePreview-mapSection housePreview-iframe-section'>
          <h3>Map</h3>
          <div className="housePreview-map housePreview-iframeContainer">
          <a href={content.location_url}></a>

            <iframe src={content.location_url} width="800" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.972176342529!2d77.06302747486147!3d23.389223802547146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c8f72daa4adb9%3A0x542891f8da95c6a4!2sParmar%20Krishi%20Farm%20fish%20%26%20goat%20farming!5e0!3m2!1sen!2sin!4v1690978189168!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
        </div>

        {/* <Gallery gallery={content.Gallery}/> */}
        
        {/* <Gallery/> */}
      
      </div>      
    </div>
  </div>
  )
}

export default HousePreview
