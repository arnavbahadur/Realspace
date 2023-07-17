import React, { useEffect, useState } from 'react'
import HomeSectionsHeading from '../../Components/HomeSectionsHeading/HomeSectionsHeading'
import HomeCardSection from '../../Components/HomePageCard/HomeCardSection'
import CompareSideBtn from '../../Components/CompareSideBtn/CompareSideBtn'
import PageNum from '../../Components/PageNum/PageNum'
import Projectbox from '../../Components/Projectbox/Projectbox'
import axios from 'axios'
import Singleprojectbox from '../../Components/Projectbox/Singleprojectbox'



const PreviousProject = ({purpose}) => {
  // const House = (props) => {
    const[currentPage,setCurrentPage]=useState(1);
    const[content,setContent] = useState([])    //fetch data from api and
    const ContentPerPage = 9;
    
    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/content").then()
    // })
    const callapi = async ()=>{
      await axios.get('/projectapi').then((pro)=>{
        setContent(pro.data);
        console.log(pro.data)
      });
    };

    const lastIndex = currentPage * ContentPerPage;
    const startIndex = lastIndex - ContentPerPage
    const currentContent = content.slice(startIndex,lastIndex);
    const totalContent = content.length;// content.length is actuall 100 is for test
 
    useEffect(()=>{
      callapi();
    },[])
    return (
    <div>
        <CompareSideBtn/>
      <div className="house-header">
        <HomeSectionsHeading purpose={purpose} title='House'/>
      </div>
      {/* <Projectbox currentContent={currentContent}/> */}
      <div className="house-card-section">
        {currentContent.map(item=>{
          return <Singleprojectbox title={item.title} Photos={item.Photos} id={item._id} />
        })}
      </div>
      <div className="house-pageNumber">
        <PageNum setCurrentPage={setCurrentPage} totalContent={totalContent} ContentPerPage={ContentPerPage}/>
      </div>
    </div>
  )
}

export default PreviousProject

