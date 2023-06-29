import React, { useState } from 'react'
import './HousePreview.css'
const HousePreview = () => {
  const [liked,setliked] = useState(false);

  return (
    <div className='housePreivew-page'> 
      <div className="housePreview-topSection">
          <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="house" />
            <div className="filter">
                filterComponent
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
          pic component
        </div>
      </div>
      <div className="housePreview-section-2 housePreview-section">
        <div className="housePreview-discription">
          <div className="housePreview-discription-top">
            <div className='housePreview-discription-top-left'>
              <p className="housePreview-propertyid">
                <span style={{fontWeight:'bold'}}>Property Id :</span>
                <span>{`112-23-34`}</span>
                <i class="fa-solid fa-copy"/>
              </p>
            </div>
            <div className='housePreview-discription-top-right'>
              <i class="fa-solid fa-share"/>
              <i className="fa-solid fa-heart" onClick={()=>setliked(!liked)} style={{color:`${liked?"red":"#aaadb1"}`}}/>
              <i className="fa-solid fa-arrows-turn-to-dots"/>
            </div>
          </div>
          <hr />
          <div className="housePreview-discription-houseDetailIcon">
            <div>
              <p>Bedrooms</p>
              <div>
                <i>bed icon</i>
                <span>{`no`}</span>
              </div>              
            </div>
            <div>
              <p>shower</p>
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
                <i class="fa-solid fa-calendar-days"></i>
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
          <div className="housediscription-textArea">
            <h3>Common Note</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt commodi labore unde! Fuga porro maiores, consequatur id laudantium quod repudiandae vel saepe cum doloribus reiciendis molestiae, atque voluptate rem laboriosam mollitia dicta placeat dolorem ex, voluptatibus fugiat maxime non. Doloribus iusto possimus placeat at voluptatibus error nisi laboriosam repellat odit.
              djkfldjg
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HousePreview
