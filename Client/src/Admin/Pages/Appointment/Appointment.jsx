import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import SingleAppointment from './SingleAppointment';
import './Appointment.css'
import Excelexport from './Excelappointment';
// import { DownloadTableExcel } from 'react-export-table-to-excel';

export default function Appointment() {
   const [Appoint, setAppoint] = useState([]);
   const tableRef = useRef(null);
    const apicall=async ()=>{
        await axios.get(`/apointmentapi/allapointment`)
        .then((res) => { setAppoint(res.data) });
      }
      useEffect(() => {
        apicall();
      }, [])
//  console.log("hii")
// console.log(Appoint)

  return (
    <div className="query-component">
           <h2>Appointment Response</h2>
           <table>
                     <tr>
                       <th className='tablename'>Firstname</th> 
                        <th  className='tablephone'>phone</th>
                        <th  className='tabledate'>date</th>
                        <th className='tablemsg'>message</th>
                        <th className='tabledownload'>Download </th>
                 </tr>
           </table>
                       
        
         {Appoint.map((item) => {
         return <Excelexport props={item}/>
        })}


        {/* {Appoint.map((item) => {
         return <SingleAppointment props={item}/>
        })} */}
    </div>
  )
}


       
         
