import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import SingleContact from './SingleContact';
import './Contactquery.css'
import ExcelContact from './ExcelContact';
// import { useDownloadExcel } from "react-export-table-to-excel";


export default function ContactQuery() {
  // const[userdata,setuserdata]=useState([]);
   const [Query, setQuery] = useState([]);
  //  const tableRef = useRef(null);

   
    const apicall=async ()=>{
        await axios.get(`/contactapi/allmsg`).then((res) => { setQuery(res.data) });
      }
   console.log("dbf",Query.data)

      useEffect(() => {
        apicall();
      }, [])

  return (
  <div> 

    <h2 className='contactheading'>Contact response</h2>
    
   <div className="query-component">
        <table>
        <thead>
               <tr>
                       <th className='contactname'>Firstname</th> 
                        <th  className='contactphone'>phone</th>
                        <th  className='contactemail'>Email</th>
                        <th  className='contactreq'>requirement</th>
                        <th  className='contactbudget'>Budget</th>
                        <th className='tablemsg'>message</th>
                        <th className='tabledownload'>Download </th>
                 </tr>
        </thead>
        {/* <tbody>
        {Query.map((item) => {
                 <tr>
                        <td className='contactname'>{item.f_name} {item.l_name}</td>
                        <td  className='contactphone'>{item.phone}</td>
                        <td  className='contactemail'>{item.email}</td>
                        <td  className='contactreq'>{item.requirement}</td>
                        <td  className='contactbudget'>{item.budget}</td>
                        <td  className='contactmsg'> {item.message}</td>      
                    </tr>
                  })}
        </tbody> */}
                    
           </table>
   
       {Query.map((item) => {
         return <ExcelContact props={item}/>
        })}
         
         
        {/* {Query.map((item) => {
         return <SingleContact props={item}/>
        })} */}
    </div>

  </div>
   
  )
}
