import React from 'react'
import Singlefaq from './Singlefaq';
import './Faq.css';

const Fee = () => {
  return (
    <div> 
        <div className="fees">
          <h2>Seller Corner</h2>
        <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"}
         title={"I want to sell my property. What are the documents a buyer would need from me?"} 
         content={"A buyer could ask you for the original Sale Deed, Title Deed, relevant tax receipts and Encumbrance Certificate."}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"}
         title={"Who needs to pay the stamp duty? The seller or the buyer?"} 
         content={"Only the buyer pays the Stamp Duty."}/>
        <Singlefaq headingOne={"headingThird"} collapseOne={"collapseThird"}
         title={"Is it mandatory to register documents for the sale of property?"} 
         content={"Yes. You can get it done at the sub-registrar's office of the concerned district."}/>
        <Singlefaq headingOne={"headingFour"} collapseOne={"collapseFour"}
         title={"I am a property broker. How can realscapegroup.in help me?"} 
         content={"You can list the properties available for resale through an enquiry form, which is available on the homepage of our website. By registering with us as a broker, you would get associated with a multitude of buyers without paying any extra charges."}/>
         <Singlefaq headingOne={"headingFifth"} collapseOne={"collapseFifth"}
         title={"I want to sell my property. How can realspacegroup.in help me?"} 
         content={"For selling your property, you need to fill an enquiry form, which is available on the home page of our website."}/>
        </div>
        </div>
    </div>
  )
}

export default Fee