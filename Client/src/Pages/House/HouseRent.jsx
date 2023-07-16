import React, { useEffect, useState } from 'react'
import HomeSectionsHeading from '../../Components/HomeSectionsHeading/HomeSectionsHeading'
import CompareSideBtn from '../../Components/CompareSideBtn/CompareSideBtn'
import PageNum from '../../Components/PageNum/PageNum'
import HouseBox from '../../Components/HouseBox/HouseBox'
import axios from "axios";
import './House.css'

const HouseRent = () => {
    const[currentPage,setCurrentPage]=useState(1);
    const[content,setContent] = useState([])    //fetch data from api and
    const contentPerPage = 9;
    
    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/posts").then()
    // })

    
    const callapi = async () => {
      await axios.get(`/propertyrentapi/`).then((res) => {
        setContent(res.data);
        // console.log(res.data)
      });
    };

    const lastIndex = currentPage * contentPerPage;
    const startIndex = lastIndex - contentPerPage
    const currentContent =  content.slice(startIndex,lastIndex);
    const totalContent=content.length;// posts.length is actuall 100 is for test
      useEffect(() => {
        callapi();
      }, []);
  return (
    <div>
        <CompareSideBtn/>
      {/* <div className="pic-filter">pic & filter</div> */}
      <div className="house-header">
        <HomeSectionsHeading purpose={`For Rent`} title='House'/>
      </div>
      <div className="house-card-section">
        {currentContent.map(item=>{
          return <HouseBox title={item.title} location={item.location} price={item.price} location_url={item.location_url} img={item.img} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt}  />
        })}
      </div>
      <div className="house-pageNumber">
        <PageNum setCurrentPage={setCurrentPage} totalContent={totalContent} contentPerPage={contentPerPage}/>
      </div>
    </div>
  )
}

export default HouseRent
