import React from 'react'
import HomeSectionsHeading from '../../../Components/HomeSectionsHeading/HomeSectionsHeading'
import HomeCardSection from '../../../Components/HomePageCard/HomeCardSection'

const HouseRent = () => {
  return (
    <div>
      <div className="home-houseRent-section">
        <div className="houseRent-sectionTop heading">
            <HomeSectionsHeading title='Houses' purpose='For Rent' comment='Rent the houses with good enviroment'/>
        </div>
        <div className="home-houseRent-cardSection">
            <HomeCardSection/>
        </div>
      </div>
    </div>
  )
}

export default HouseRent
