import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import './EditProperty.css'

export default function EditProperty({props}) {

  const [FormData,setFormData]=useState({
    areaSqFt:"",
    // description:"",
    // title:""
  });
  
  // const [images,setimages]=useState([]);
  // const [imageUpload,setImageUpload]=useState(null);
  
//   const checkimg=()=>{
//     // console.log(imageUpload);
//     if(imageUpload.size>200000){
//       return false;
//     }
//     const fileExtension = imageUpload.name.split(".").at(-1);
//     const allowedFileTypes = ["jpg", "png","gif","jpeg"];
//     if (!allowedFileTypes.includes(fileExtension)) {
//         return false;
//     }  
//     return true;
// }

  // const afterurl=async(url)=>{
  //   setFormData({
  //     ...FormData,
  //     images: url
  // })
  //   alert("Image was Succesfully Updated");
  // }  
 
  const handleChange = e => {
      const { name, value } = e.target
      setFormData({
          ...FormData,
          [name]: value
      })
  }

  async function submit() {
    try {
      await axios.post(`/propertyapi/editproperty/${props.id}`,FormData)
      .then(()=>{alert("Property edited successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  
  
  // const changeimage=async ()=>{
    // console.log("change image");
    // try{
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
    //   } catch (err) {
    //  console.error(err);
    //    }
    // }

    // useEffect(() => {
    //   // console.log("img change")
    //     changeimage();
    // }, [imageUpload])

    useEffect(() => {
      setFormData({
        // areaSqFt:props.areaSqFt,
      })
    }, [])

  return (
    <div className="edit-box">
      <div className="edit-content">
      <input type="text" id="" className="eventtitle"  placeholder="area"  onChange={handleChange}   name="areaSqFt"  value={FormData.areaSqFt} />
     </div>
      <div className="btn-section row-3">          
            <button className='delete-btn' onClick={()=>{submit()}}><i className="fa fa-pencil" aria-hidden="true"></i></button>  
      </div> 
    </div>
  )
}
