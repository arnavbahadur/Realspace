import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleContact from './SingleContact';
import './contactquery.css'


export default function ContactQuery() {
   const [Query, setQuery] = useState([]);
    const apicall=async ()=>{
        await axios.get(`/contactapi/allmsg`).then((res) => { setQuery(res.data) });
      }
   
      useEffect(() => {
        apicall();
      }, [])


  return (
  <div> 
    <h2 className='contactheading'>Contact response</h2>
   <div className="query-component">
       
         
        {Query.map((item) => {
         return <SingleContact props={item}/>
        })}
    </div>

  </div>
   
  )
}
