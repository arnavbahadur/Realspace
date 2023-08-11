import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../../firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';


const AddProject = () => {

  const [images,setimages]=useState([]);
  const fileListRef=ref(storage,'project/');
  const [imageUpload,setImageUpload]=useState(null);
  const [FormData,setFormData]=useState({
    
    description:"",
    title:"",
    projectsingleimg:"",
    // Gallery:"",  commented
    // Photos:"",->projectboximg
    addMoreDetails:"",
    // Floorplan:"",
    Feature:"",
    Area:"",
    Floors:"",
    location:"",
    Address:"",
    City:"",
    Postalcode:"",
     Parking:"",
     Video_url:"",
     location_url:"",
      CurrentStatus:"",
      created_at:"",
      Rooms:"",
      reranumber:""
  
  });




  const afterurl=async(url)=>{
    setFormData({
      ...FormData,
      projectsingleimg: url
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

 
  
  
  const check=()=>{
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



 
  
 
// if(!check()){
//   alert("Please Upload Valid image on 200KB");
// }
// else 
  const uploadimage=async ()=>{
    // console.log("change image");
    try{
   if(imageUpload!==null){
        const imageRef=ref(storage,'project/'+v4()+imageUpload.name);
        await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then((url)=>{
            console.log(url); 
             afterurl(url);
          })
        }) 
    }
    else{
        console.log("nothing")
    }
   //  console.log(user);
      } catch (err) {
     console.error(err);
       }
    }


  useEffect(() => {
    console.log("img change")
      uploadimage();
  }, [imageUpload])
    



  async function submit() {
    try {
      await axios.post("/Projectapi/addproject",FormData)
      .then(()=>{alert("Project added successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  


  return (
    <div>
        <div className="add-area add_event_area" id='add_event_area'>        
            <p>Add new project</p>
           <div>
                <input type="text" id="" className='eventtitle' placeholder='location'              onChange={ handleChange } name="location" value={FormData.location}/>
                <input type="text" id="" className='eventtitle' placeholder='Video_url'          onChange={ handleChange } name="Video_url" value={FormData.Video_url}/>
                <input type="text" id="" className='eventtitle' placeholder='price'                 onChange={ handleChange } name="price" value={FormData.price}/>
                <input type="text" id="" className='eventtitle' placeholder='Title'                 onChange={ handleChange } name="title" value={FormData.title}/>
                <input type="text" id="" className='eventtitle' placeholder='area'                  onChange={ handleChange } name="area" value={FormData.area}/>        
                <input type="text" id="" className='eventtitle' placeholder='propertytype'          onChange={ handleChange } name="propertytype" value={FormData.propertytype}/>
                <input type="text" id="" className='eventtitle' placeholder='Floors'                 onChange={ handleChange } name="Floors" value={FormData.Floors}/>
                <input type="text" id="" className='eventtitle' placeholder='Feature'               onChange={ handleChange } name="Feature" value={FormData.Feature}/>
                <input type="text" id="" className='eventtitle' placeholder='Listingyear'           onChange={ handleChange } name="Listingyear" value={FormData.Listingyear}/>
                <input type="text" id="" className='eventtitle' placeholder='location_url'          onChange={ handleChange } name="location_url" value={FormData.location_url}/>
                <input type="text" id="" className='eventtitle' placeholder='Purpose'               onChange={ handleChange } name="Purpose" value={FormData.Purpose}/>
                <input type="text" id="" className='eventtitle' placeholder='Rooms'               onChange={ handleChange } name="Rooms" value={FormData.Rooms}/>
                <input type="text" id="" className='eventtitle' placeholder='Address'                  onChange={ handleChange } name="Address" value={FormData.Address}/>
                <input type="text" id="" className='eventtitle' placeholder='City'              onChange={ handleChange } name="City" value={FormData.City}/>
                <input type="text" id="" className='eventtitle' placeholder='Postalcode'         onChange={ handleChange } name="Postalcode" value={FormData.Postalcode}/>
                <input type="text" id="" className='eventtitle' placeholder='Parking'         onChange={ handleChange } name="Parking" value={FormData.Parking}/>
                <input type="text" id="" className='eventtitle' placeholder='CurrentStatus'         onChange={ handleChange } name="CurrentStatus" value={FormData.CurrentStatus}/>
                <input type="text" id="" className='eventtitle' placeholder='Rating'                onChange={ handleChange } name="Rating" value={FormData.Rating}/>
                <input type="text" id="" className='eventtitle' placeholder='reranumber'                onChange={ handleChange } name="reranumber" value={FormData.reranumber}/>
                <input type="text" id="" className='eventtitle' placeholder='created_at'                  onChange={ handleChange } name="created_at" value={FormData.created_at}/>
                <textarea  id="" cols="10" rows="5"placeholder='property discription'               onChange={ handleChange } name="description" value={FormData.Description} required/>
                <textarea  id="" cols="30" rows="5"placeholder='Nearby'  onChange={ handleChange } name="Nearby" value={FormData.Nearby} required/>
                <textarea  id="" cols="30" rows="5"placeholder='addMoreDetails'  onChange={ handleChange } name="addMoreDetails" value={FormData.addMoreDetails} required/>

              
              
               
                <div className="img-upload">
                  <p>Upload image :[projectsingleimg]</p>
                  <label htmlFor="event-img">
                    <i className="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img"  accept="image/png, image/gif, image/jpeg" 
                   onChange={(projectbox)=>{setImageUpload(projectbox.target.files[0])}} />
                </div>
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
