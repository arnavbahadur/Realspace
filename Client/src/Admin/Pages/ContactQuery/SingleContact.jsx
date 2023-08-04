import React from 'react'

export default function SingleContact({props}) {
  return (
    <div className='single-query-box'>
    {/* <div>Contact From Response</div> */}
        <h2>Name: {props.f_name} {props.l_name}</h2> 
         <h2>Phone: {props.phone}</h2>
        <h2>Email: {props.email}</h2>
        <h2>requirement: {props.requirement}</h2>
        <h2>budget: {props.budget}</h2>
        <h2>Message: {props.message}</h2>
    </div>
  )
}
