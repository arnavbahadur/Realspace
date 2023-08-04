import React from 'react'

export default function SingleAppointment({props}) {
  return (
    <div className='single-query-box'>
    <div>allapointment</div>
        <h2>Name: {props.f_name} {props.l_name}</h2> 
         <h2>Phone: {props.phone}</h2>
        <h2>Email: {props.email}</h2>
        <h2>Query: {props.requirement}</h2>
        <h2>Idea: {props.budget}</h2>
        <h2>Message: {props.message}</h2>
    </div>
  )
}
