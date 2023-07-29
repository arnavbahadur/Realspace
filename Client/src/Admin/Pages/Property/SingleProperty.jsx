import axios from 'axios';
import React from 'react'
import EditProperty from './EditProperty';

export default function SingleProperty(props) {
  const deleteProperty=async ()=>{
    await axios.get(`/Propertyapi/deleteproperty/${props.id}`).then((res) => {  alert("Deleted Sucessfully") });
  }
  const updatePropertyfeatured=async ()=>{
    await axios.get(`/propertyapi/editproperty/${props.id}`).then((res) => {  alert("Featured Sucessfully") });
  }
  return (
    <>
      <div className="blog-box">
        <div className="blog-img">
          <img src={props.images} alt="property image" />
        </div>
        <div className="blog-content">
          <div className="row1">
            <h3 className="title">{props.title}</h3>
            {/* <p className="blogtxt">{props.description}</p> */}
          </div>
          <div className="row1">
            <h3 className="title">{props.Gallery}</h3>
          </div>
          <div className="row1">
            <h3 className="title">{props.location}</h3>
          </div>
          <div className="row1">
            <h3 className="title">{props.price}</h3>
          </div>
          <div className="row1">
            <h3 className="title">{props.location_url}</h3>
          </div>
          <div className="row1">
            <h3 className="title">{props.Photos}</h3>
          </div>
          <div className="row1">
            <h3 className="title">{props.Purpose}</h3>
          </div>
          <div className="row1">
            <h3 className="title">{props.bedRoom}</h3>
          </div>
          <div className="row1">
            <h3 className="title">{props.bathRoom}</h3>
          </div>
          <div className="row1">
            <h3 className="title">{props.reaSqFt}</h3>
          </div>  
          <div className="btn-section row-3">          
          <button className='delete-btn'onClick={()=>{deleteProperty()}}><i className="fa fa-trash fa-1x" aria-hidden="true"/></button>
            {/* <button  className='delete-btn' style={{color:props.featured==="True"?"red":"green"}} onClick={()=>{updatePropertyfeatured()}}>Featured <i class="fa-solid fa-jet-fighter-up"></i></button> */}
          </div> 
        </div>
      </div>
      <EditProperty props={props}/>
    </>
  )
}




// {/* <div className='row-2'>
//             <span className="publisher">{props.authername}</span> 
//             <span className="date">{props.date}</span>
//           </div> */}