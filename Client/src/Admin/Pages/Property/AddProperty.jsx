import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
// import { v4 } from 'uuid';
// import { storage } from '../../../firebase';
// import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';

const AddProperty = () => {
  
  const [FormData,setFormData]=useState({
    images:"",
    description:"",
    title:"",
  });
  
  // const [images,setimages]=useState([]);
  const [imageUpload,setImageUpload]=useState(null);
  
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

  const afterurl=async(url)=>{
    setFormData({
      ...FormData,
      images: url
  })
    alert("Image was Succesfully Updated");
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
      await axios.post("/Propertyapi/addProperty",FormData)
      .then(()=>{alert("Property added successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  
  
  const changeimage=async ()=>{
    // console.log("change image");
    try{
    // if(!checkimg()){
    //     alert("Please Upload Valid image on 200KB");
    // }
    // else if(imageUpload!==null){
        // const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
        // await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
          // getDownloadURL(snapshot.ref).then((url)=>{
            // console.log(url); 
            //  afterurl(url);
          // })
        // }) 
    // }
    // else{
    //     console.log("nothing")
    // }
   //  console.log(user);
      } catch (err) {
     console.error(err);
       }
    }

    useEffect(() => {
      // console.log("img change")
        changeimage();
    }, [imageUpload])



  return (
    <div>
    <div className="add-area add_event_area" id='add_event_area'>     
           <p>Add new Property</p>
           <div>
                <input type="text" id="" className='eventtitle' placeholder='Title'         onChange={ handleChange } name="title" value={FormData.title}/>
                <input type="text" id="" className='eventtitle' placeholder='location'      onChange={ handleChange } name="location" value={FormData.location}/>
                <input type="text" id="" className='eventtitle' placeholder='property_url'  onChange={ handleChange } name="property_url" value={FormData.property_url}/>
                <input type="text" id="" className='eventtitle' placeholder='price'         onChange={ handleChange } name="price" value={FormData.price}/>
                <input type="text" id="" className='eventtitle' placeholder='area'          onChange={ handleChange } name="area" value={FormData.area}/>
                <textarea  id="" cols="30" rows="10"placeholder='property discription'  onChange={ handleChange } name="description" value={FormData.description} required/>
                <div className="small-box-area" >
                  <input type="date0"  onChange={ handleChange } name="dateofconst" value={FormData.date} />
                  {/* <label htmlFor="eventTime">Time : </label> */}
                </div>
                {/* <div className="small-box-area">
                <input type="text" onChange={ handleChange } name="authername" value={FormData.authername} placeholder='Author Name'/>
                </div> */}
                <div className="img-upload">
                  <p>Upload image :</p>
                  <label htmlFor="event-img">
                    <i className="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img" accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setImageUpload(event.target.files[0])}} />
                </div>
                <button onClick={()=>{submit()}} id='blog-txt-add' >Add</button>
                <button type="reset">Clear</button>
            </div>
        </div>
    </div>
  )
}
export default AddProperty


// title,location,property_url, propertytype,Nearby, Gallery,  Purpose,location_url, price, areaSqFt,
//  hall, bedRoom, bathRoom,Listingyear,imageContainer,Photos,Description
//  ,addMoreDetails,Feature,Note,Rating,CurrentStatus