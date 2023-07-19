import React, { useState, useEffect } from 'react'
import Singleevent from './Singleevent';
import AddEvent from './AddEvent';
import axios from 'axios';
import './Event.css'

const Event = () => {
  const[openform,setopenform]=useState(false);
  const [sign,setSign] =useState('plus');
const signChange = (openform) => {
  // console.log("openform = " +openform+ " sign = " + sign);
  openform? setSign('plus') : setSign('xmark');
}
  const [events, setevents] = useState([]);
const apicall=async ()=>{
    await axios.get("/event/allevents").then((res) => { setevents(res.data) });
  }
  useEffect(() => {
    apicall();
  }, [])
  return (
    <div>
      <div className="event-component">
        <p>Events</p>
        <div className="add-icon" id="add-icon-event" onClick={()=>{setopenform(!openform);signChange(openform)}}>
            {/* icon of add */}
            <i class={`fa-solid fa-${sign}`}/>
        </div>
        {openform?<AddEvent />:<></>}
        
      </div>
      <div className="blogs">
        {/* <p>Evedfisdfiydnts</p> */}
         {events.map((item) => {
         return <Singleevent id={item._id} title={item.title} description={item.description} images={item.images} authername={item.authername} date={item.date} time={item.time} location={item.location} numberofspeaker={item.numberofspeaker} registrationfee={item.registrationfee}/>
        })}
      </div>
    </div>
  )
}

export default Event
















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