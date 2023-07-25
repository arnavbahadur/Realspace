import React from 'react'

const PopupChoose = (props) => {
  return (
    <div className="popup-bg">
    <div className='popup-class' id="popup1">
      <div className="popup-inner">
        <h3 className='bttn-close' onClick={()=>{props.setPopup(false)}}> X </h3>
      <h1>{props.popupcontain.title}</h1>
      <p>{props.popupcontain.content}</p>
      </div>
    </div>
    </div>
  )
}

export default PopupChoose