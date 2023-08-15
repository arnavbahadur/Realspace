import React, { useState, useEffect } from 'react'
import SingleProject from './SingleProject';
import AddProject from './AddProject';
import axios from 'axios';
import './Project.css'

const Project = () => {
  const[openform,setopenform]=useState(false);
  const [sign,setSign] =useState('plus');
const signChange = (openform) => {
  // console.log("openform = " +openform+ " sign = " + sign);
  openform? setSign('plus') : setSign('xmark');
}
  const [project, setproject] = useState([]);
const apicall=async ()=>{
    await axios.get("/Projectapi/").then((res) => { setproject(res.data) });
  }
  useEffect(() => {
    apicall();
  }, [])
  return (
    <div>
      <div className="event-component">
        <h2>Project</h2>
        <div className="add-icon" id="add-icon-event" onClick={()=>{setopenform(!openform);signChange(openform)}}>
            {/* icon of add */}
            <i class={`fa-solid fa-${sign}`}/>
        </div>
        {openform?<AddProject />:<></>}
        
      </div>
      <div className="blogs" style={{display:"flex", flexWrap:"wrap"}}>
        {/* <p>Evedfisdfiydnts</p> */}
         {project.map((item) => {
         return <SingleProject id={item._id} title={item.title} description={item.description} images={item.images}  location={item.location}  featured={item.featured}   price={item.price} location_url={item.location_url}  Purpose={item.Purpose} bedRoom={item.bedRoom} bathRoom={item.bathRoom} areaSqFt={item.areaSqFt} 
         />
        })}
      </div>
    </div>
  )
}

export default Project


// title,description,imageContainer,Gallery,addMoreDetails,Photos,Floorplan,Feature,Featured,Area,Floors,
// location,Address,City,Postalcode,Parking,Video_url,location_url, Note,CurrentStatus














    // {/* </div> */}
    //   {/* <div className="events">
    //     <div className="event-box">
    //       <div className="event-img">
    //         <img src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1280.jpg" alt="event1" />
    //       </div>
    //       <div className="event-discription">
    //         <h3 className="title">Title</h3>
    //         <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
    //         <i className="fa fa-trash  event-delete-btn" aria-hidden="true"/>
    //       </div>
    //     </div>
    //     <div className="event-box">
    //       <div className="event-img">
    //         <img src="https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531__480.jpg" alt="eventyy" />
    //       </div>
    //       <div className="event-discription">
    //         <h3 className="title">Title</h3>
    //         <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
    //         <div className="event-row">
    //           <div className='date-time'><span>20/4/2023</span><span> 6:60PM</span></div>
    //           <p>Location</p>
    //         </div>
    //         <div className="event-row">
    //           <span>Number of speaker: 5</span>
    //           <span>500/-</span>
    //         </div>
    //         <i className="fa fa-trash event-delete-btn" aria-hidden="true"/>
    //       </div>
    //     </div>
    //     <div className="event-box">
    //       <div className="event-img">img</div>
    //       <div className="event-discription">
    //         <h3 className="title">Title</h3>
    //         <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
    //         <div className="event-row">
    //           <div className='date-time'><span>20/4/2023</span><span> 6:60PM</span></div>
    //           <p>Location</p>
    //         </div>
    //         <div className="event-row">
    //           <span>Number of speaker: 5</span>
    //           <span>500/-</span>
    //         </div>
    //         <i className="fa fa-trash  event-delete-btn" aria-hidden="true"/>
    //       </div>
    //     </div>
    //     <div className="event-box">
    //       <div className="event-img">img</div>
    //       <div className="event-discription">
    //         <h3 className="title">Title</h3>
    //         <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
    //         <div className="event-row">
    //           <div className='date-time'><span>20/4/2023</span><span> 6:60PM</span></div>
    //           <p>Location</p>
    //         </div>
    //         <div className="event-row">
    //           <span>Number of speaker: 5</span>
    //           <span>500/-</span>
    //         </div>
    //         <i className="fa fa-trash  event-delete-btn" aria-hidden="true"/>
    //       </div>
    //     </div>
    //     <div className="event-box">
    //       <div className="event-img">img</div>
    //       <div className="event-discription">
    //         <h3 className="title">Title</h3>
    //         <p className="event-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, aspernatur cupiditate sit voluptatem obcaecati porro tempora sed molestias corporis modi optio libero animi.</p>
    //         <div className="event-row">
    //           <div className='date-time'><span>20/4/2023</span><span> 6:60PM</span></div>
    //           <p>Location</p>
    //         </div>
    //         <div className="event-row">
    //           <span>Number of speaker: 5</span>
    //           <span>500/-</span>
    //         </div>
    //         <i className="fa fa-trash  event-delete-btn" aria-hidden="true"/>
    //       </div>
    //     </div> */}
    //   {/* </div> */}





  
     
           
         
        