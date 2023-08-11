import React , { useEffect, useState } from 'react'
import HomeSectionsHeading from '../../../Components/HomeSectionsHeading/HomeSectionsHeading'
// import HomeCardSection from '../../../Components/HomePageCard/HomeCardSection'
import axios from "axios";
import HouseBox from '../../../Components/HouseBox/HouseBox'; 
// import PageNum from '../../../Components/PageNum/PageNum';



// house sekk wale me abhi ke lie mene rent se connect kia he kie isse change na kre plz
const HouseSale = (props) => {
    const[currentPage,setCurrentPage]=useState(1);
    const contentPerPage = 3;
    const [content,setContent]=useState([]);
    const callapi = async () => {
      await axios.get(`/propertyapi/`).then((res) => {
        setContent(res.data);
        // console.log(res.data)
      });
    };
    const lastIndex = currentPage * contentPerPage;
    const startIndex = lastIndex - contentPerPage
    // const currentContent = content.slice(startIndex,lastIndex);
    const totalContent = content.length;
    const currentContent = content.slice(0,6);
    useEffect(() => {
      callapi();
    }, []);

  return (
    <div>
      <div className="home-houseSale-section">
        <div className="houseSale-sectionTop heading">
            <HomeSectionsHeading title='Houses'
             purpose='For Sale'
            //  comment='comment'

             />
        </div>
        <div className="home-houseSale-cardSection">
          <div className="house-card-section">
            {currentContent.map(item=>{
              return <HouseBox title={item.title} id={item._id}  gallery={item.Gallery} location={item.location} price={item.price} Purpose={item.Purpose}  houseboximgUrl={item.houseboximgUrl} location_url={item.location_url} img={item.img} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt}  />
            })}
          </div>
        </div>
        {/* <div className="house-pageNumber">
          <PageNum setCurrentPage={setCurrentPage} currentPage={currentPage} totalContent={totalContent} contentPerPage={contentPerPage}/>
        </div> */}
      </div>
    </div>
  )
}


export default HouseSale


// gallery={item.Gallery}