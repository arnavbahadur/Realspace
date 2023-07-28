import React from 'react'
import Singlefaq from './Singlefaq';
import './Faq.css';

const Managing = () => {
  return (
    <div> 
      <div className="managing">
        <h2>Buyers Corner</h2>
        <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"}
         title={"How many properties can I own?"} 
         content={"You can own as many properties as you want."}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"}
         title={"What is the difference between long-term Capital Gains and short-term Capital Gains?"} 
         content={"If the house is held for less than three years prior to its sale, it is termed as a short-term capital asset and any gain arising from the sale is treated as a short-term Capital Gain. There are no tax exemptions for short-term Capital Gains and one needs to pay it according to the applicable tax slab."}/>
        <Singlefaq headingOne={"headingThird"} collapseOne={"collapseThird"}
         title={"What are Capital Gains on property purchase?"} 
         content={"Property is considered a capital asset and Capital Gains Tax is levied on the gains arising from the sale of property. Such gains are calculated after adjusting the inflation rate, transfer and renovation charges."}/>
        <Singlefaq headingOne={"headingFour"} collapseOne={"collapseFour"}
         title={"Do I need to pay stamp duty if the property is transferred or is a gift?"} 
         content={"Yes. Generally, the stamp duty on the gift deed ranges from 5% to 12% in all states. In few states like Haryana, Rajasthan and Delhi, concession of 1 to 2 per cent is given to female transferors."}/>
         <Singlefaq headingOne={"headingFifth"} collapseOne={"collapseFifth"}
         title={"How can I register my property?"} 
         content={"Registration of a property includes necessary stamping and paying of registration charges for a sale deed and getting it recorded at the sub-registrar's office of the concerned jurisdictional area. If a property is purchased from a developer directly, getting it registered amounts to act of legal conveyance. In case the purchased property is a second or third transaction, it involves a duly stamped and registered transfer deed. Nowadays, property registration process is computerized in most states."}/>
        </div>
    </div>
    </div>
  )
}

export default Managing