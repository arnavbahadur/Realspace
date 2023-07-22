import React, { useEffect, useState } from 'react'
import HomeSectionsHeading from '../../../../Components/HomeSectionsHeading/HomeSectionsHeading'
import CompareSideBtn from '../../../../Components/CompareSideBtn/CompareSideBtn'
import PageNum from '../../../../Components/PageNum/PageNum'
import axios from 'axios'
import Singleprojectbox from '../../../../Components/Projectbox/Singleprojectbox'

const Commercial = ({purpose}) => {
  const[currentPage,setCurrentPage]=useState(1);
  const[content,setContent] = useState([])    //fetch data from api and
  const contentPerPage = 9;
  
  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/content").then()
  // })
  const lastIndex = currentPage * contentPerPage;
  const startIndex = lastIndex - contentPerPage
  const currentContent = content.slice(startIndex,lastIndex);
  const totalContent = content.length;// content.length is actuall 100 is for test
  console.log('currentContent in currentProject ',currentContent)

  const callapi = async ()=>{
    await axios.get('/projectapi').then((pro)=>{
      setContent(pro.data);
      console.log(pro.data)
    });
  };


  useEffect(()=>{
    callapi();
  },[])
  return (
    <div>
        <CompareSideBtn/>
    
      <div className="house-card-section">
        {currentContent.map(item=>{
          return <Singleprojectbox title={item.title} Photos={item.Photos} id={item._id} />
        })}
      </div>
      {/* <Projectbox currentContent={currentContent}/> */}
      <div className="house-pageNumber">
        <PageNum setCurrentPage={setCurrentPage} currentPage={currentPage} totalContent={totalContent} contentPerPage={contentPerPage}/>
      </div>
    </div>
  )
}

export default Commercial
