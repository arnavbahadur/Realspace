import React, { useEffect, useState } from 'react'
import HomeSectionsHeading from '../../Components/HomeSectionsHeading/HomeSectionsHeading'
import HomeCardSection from '../../Components/HomePageCard/HomeCardSection'
import CompareSideBtn from '../../Components/CompareSideBtn/CompareSideBtn'
import PageNum from '../../Components/PageNum/PageNum'
import Projectbox from '../../Components/Projectbox/Projectbox'

const House = ({purpose}) => {
    const[currentPage,setCurrentPage]=useState(1);
    const[PostPerPage,setPostPerPage] = useState(9);
    const[posts,setPosts] = useState([])    //fetch data from api and
    
    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/posts").then()
    // })

    const lastIndex = currentPage * PostPerPage;
    const startIndex = lastIndex - PostPerPage
    const currentPost = posts.slice(startIndex,lastIndex);
    const totalPost=100;// posts.length is actuall 100 is for test
  return (
    <div>
        <CompareSideBtn/>
      <div className="pic-filter">pic & filter</div>
      <div className="house-header">
        <HomeSectionsHeading purpose={purpose} title='House'/>
      </div>
      <Projectbox />
      <div className="house-pageNumber">
        page number scroll
        <PageNum currentPage={currentPage} setCurrentPage={setCurrentPage} totalPost={totalPost} PostPerPage={PostPerPage}/>
      </div>
    </div>
  )
}

export default House
