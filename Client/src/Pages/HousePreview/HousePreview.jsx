import React, { useEffect, useState } from 'react'
import './HousePreview.css'
import CompareSideBtn from '../../Components/CompareSideBtn/CompareSideBtn';
import Comparebtn from '../../Components/Comparebtn/Comparebtn';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';

const HousePreview = (props) => {

  let { id } = useParams();
  const [content,setContent]=useState([]);
  const propertyapi = async () => {
    await axios.get(`/propertyapi/${id}`).then((property) => {
      setContent(property.data);
      // console.log(property.data)
    });
  };   


useEffect(() => {
propertyapi();
}, []);


  // const location = useLocation()
  // console.log("location",location)  //location.state brings data passed in navigate hook
  // console.log("location",location.state?.id)  //location.state brings data passed in navigate hook


  // const id = location.state?.id;          ye line bhanu me comment k he 



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
  console.log("naerby",content)
  return (
    <div className='housePreivew-page'> 
    <CompareSideBtn/>
      <div className="housePreview-topSection">
          <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="house" />
            <div className="filter">
                {/* filterComponent */}
            </div>
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
              <span className='housePreview-price-amount'>{content.price}</span>
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
                <span style={{fontWeight:'bold'}}>Property Id :</span>
                <span>{content._id}</span>
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
          <div className="housediscription-textArea">
            <h3>Additional details</h3>
            {
              // content.Nearby.map((item)=>{
              //   return <p>{item.place}</p>
              // })
            }
            {/* <p>{content.Nearby.place}</p> */}
          </div>
          <div className="housediscription-features">
            <h3>Features</h3>
            <ul> {content.Feature}</ul>  
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
            <iframe src={content.location_url} width="800" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
        {/* <Gallery gallery={content.Gallery}/> */}
      </div>
      
    </div>
  )
}

export default HousePreview
