import React from 'react'
import './HomeSectionsHeading.css'
const HomeSectionsHeading = (props) => {
  return (
    <div className='homeSectionsHeading'>
      <div className="headingSection-container">
        <p className="headingSection-title">{props.title}</p>
        <p className="headingSection-purpose">{props.purpose}</p>
        <p className="headingSection-comment">{props.comment}</p>
      </div>
    </div>
  )
}

export default HomeSectionsHeading
