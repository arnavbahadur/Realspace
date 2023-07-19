import React from 'react'
import axios from 'axios';
import EditEvents from './EditEvents';

const Singleevent = (props) => {
    const deleteevent=async ()=>{
        await axios.get(`/event/deleteevent/${props.id}`).then((res) => { alert("Deleted Sucessfully") });
      }
      const updateblgfeatured=async ()=>{
        await axios.get(`/event/changefeaturedstatus/${props.id}`).then((res) => {  alert("Featured Sucessfully") });
      }
  return (
    <div>
      <div className="event-box">
          <div className="event-img">
            <img src={props.images} alt="event-img" />
          </div>
          <div className="event-discription">
            <h3 className="title">{props.title}</h3>
            <p className="event-txt">{props.descriptionn}</p>
            <div className="event-row">
              <div className='date-time'><span>{props.date}</span><span> {props.time}</span></div>
              <p>{props.location}</p>
            </div>
            <div className="event-row">
              <span>Number of speaker: {props.numberofspeaker}</span>
              <span>{props.registrationfee}₹</span>
            </div>
            <i className="fa fa-trash event-delete-btn" aria-hidden="true"onClick={()=>{deleteevent()}}/>
            <button  className='delete-btn' style={{color:props.featured==="True"?"red":"green"}} onClick={()=>{updateblgfeatured()}}>Featured <i class="fa-solid fa-jet-fighter-up"></i></button>
          </div>
          <EditEvents props={props}/>
        </div>
    </div>
  )
}

export default Singleevent
