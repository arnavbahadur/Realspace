import React from 'react'
import "./CompareSideBtn.css"
import { NavLink } from 'react-router-dom'
const CompareSideBtn = () => {
  const Total = 4;
  let Count = 0;
  return (
    <div className='compareSideBtn-container'>
      <NavLink to={`/Compare`}>
        <div className="compare-fixed-btn">
          <i className="fa-solid fa-arrows-turn-to-dots"/>
          <span>{`(`+Count +`/`+ Total+`)`}</span>
          <CompareBtnDropDown/>
        </div>
      </NavLink>
      
    </div>
  )
}

const CompareBtnDropDown = ()=>{
  return(
    <div className="compare-fixed-btn-dropdown">
            {/* compare drop down items */}
            <div className="compare-dropdown-text">
              <p>Compare Page</p>
            </div>
            <div className="compare-dropdown-downward-pointer"></div>
    </div>
  )
}

export default CompareSideBtn
