import React from 'react'
import Singlefaq from './Singlefaq';
import './Faq.css';

const General = () => {
  return (
    <div>
        <div className="gerneral">
          <h2>General</h2>
        <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"}
         title={"How can I build equity into my house?"} 
         content={"You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more. This will go directly to the principal of the loan, rather than the interest. Be sure your lender knows to put the extra toward principal, and not the next month’s payment. Even an extra $50 per month can quickly build equity, as well as knock years off of your loan. The third way to build equity into your house is to make improvements. There are a variety of ways to remodel and make positive changes to the interior and exterior of your home. One of the best ways is to add square footage/living space."}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"} 
        title={"What happens if I pre-purchase but do not utilize the Rental Agreement?"}
         content={"We advise you to use the Rental Agreement Service from 99 acres as Legal Experts approve our templates. Moreover, the validity of Rental Agreement Service is up to 12 Months, which means that you can utilize the service anytime in the next 12 months as per your convenience ."}/>
        <Singlefaq headingOne={"headingThree"} collapseOne={"collapseThird"} 
        title={"What is a Rental Agreement?"} 
        content={"A rental agreement is a legal document that binds the owner of a property and tenant, while safeguarding the interest of both the parties. The landlord cited in the agreement should either be the owner of the property or a person having the power of attorney from the owner."}/>
        <Singlefaq headingOne={"headingFour"} collapseOne={"collapseFour"} 
        title={"When can I apply for a home loan?"} 
        content={" Gather all necessary financial documents such as proof of income, credit history, employment details, and personal identification. Research and choose a lender, comparing interest rates and terms. Complete the lender's application form, submitting the required documents. The lender will evaluate your eligibility based on your financial profile, conduct a property appraisal, and assess the loan amount you qualify for. Upon approval, review and sign the loan agreement, after which the lender will initiate the loan processing, leading to the eventual disbursement of funds for your home purchase."}/>
        <Singlefaq headingOne={"headingFive"} collapseOne={"collapseFive"}
        title={"What does  Realspace Group Company do?"}
         content={`Realspace Group Company is a full-service real estate agency. We assist buyers, sellers, and renters in their real estate transactions. Our services include property listings, property evaluations, negotiations, and legal documentation.`}/>
        </div>
     </div>
    </div>
  )
}

export default General