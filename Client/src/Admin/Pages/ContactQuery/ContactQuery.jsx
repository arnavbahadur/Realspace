import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleContact from './SingleContact';
import './contactquery.css'
export default function ContactQuery() {
   const [Query, setQuery] = useState([]);
    const apicall=async ()=>{
        await axios.get(" /contactdetails/allquery").then((res) => { setQuery(res.data) });
      }
      useEffect(() => {
        apicall();
      }, [])

  return (
    <div className="query-component">
         <h1>Query's</h1>
        {Query.map((item) => {
         return <SingleContact props={item}/>
        })}
    </div>
  )
}
