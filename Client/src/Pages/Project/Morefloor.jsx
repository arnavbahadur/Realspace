import React from 'react'
import "./Morefloor.css";

const Morefloor = () => {
  return (
    <div>
        <div className="floor">
            <h2>Floor plan</h2>
           <div className="floor-many">
              <div className="plan">
                <h3>Block A</h3>
                <div className="floor-img">
                    <img src="https://verticalhomes.in/img/clifftonpark/4.jpg" alt="" />
                </div>
              </div>
              <div className="plan">
                <h3>Block B</h3>
                <div className="floor-img">
                    <img src="https://verticalhomes.in/img/clifftonpark/5.jpg" alt="" />
                </div>
              </div>
              <div className="plan">
                <h3>Block C</h3>
                <div className="floor-img">
                    <img src="https://i.pinimg.com/564x/da/0f/94/da0f940e4e73987c1d5cbd561cafcf58.jpg" alt="" />
                </div>
              </div>
              <div className="plan">
                <h3>Block D</h3>
              <div className="floor-img">
                </div><div className="floor-img">
                    <img src="https://i.pinimg.com/736x/78/0f/4c/780f4c38a6dce21ab0c32d1d82fd4d1a.jpg" alt="" />
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Morefloor