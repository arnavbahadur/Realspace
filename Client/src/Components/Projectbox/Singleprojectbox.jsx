import React from 'react'
// import Project from '../../Pages/Project/Project'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Singleprojectbox(props) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{
      navigate(`/project/${props.id}`)
    }}>
      
            <div className="card-3d-wrap mx-auto">
              <div className="card-3d-wrapper">
                <div className="card-front">
                <NavLink to={`/project`}>
                    <div className="img-wrap img-1">
                      <img
                        src={props.Photos[0].imgUrl}
                        alt=""
                      />
                    </div>
                    <div className="img-wrap img-3">
                      <img
                        src={props.Photos[1]?.imgUrl}
                        alt=""
                      />
                      {/* yaha src me {props.Photos[1].imgUrl} dalna he */}
                    </div>
                    </NavLink>
              </div>
            </div>
          </div>
        </div>
    
  )
}

export default Singleprojectbox
