import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { v4 } from 'uuid';
import { storage } from '../../../firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';


const Addmultiimg = (props) => {
    
  

//   const afterurl=async(url)=>{
//     setFormData({
//       ...FormData,
//       projectsingleimg: url
//   })
//     alert("Image was Succesfully Updated");
//   }


//   const handleChange = e => {
//     const { name, value } = e.target
//     setFormData({
//         ...FormData,
//         [name]: value
//     })
// }

 const[multipleimg,setmultipleimg]=useState([])
  
 const check=()=>{
   // console.log(imageUpload);
   if(imageUpload.size>400000){
     return false;
   }
   const fileExtension = imageUpload.name.split(".").at(-1);
   const allowedFileTypes = ["jpg", "png","gif","jpeg"];
   if (!allowedFileTypes.includes(fileExtension)) {
       return false;
   }  
   return true;
}



const [images,setimages]=useState([]);
const fileListRef=ref(storage,'property/');
const [imageUpload,setImageUpload]=useState(null);
 

// if(!check()){
//     alert("Please Upload Valid image of 400KB");
//   }
// else

  const uploadimage=async ()=>{
   // console.log("change image");
   try{
      if(imageUpload!==null){
       const imageRef=ref(storage,'property/'+v4()+imageUpload.name);
       await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
         getDownloadURL(snapshot.ref).then((url)=>{
           console.log(url); 
           //  afterurl(url);
           setImageUpload(null)
           multipleimg.push(url)
            props.formarray.push(url)
           alert("img upload ")
         })
       }) 
   }
   else{
       console.log("nothing")
   }
     } catch (err) {
    console.error(err);
      }
   }


 useEffect(() => {
   // console.log("img change")
     uploadimage();
 }, [imageUpload])
   


//   console.log(props)


  return (
    <div>
    
    <div className="add-area add_event_area" id='add_event_area'>  

{multipleimg.map(item=>{
    return <img  style={{ width:"80px",height:"80px"}} src={item} alt="recent" />
})}             
        <div className="img-upload">
          {/* <p>multiple  img</p> */}
          <label htmlFor="event-img">
            <i className="fa-solid fa-upload"/>
          </label>
          <input type="file" name="event-img"  accept="image/png, image/gif, image/jpeg" 
           onChange={(e)=>{setImageUpload(e.target.files[0])}} />
        </div>         
</div>
    
    </div>
  )
}

export default Addmultiimg







  


