import React from 'react'
import axios from 'axios';
import EditProject from './EditProject';

const SingleProject = (props) => {
    const deleteProject=async ()=>{
        await axios.get(`/Projectapi/deleteProject/${props.id}`).then((res) => { alert("Deleted Sucessfully") });
      }
      const updateProjectfeatured=async ()=>{
        await axios.get(`/Projectapi/editproject/${props.id}`).then((res) => {  alert("Featured Sucessfully") });
      }
  return (
    <div>
      <div className="event-box">
          <div className="event-img">
            <img src={props.images} alt="project--img" />
          </div>
          <div className="event-discription">
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
          {/* <div className="row1">
            <h3 className="title">location_url-{props.location_url}</h3>
          </div> */}
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
      
            <i className="fa fa-trash event-delete-btn" aria-hidden="true"onClick={()=>{deleteProject()}}/>
            <button  className='delete-btn' style={{color:props.featured==="True"?"red":"green"}} onClick={()=>{updateProjectfeatured()}}>Featured <i class="fa-solid fa-jet-fighter-up"></i></button>
          </div>
          <EditProject props={props}/>
        </div>
    </div>
  )
}

export default SingleProject


// ,imageContainer,Gallery,addMoreDetails,Photos,Floorplan,Feature,Featured,Area,Floors,
// location,Address,City,Postalcode,Parking,Video_url,location_url, Note,CurrentStatus