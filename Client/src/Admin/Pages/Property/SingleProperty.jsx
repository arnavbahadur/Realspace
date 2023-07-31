import axios from 'axios';
import React, { useState } from 'react'
import EditProperty from './EditProperty';
import "./Property.css";

export default function SingleProperty(props) {
  const deleteProperty=async ()=>{
    await axios.get(`/Propertyapi/deleteproperty/${props.id}`).then((res) => {  alert("Deleted Sucessfully") });
  }
  // const updatePropertyfeatured=async ()=>{
  //   await axios.get(`/propertyapi/editproperty/${props.id}`).then((res) => {  alert("Featured Sucessfully") });
  // }

  // const [FormData,setFormData]=useState({
  //   images:"",
  //   description:"",
  //   title:""
  // });

  async function submit() {
    try {
      await axios.post(`/propertyapi/editproperty/${props.id}`,FormData)
      .then(()=>{alert("Property Changed successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  
  return (
    <>
      <div className="blog-box">
        <div className="blog-img">
          <img src={props.images} alt="property image" />
        </div>
        <div className="blog-content">
          <div className="row1">
            <h3 className="title">Title-{props.title}</h3>
          </div>
          <div className="row1">
            <h3 className="title">Description-{props.Description}</h3>
          </div>
          <div className="row1">
            <h3 className="title">addMoreDetails-{props.addMoreDetails}</h3>
          </div>
          <div className="row1">
            <h3 className="title">property typr-{props.propertytype}</h3>
          </div>
          <div className="row1">
            <h3 className="title">price-{props.price}</h3>
          </div>
          <div className="row1">
            <h3 className="title">Feature-{props.Feature}</h3>
          </div>
          <div className="row1">
            <h3 className="title">Listingyear-{props.Listingyear}</h3>
          </div>
          <div className="row1">
            <h3 className="title">location-{props.location}</h3>
          </div>
          <div className="row1">
            <h3 className="title">location_url-{props.location_url}</h3>
          </div>
          <div className="row1">
            <h3 className="title">property video-{props.property_url}</h3>
          </div>
          <div className="row1">
            <h3 className="title">purpose-{props.Purpose}</h3>
          </div>
          <div className="row1">
            <h3 className="title">no of bed-{props.bedRoom}</h3>
          </div>
          <div className="row1">
            <h3 className="title">no of hall-{props.hall}</h3>
          </div>
          <div className="row1">
            <h3 className="title">no of bathroom-{props.bathRoom}</h3>
          </div>
          <div className="row1">
            <h3 className="title">area in sqfeet-{props.areaSqFt}</h3>
          </div> 
          <div className="row1">
            <h3 className="title">nearby location-{props.Nearby}</h3>
          </div>
          <div className="row1">
            <h3 className="title">CurrentStatus-{props.CurrentStatus}</h3>
          </div>
          <div className="row1">
            <h3 className="title">Rating-{props.Rating}</h3>
          </div>
          <div className="row1">
            <h3 className="title">Note-{props.Note}</h3>
          </div>
          <div className="row1">
            <h3 className="title">photos-{props.Photos}</h3>
          </div> 
          <div className="row1">
            <h3 className="title">Gallery-{props.Gallery}</h3>
          </div>
          <EditProperty props={props}/>
        
          <div className="btn-section row-3">    
          {/* <button className='delete-btn' onClick={()=>{submit()}}><i className="fa fa-pencil" aria-hidden="true">Edit</i></button>       */}
          <button className='delete-btn' onClick={()=>{deleteProperty()}}><i className="fa fa-trash fa-1x" aria-hidden="true">Delete</i></button>
            {/* <button  className='delete-btn' style={{color:props.featured==="True"?"red":"green"}} onClick={()=>{updatePropertyfeatured()}}>Featured <i class="fa-solid fa-jet-fighter-up"></i></button> */}
          </div> 
        </div>
      </div>
     
    </>
  )
}


// imageContainer 

// {/* <div className='row-2'>
//             <span className="publisher">{props.authername}</span> 
//             <span className="date">{props.date}</span>
//           </div> */}