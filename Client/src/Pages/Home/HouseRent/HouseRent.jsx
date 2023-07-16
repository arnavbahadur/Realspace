import React, { useEffect, useState } from 'react'
import HomeSectionsHeading from '../../../Components/HomeSectionsHeading/HomeSectionsHeading'
import HomeCardSection from '../../../Components/HomePageCard/HomeCardSection'
import axios from "axios";
import HouseBox from '../../../Components/HouseBox/HouseBox';


const HouseRent = (props) => {

  const [content,setContent]=useState([]);
  const callapi = async () => {
    await axios.get(`/propertyrentapi/`).then((res) => {
      setContent(res.data);
      console.log(res.data)
    });
  };
  const cureentContent = content.slice(0,3);
  useEffect(() => {
    callapi();
  }, []);


  return (
    <div>
      <div className="home-houseRent-section">
        <div className="houseRent-sectionTop heading">
            <HomeSectionsHeading title='Houses' purpose='For Rent' comment='Rent the houses with good enviroment'/>
        </div>
        <div className="home-houseRent-cardSection">
        <div className="cardSection">
         {cureentContent.map(item=>{
          return <HouseBox title={item.title} location={item.location} price={item.price} location_url={item.location_url} img={item.img} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt}  />
         })}
         
     

      </div>
        </div>
      </div>
    </div>
  )
}


export default HouseRent



  // item that are left to connect

  //  "hall":"5", 
  //  "imageContainer":"img not found",
  //  "Photos":"done",
  //  "Description":"yaha ghar mt lena",
  //  "Featured":"kuch khas nahi",
  //  "addMoreDetails":"accha ghar he",
  //  "Feature":"12345",
  //  "Note":"oswm",
  //  "Rating":"9",
  //  "CurrentStatus":"sold"