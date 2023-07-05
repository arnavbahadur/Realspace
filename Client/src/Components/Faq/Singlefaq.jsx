import React from 'react'

export default function Singlefaq(props) {
  return (
    <div>
       


             <div className="g-1-faq"> 
          <div className="accordion-item  ">
            <h2 className="accordion-header" id={props.headingOne}>
              <button
                className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target={"#"+props.collapseOne}
                aria-expanded="false" aria-controls={props.collapseOne}
              >
                <strong>{props.title}</strong>
              </button>
            </h2>
            <div id={props.collapseOne}
              className="accordion-collapse collapse "
              aria-labelledby={props.headingOne} data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                {props.content}
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}
