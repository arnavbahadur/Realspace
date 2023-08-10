import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Popup.css'
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


  const [popup, setpopup] = useState([]);
  const apicall=async ()=>{
    await axios.get("/mypopupapi/mypopup").then((res) => { setpopup(res.data) });
  }
  useEffect(() => {
    apicall();
  }, [])




  // console.log("bhaj",popup.data)
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
                     <button onClick={()=>{submit()}} id='blog-txt-add' className='popupbuton' >Add popup</button>
                </div>

                {popup.map((item) => {
                 return  <img  className='popupimg' src={item.Photos[0].imgUrl} alt="foto" />  })}
    </div>
  )
}

export default Popup
