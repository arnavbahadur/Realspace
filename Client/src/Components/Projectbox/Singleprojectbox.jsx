import React from 'react'
// import Project from '../../Pages/Project/Project'
import { NavLink } from 'react-router-dom';

function Singleprojectbox() {
  return (
    <div>
       <div className="row full-height justify-content-center">

        <div className="col-12 text-center align-self-center py-5">
         
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                <NavLink to={`/project`}>
                
            
                    <div className="img-wrap img-1">
                      <img
                        src="./Images/corporate-backgroundless.png"
                        alt=""
                      />
                    </div>
                    <div className="img-wrap img-3">
                      <img
                        src="./Images/corporate-logo.png"
                        alt=""
                      />
                    </div>
                    </NavLink>
              </div>
            </div>
            
     </div>
        </div>
      </div>
    </div>
  )
}

export default Singleprojectbox
