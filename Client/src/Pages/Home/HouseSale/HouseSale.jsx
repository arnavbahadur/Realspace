import React from 'react'
import HomeSectionsHeading from '../../../Components/HomeSectionsHeading/HomeSectionsHeading'
import HomeCardSection from '../../../Components/HomePageCard/HomeCardSection'

const HouseSale = () => {
  return (
    <div>
      <div className="home-houseSale-section">
        <div className="houseSale-sectionTop heading">
            <HomeSectionsHeading title='Houses' purpose='For Sale' comment='comment'/>
        </div>
        <div className="home-houseSale-cardSection">
            <HomeCardSection/>
        </div>
      </div>
    </div>
  )
}

export default HouseSale
