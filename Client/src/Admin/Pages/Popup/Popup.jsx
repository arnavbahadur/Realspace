import axios from 'axios';
import React from 'react'

function Popup() {


  async function submit() {
    try {
      await axios.post("/mypopupapi/addpopup",FormData)
      .then(()=>{alert("popup added successfully")})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div>
       <div className="img-upload">
                  <p>Upload image :</p>
                  <label htmlFor="event-img">
                    <i className="fa-solid fa-upload"/>
                  </label>
                  <input type="file" name="event-img"  accept="image/png, image/gif, image/jpeg" 
                  //  onChange={(event)=>{setImageUpload(event.target.files[0])}}
                    />
                     <button onClick={()=>{submit()}} id='blog-txt-add' >Add popup</button>
                </div>
    </div>
  )
}

export default Popup
