import React from 'react'
import "./CompareSideBtn.css"
import { NavLink } from 'react-router-dom'
const CompareSideBtn = () => {
  return (
    <div>
      <NavLink to={`/Compare`}>
        <div className="compare-fixed-btn">
          <i className="fa-solid fa-arrows-turn-to-dots"/>
        </div>
      </NavLink>
      <div className="compare-fixed-btn-dropdown">
        {/* compare drop down items */}
      </div>
    </div>
  )
}

export default CompareSideBtn
