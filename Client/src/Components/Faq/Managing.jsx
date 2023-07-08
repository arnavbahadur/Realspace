import React from 'react'
import Singlefaq from './Singlefaq';
const Managing = () => {
  return (
    <div>
        <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"} title={"First title"} content={"First Content"}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"} title={"Second title"} content={"Second Content"}/>
        <Singlefaq headingOne={"headingThird"} collapseOne={"collapseThird"} title={"Third title"} content={"Third Content"}/>
        </div>
    </div>
  )
}

export default Managing