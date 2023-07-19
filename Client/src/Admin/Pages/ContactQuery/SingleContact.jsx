import React from 'react'

export default function SingleContact({props}) {
  return (
    <div className='single-query-box'>
        <h2>Name: {props.name} ,  Phone: {props.phone}</h2>
        <h2>Email: {props.email}</h2>
        <h2>Query: {props.query}</h2>
        <h2>Idea: {props.idea}</h2>
        <h2>Message: {props.message}</h2>
    </div>
  )
}
