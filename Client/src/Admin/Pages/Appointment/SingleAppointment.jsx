import React from 'react'

export default function SingleAppointment({props}) {
  return (
    <div className='single-query-box'>
        <h2>Name: {props.f_name} {props.l_name}</h2> 
         <h2>Phone: {props.phone}</h2>
        <h2>Date: {props.date}</h2>
        <h2>Message: {props.message}</h2>
    </div>
  )
}

