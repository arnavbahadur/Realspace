import React from 'react'
import "./HomeCardSection.css"
import HouseBox from '../HouseBox/HouseBox'

const HomeCardSection = () => {
  return (
    <div>
      <div className="cardSection">
        <HouseBox/>
        <HouseBox/>
        <HouseBox/>
        {/* <HouseBox/>
        <HouseBox/> */}

      </div>
    </div>
  )
}

export default HomeCardSection
