import React , { useEffect, useState } from 'react'
import HomeSectionsHeading from '../../../Components/HomeSectionsHeading/HomeSectionsHeading'
// import HomeCardSection from '../../../Components/HomePageCard/HomeCardSection'
import axios from "axios";
import HouseBox from '../../../Components/HouseBox/HouseBox'; 



// house sekk wale me abhi ke lie mene rent se connect kia he kie isse change na kre plz
const HouseSale = (props) => {
  

    const [content,setContent]=useState([]);
    const callapi = async () => {
      await axios.get(`/propertyrentapi/`).then((res) => {
        setContent(res.data);
        // console.log(res.data)
      });
    };
    const currentContent = content.slice(0,3);
    useEffect(() => {
      callapi();
    }, []);

  return (
    <div>
      <div className="home-houseSale-section">
        <div className="houseSale-sectionTop heading">
            <HomeSectionsHeading title='Houses' purpose='For Sale' comment='comment'/>
        </div>
        <div className="home-houseSale-cardSection">
        <div className="cardSection">
         {currentContent.map(item=>{
          return <HouseBox title={item.title} location={item.location} price={item.price} location_url={item.location_url} img={item.img} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt}  />
         })}
      </div>
        </div>
      </div>
    </div>
  )
}


export default HouseSale
