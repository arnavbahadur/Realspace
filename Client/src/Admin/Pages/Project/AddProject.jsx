import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../../firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';


const AddProject = () => {


  const fileListRef=ref(storage,'project/');
  const [imageUpload,setImageUpload]=useState(null);
  const [FormData,setFormData]=useState({
    images:"",
    description:"",
    title:"",
    imageContainer:"",
    // Gallery:"",
    addMoreDetails:"",
    Photos:"",
    Floorplan:"",
    Feature:"",
    Featured:"",
    Area:"",
    Floors:"",
    location:"",
    Address:"",
    City:"",
    Postalcode:"",
     Parking:"",
     Video_url:"",
     location_url:"",
      Note:"",
      CurrentStatus:""
  
  });




  const afterurl=async(url)=>{
    setFormData({
      ...FormData,
      images: url
  })
    alert("Image was Succesfully Updated");
  }


  
  const [images,setimages]=useState([]);
  
  
  const checkimg=()=>{
    // console.log(imageUpload);
    if(imageUpload.size>200000){
      return false;
    }
    const fileExtension = imageUpload.name.split(".").at(-1);
    const allowedFileTypes = ["jpg", "png","gif","jpeg"];
    if (!allowedFileTypes.includes(fileExtension)) {
        return false;
    }  
    return true;
}

 
  const handleChange = e => {
      const { name, value } = e.target
      setFormData({
          ...FormData,
          [name]: value
      })
  }
  async function submit() {
    try {
      await axios.post("/Projectapi/addproject",FormData)
      .then(()=>{alert("Project added successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  

  // const changeimage=async ()=>{
  //   // console.log("change image");
  //   try{
  //   if(!checkimg()){
  //       alert("Please Upload Valid image on 200KB");
  //   }
  //   else if(imageUpload!==null){
  //       const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
  //       await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
  //         getDownloadURL(snapshot.ref).then((url)=>{
  //           // console.log(url); 
  //            afterurl(url);
  //         })
  //       }) 
  //   }
  //   else{
  //       console.log("nothing")
  //   }
  //  //  console.log(user);
  //     } catch (err) {
  //    console.error(err);
  //      }
  //   }

    // useEffect(() => {
    //   // console.log("img change")
    //     changeimage();
    // }, [imageUpload])


  return (
    <div>
        <div className="add-area add_event_area" id='add_event_area'>
            {/* html of Event to add */}        
            <p>Add new project</p>
           <div>
                <input type="text" id="" className='eventtitle' placeholder='location'              onChange={ handleChange } name="location" value={FormData.location}/>
                <input type="text" id="" className='eventtitle' placeholder='property_url'          onChange={ handleChange } name="property_url" value={FormData.property_url}/>
                <input type="text" id="" className='eventtitle' placeholder='price'                 onChange={ handleChange } name="price" value={FormData.price}/>
                <input type="text" id="" className='eventtitle' placeholder='Title'                 onChange={ handleChange } name="title" value={FormData.title}/>
                <input type="text" id="" className='eventtitle' placeholder='area'                  onChange={ handleChange } name="area" value={FormData.areaSqFt}/>        
                <input type="text" id="" className='eventtitle' placeholder='propertytype'          onChange={ handleChange } name="area" value={FormData.propertytype}/>
                <input type="text" id="" className='eventtitle' placeholder='price'                 onChange={ handleChange } name="price" value={FormData.price}/>
                <input type="text" id="" className='eventtitle' placeholder='Feature'               onChange={ handleChange } name="Feature" value={FormData.Feature}/>
                <input type="text" id="" className='eventtitle' placeholder='Listingyear'           onChange={ handleChange } name="Listingyear" value={FormData.Listingyear}/>
                <input type="text" id="" className='eventtitle' placeholder='location_url'          onChange={ handleChange } name="location_url" value={FormData.location_url}/>
                <input type="text" id="" className='eventtitle' placeholder='Purpose'               onChange={ handleChange } name="Purpose" value={FormData.Purpose}/>
                <input type="text" id="" className='eventtitle' placeholder='bedRoom'               onChange={ handleChange } name="bedRoom" value={FormData.bedRoom}/>
                <input type="text" id="" className='eventtitle' placeholder='hall'                  onChange={ handleChange } name="hall" value={FormData.hall}/>
                <input type="text" id="" className='eventtitle' placeholder='bathRoom'              onChange={ handleChange } name="bathRoom" value={FormData.bathRoom}/>
                <input type="text" id="" className='eventtitle' placeholder='CurrentStatus'         onChange={ handleChange } name="CurrentStatus" value={FormData.CurrentStatus}/>
                <input type="text" id="" className='eventtitle' placeholder='Rating'                onChange={ handleChange } name="Rating" value={FormData.Rating}/>
                <input type="text" id="" className='eventtitle' placeholder='Note'                  onChange={ handleChange } name="Note" value={FormData.Note}/>
                <textarea  id="" cols="10" rows="5"placeholder='property discription'               onChange={ handleChange } name="description" value={FormData.Description} required/>
                <textarea  id="" cols="30" rows="5"placeholder='Nearby'  onChange={ handleChange } name="Nearby" value={FormData.Nearby} required/>
                <textarea  id="" cols="30" rows="5"placeholder='addMoreDetails'  onChange={ handleChange } name="addMoreDetails" value={FormData.addMoreDetails} required/>

                {/* <div className="small-box-area" > */}
                  {/* <input type="date"  onChange={ handleChange } name="date" value={FormData.date} /> */}
                  {/* <input type="time" onChange={ handleChange } name="time" value={FormData.time}/> */}
                {/* </div> */}
                {/* <div className="small-box-area">
                <input type="text" onChange={ handleChange } name="authername" value={FormData.authername} placeholder='Author Name'/>
                </div> */}
                {/* <div className="small-box-area"> */}
                  {/* <input type="number" onChange={ handleChange } name="numberofspeaker" value={FormData.numberofspeaker} placeholder='Number of Speaker'/> */}
                  {/* <input type="number" onChange={ handleChange } name="price" value={FormData.price} placeholder='price'/> */}
                {/* </div> */}
                {/* <div className="img-upload">
                  <p>Upload image :</p>
                  <label htmlFor="event-img">
                    <i className="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img"  accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setImageUpload(event.target.files[0])}} />
                </div> */}
                <button onClick={()=>{submit()}} id='blog-txt-add' >Add</button>
                <button type="reset">Clear</button>
            </div>
        </div>
    </div>
  )


}

export default AddProject
// imageContainer,Gallery,addMoreDetails,Photos,Floorplan,Feature,Featured,Area,Floors,
// location,Address,City,Postalcode,Parking,Video_url,location_url, Note,CurrentStatus
