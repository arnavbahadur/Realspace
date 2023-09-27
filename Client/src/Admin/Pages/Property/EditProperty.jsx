import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import './EditProperty.css'

export default function EditProperty({props}) {
  const [FormData,setFormData]=useState(props);
  
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
      .then(()=>{alert("Property Changed successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  

  return (
    <div className="edit-box">
      {/* {console.log("EDIT PROPERTY : ",FormData)} */}
      <div className="edit-content">
          <input type="text" id="" className="eventtitle"  placeholder="Title"  onChange={handleChange}   name="title"  value={FormData.title} />
          <input type="text" id="" className="eventtitle"  placeholder="location"  onChange={handleChange}   name="location"  value={FormData.location} />
          <input type="text" id="" className="eventtitle"  placeholder="price"  onChange={handleChange}   name="price"  value={FormData.price} />
          <input type="text" id="" className="eventtitle"  placeholder="area"  onChange={handleChange}   name="areaSqFt"  value={FormData.areaSqFt} />
          <input type="text" id="" className="eventtitle"  placeholder="propertytype"  onChange={handleChange}   name="propertytype"  value={FormData.propertytype} />
          <input type="text" id="" className="eventtitle"  placeholder="balcony"  onChange={handleChange}   name="balcony"  value={FormData.balcony} />
          <input type="text" id="" className="eventtitle"  placeholder="totalfloor"  onChange={handleChange}   name="totalfloor"  value={FormData.totalfloor} />
          <input type="text" id="" className="eventtitle"  placeholder="constructionstage"  onChange={handleChange}   name="constructionstage"  value={FormData.constructionstage} />
          <input type="text" id="" className="eventtitle"  placeholder="dateofpossesion"  onChange={handleChange}   name="dateofpossesion"  value={FormData.dateofpossesion} />
          <input type="text" id="" className="eventtitle"  placeholder="created_at"  onChange={handleChange}   name="created_at"  value={FormData.created_at} />
          <input type="text" id="" className="eventtitle"  placeholder="property_url of ifram"  onChange={handleChange}   name="property_url"  value={FormData.property_url} />
          <input type="text" id="" className="eventtitle"  placeholder="location_url of ifram"  onChange={handleChange}   name="location_url"  value={FormData.location_url} />
          <input type="text" id="" className="eventtitle"  placeholder="Purpose"  onChange={handleChange}   name="Purpose"  value={FormData.Purpose} />
          <input type="text" id="" className="eventtitle"  placeholder="bedRoom"  onChange={handleChange}   name="bedRoom"  value={FormData.bedRoom} />
          <input type="text" id="" className="eventtitle"  placeholder="hall"  onChange={handleChange}   name="hall"  value={FormData.hall} />
          <input type="text" id="" className="eventtitle"  placeholder="bathRoom"  onChange={handleChange}   name="bathRoom"  value={FormData.bathRoom} />
          <input type="text" id="" className="eventtitle"  placeholder="CurrentStatus"  onChange={handleChange}   name="CurrentStatus"  value={FormData.CurrentStatus} />
          <textarea id="" cols="10"  rows="5"              placeholder="property Discription"  onChange={handleChange}  name="Description"  value={FormData.Description}  required />
          <textarea id="" cols="30"  rows="5"              placeholder="Nearby place"  onChange={handleChange}  name="Nearby"  value={FormData.Nearby}  required />
          <textarea id="" cols="30"  rows="5"              placeholder="Feature"  onChange={handleChange}  name="Feature"  value={FormData.Feature}  required />
          <textarea id="" cols="30"  rows="5"              placeholder="addMoreDetails"  onChange={handleChange}  name="addMoreDetails"  value={FormData.addMoreDetails}  required />
     </div>
      <div className="btn-section row-3">          
          <button className='delete-btn' onClick={()=>{submit()}}><i className="fa fa-pencil" aria-hidden="true">Update Changes</i></button>      
          </div> 
    </div>
  )
}
