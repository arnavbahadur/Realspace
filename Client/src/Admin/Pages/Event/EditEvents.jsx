import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../../firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';


const EditEvents = ({props}) => {
  const [FormData,setFormData]=useState({
    images:"",
    description:"",
    title:"",
    authername:"",
    date:"",
    time:"",
    location:"",
    numberofspeaker:"",
    registrationfee:"",
  });
  const [images,setimages]=useState([]);
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
      await axios.post(`/event/updateevent/${props.id}`,FormData)
      .then(()=>{alert("Event Updated successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  

  const changeimage=async ()=>{
    // console.log("change image");
    try{
    if(!checkimg()){
        alert("Please Upload Valid image on 200KB");
    }
    else if(imageUpload!==null){
        const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
        await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then((url)=>{
            // console.log(url); 
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
      // console.log("img change")
        changeimage();
    }, [imageUpload])
    
    useEffect(() => {
      setFormData({
        images:props.images,
        description:props.description,
        title:props.title,
        authername:props.authername,
        date:props.date,
        time:props.time,
        location:props.location,
        numberofspeaker:props.numberofspeaker,
        registrationfee:props.registrationfee,
      })
    },[]);

    
  return (
        <div className="event-edit">
          <hr/>
          <h1 style={{textAlign:"center"}}>Edit <i className="fa fa-pencil" aria-hidden="true"></i></h1>
    <div className="blog-img">
      <div className="img-upload">
        <p>Upload image :</p>
        <input type="file" name="event-img" accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setImageUpload(event.target.files[0])}} />
      </div>
    </div>
    <div className="edit-content">
      <textarea cols={"30"} rows="10" placeholder='Event discription'  onChange={ handleChange } name="description" value={FormData.description} required/>
    </div>
    <div className="edit-content">
    <input type="text" id="" className='eventtitle' placeholder='Title'  onChange={ handleChange } name="title" value={FormData.title}/>
    <input type="text"  id="" placeholder='Location'  onChange={ handleChange } name="location" value={FormData.location} />
    {/* <textarea  id="" cols="30" rows="10"placeholder='Event discription'  onChange={ handleChange } name="description" value={FormData.description} required/> */}
    <div className="small-box-area" >
      <input type="date"  onChange={ handleChange } name="date" value={FormData.date} />
      <input type="time" onChange={ handleChange } name="time" value={FormData.time}/>
    </div>
    <div className="">
    <input type="text" onChange={ handleChange } name="authername" value={FormData.authername} placeholder='Author Name'/>
    </div>
    <div className="small-box-area">
      <input type="number" onChange={ handleChange } name="numberofspeaker" value={FormData.numberofspeaker} placeholder='Number of Speaker'/>
      <input type="number" onChange={ handleChange } name="registrationfee" value={FormData.registrationfee} placeholder='Registration Fee'/>
    </div>
      <div className="btn-section row-3">          
            <button className='delete-btn' onClick={()=>{submit()}}><i className="fa fa-pencil" aria-hidden="true"></i></button>
      </div> 
    </div>
  </div>

   
  )
}

export default EditEvents

