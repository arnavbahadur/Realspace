import React from 'react'
import Singlefaq from './Singlefaq';
import './Faq.css';

const Fee = () => {
  return (
    <div> 
        <div className="fees">
          <h2>Fees and Charges</h2>
        <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"}
         title={"Who decides the price of my products?"} 
         content={"FThe seller solely decides the price of any product listed on Flipkart.com. However, we provide an easy pricing calculator to determine the most accurate price for your product."}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"}
         title={"What are the charges for selling on Flipkart.com?"} 
         content={"SFlipkart.com doesn't charge anything for listing the products. However, upon a successful sale, the seller has to incur a small amount of charge as a marketplace fee."}/>
        <Singlefaq headingOne={"headingThird"} collapseOne={"collapseThird"}
         title={"Will I get charged for listing products on Flipkart.com?"} 
         content={"Absolutely not. Flipkart.com doesn’t charge anything for listing the products on its platform."}/>
        <Singlefaq headingOne={"headingFour"} collapseOne={"collapseFour"}
         title={"How and when do I get paid?"} 
         content={"Flipkart.com doesn't charge anything for listing the products. However, upon a successful sale, the seller has to incur a small amount of charge as a marketplace fee."}/>
        </div>
        </div>
    </div>
  )
}

export default Fee