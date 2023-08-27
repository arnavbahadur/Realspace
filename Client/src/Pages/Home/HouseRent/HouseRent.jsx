import React, { useEffect, useState } from 'react'
import HomeSectionsHeading from '../../../Components/HomeSectionsHeading/HomeSectionsHeading'
import axios from "axios";
import HouseBox from '../../../Components/HouseBox/HouseBox';


const HouseRent = (props) => {
  // const id = [1,2,3]

  const [content,setContent]=useState([]);
  const callapi = async () => {
    await axios.get(`/propertyapi/`).then((res) => {
      setContent(res.data);
    });
  };
  // console.log("aman",content)
  
  // const currentContent = content.slice(startIndex,lastIndex);
  const currentContent = content.slice(0,3);
  useEffect(() => {
    callapi();
  }, [])
  
  return (
    <div >

      <div className="home-houseRent-section">
        <div className="houseRent-sectionTop heading">
            <HomeSectionsHeading title='Houses'
             purpose='For Rent' 
            // comment='Rent the houses with good enviroment'

            />
        </div>
        <div className="home-houseRent-cardSection">
          <div className="house-card-section">
            {currentContent.map(item=>{
              return <HouseBox key={item._id} title={item.title} gallery={item.Gallery} id={item._id} location={item.location} price={item.price} location_url={item.location_url}  houseboximgUrl={item.houseboximgUrl} Purpose={item.Purpose} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt}  /> //original
              // return <HouseBox title={item.title} gallery={item.Gallery} id={id} location={item.location} price={item.price} location_url={item.location_url} img={item.img} Purpose={item.Purpose} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt}  />  //for testing
              // return <HouseBox content={JSON.stringify(item)}  />
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