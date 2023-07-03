import React, { useState } from 'react'
import './HousePreview.css'
const HousePreview = () => {
  const [liked,setliked] = useState(false);
  const features = ["swimming pool","gym","Tenis court","Elivator"];
  const featuresElem = features.map((item)=>{
    return(
      <li>{item}</li>
    )

  })
  return (
    <div className='housePreivew-page'> 
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
              {`Location of place`}
            </p>
          </div>      
          <div className="housePreview-top-right">
            <p className="housePreview-price">
              <span>{`For sale/rent`}</span>
              <span className='housePreview-price-amount'>{`$20,000`}</span>
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
                <span>{`112-23-34`}</span>
                <i className="fa-solid fa-copy"/>
              </p>
            </div>
            <div className='housePreview-discription-top-right'>
              <i className="fa-solid fa-share"/>
              <i className="fa-solid fa-heart" onClick={()=>setliked(!liked)} style={{color:`${liked?"red":"#aaadb1"}`}}/>
              <i className="fa-solid fa-arrows-turn-to-dots"/>
            </div>
          </div>
          <hr />
          <div className="housePreview-discription-houseDetailIcon">
            <div>
              <p>Bedrooms</p>
              <div>
                <i className="fa-solid fa-bed"/>
                <span>{`no`}</span>
              </div>              
            </div>
            <div>
              <p>Bathrooms</p>
              <div>
                <i className="fa-solid fa-shower"/>
                <span>{`no`}</span>
              </div>              
            </div>
            <div>
              <p>Area</p>
              <div>
                <i className="fa-regular fa-square"/>
                <span>{`no`}</span>
              </div>              
            </div>
            <div>
              <p>Year</p>
              <div>
                <i className="fa-solid fa-calendar-days"></i>
                <span>{`2014`}</span>
              </div>              
            </div>
          </div>
          <div className="housediscription-textArea">
            <h3>Discription</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt commodi labore unde! Fuga porro maiores, consequatur id laudantium quod repudiandae vel saepe cum doloribus reiciendis molestiae, atque voluptate rem laboriosam mollitia dicta placeat dolorem ex, voluptatibus fugiat maxime non. Doloribus iusto possimus placeat at voluptatibus error nisi laboriosam repellat odit.
              djkfldjg
            </p>
          </div>
          <div className="housediscription-textArea">
            <h3>Additional details</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt commodi labore unde! Fuga porro maiores, consequatur id laudantium quod repudiandae vel saepe cum doloribus reiciendis molestiae, atque voluptate rem laboriosam mollitia dicta placeat dolorem ex, voluptatibus fugiat maxime non. Doloribus iusto possimus placeat at voluptatibus error nisi laboriosam repellat odit.
              djkfldjg
            </p>
          </div>
          <div className="housediscription-features">
            <h3>Features</h3>
            <ul>
              {featuresElem}
            </ul>
          </div>
        </div>
      </div>
      <div className="housePreview-section-1 housePreview-section">
        <div className='housePreview-videoSection housePreview-iframe-section'>
          <h3>Property video</h3>
          <div className="housePreview-video housePreview-iframeContainer">
            {/* <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="house" />
            <div><p>Video Tour</p></div> */}
            <iframe src="https://www.youtube.com/embed/QP4CxBlbD7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/>
          </div>
        </div>
        <div className='housePreview-mapSection housePreview-iframe-section'>
          <h3>Map</h3>
          <div className="housePreview-map housePreview-iframeContainer">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117852.10298046564!2d75.65939514335936!3d22.62102239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedi-Caps%20University!5e0!3m2!1sen!2sin!4v1688136971443!5m2!1sen!2sin" width="800" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HousePreview
