import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleAppointment from './SingleAppointment';
import './Appointment.css'


export default function Appointment() {
   const [Appoint, setAppoint] = useState([]);
    const apicall=async ()=>{
        await axios.get(`/apointmentapi/allapointment`).then((res) => { setAppoint(res.data) });
      }
      useEffect(() => {
        apicall();
      }, [])


  return (
    <div className="query-component">
         <h1>Appoint</h1>
         
        {/* {Appoint.map((item) => {
         return <SingleAppointment props={item}/>
        })} */}
    </div>
  )
}
