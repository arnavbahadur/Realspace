import React from 'react'
import './Projectbox.css'
import Singleprojectbox from './Singleprojectbox'
import axios from 'axios';
import { useEffect,useState } from 'react';


function Projectbox() {


  const [content,setContent]=useState([]);
  const projectapi = async () => {
    await axios.get('/projectapi').then((pro) => {
      setContent(pro.data);
      console.log(pro.data)
    });
  };
  
useEffect(() => {
projectapi();
}, []);



  return (
    <div>
      <>
  <div className="section over-hide">
    <div className="container">
    {content.map(item=>{
          return   <Singleprojectbox title={item.title} Photos={item.Photos} id={item._id}  />
         })}
   
     
    </div>
  </div>
</>

    </div>
  )
}

export default Projectbox


// {
//   "title":"bhanu teacher",
//   "description":"hhhluiya",
//   "imageContainer":"mata",
//   "Photos":[],
//   "addMoreDetails":[],
//   "Feature":[],
//   "Featured":"hiya",
//   "location":"lapata",
//   "location_url":"google",
//   "Note":"jsj",
//   "CurrentStatus":"status"
// }