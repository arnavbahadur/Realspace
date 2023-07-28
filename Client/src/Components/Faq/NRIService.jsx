import React from 'react'
import Singlefaq from './Singlefaq';
import './Faq.css';

const Service = () => {
  return (
    <div>
        <div className="service">
          <h2> NRI Service </h2>
          <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"}
         title={"Are there Any Tax Benefits For Non-Resident Indians buying properties?"} 
         content={"No tax benefits are available for NRI's unless you file your returns and subsequently become eligible to avail the tax benefits as mentioned under Home Loan FAQ's."}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"}
         title={"How is the mode of payment for NRI home loans?"} 
         content={"The housing loan needs to be paid upfront for the entire tenure of the loan by way of direct remittances from abroad through normal banking channels or from other financial accounts as may be permitted by RBI. Generally, payments are done through NRO, NRE, NRNR and FCNR accounts. These accounts change on the basis of RBI regulations."}/>
        <Singlefaq headingOne={"headingThird"} collapseOne={"collapseThird"}
         title={"Can a home/land be sold by an NRI or Person of Indian Origin without the permission of the Reserve Bank of India?"} 
         content={"Yes, the RBI has granted general permission for sale of property. However, where another foreign citizen of Indian origin purchases the property, funds towards the purchase consideration should either be remitted to India or paid out of balances in non-resident accounts maintained with banks in India."}/>
        <Singlefaq headingOne={"headingFour"} collapseOne={"collapseFour"}
         title={"Can a foreign national of non-Indian origin acquire residential property on a lease in India?"} 
         content={"Yes. A Foreign National of non-Indian origin including a citizen of Pakistan or Bangladesh or Sri Lanka or Afghanistan or China or Iran or Nepal or Bhutan can acquire residential properties on lease in India. If the lease does not exceed five years, he/she does not require any prior permission from the RBI."}/>
         <Singlefaq headingOne={"headingFifth"} collapseOne={"collapseFifth"}
         title={"Can NRI or PIO buy property in India jointly with foreign citizen?"} 
         content={"No, an NRI or a PIO cannot buy a property in India jointly with a foreign citizen."}/>
        </div>
    </div>
    </div>
  )
}

export default Service