import React from 'react'
import Singlefaq from './Singlefaq';
import './Faq.css';

const Service = () => {
  return (
    <div>
        <div className="service">
          <h2>Services and Fulfillment by Flipkart</h2>
       <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"} 
        title={"Do you offer protection against fraud?"} 
        content={"Yes, Flipkart.com provides monetary compensation against the orders where the returned products have been damaged/ missing under 'Seller Protection Fund (SPF)' program.First Content"}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"}
         title={"Can customers leave feedback and why is customer feedback important?"}
        content={"Yes, customers can leave feedback regarding the purchased product. Customer feedback and rating are important factors for becoming a successful online seller on Flipkart.com. The higher the rating, the higher the trust in the seller. It is also noticed that customers tend to buy products from sellers with high ratings and positive feedback. In short, feedback plays an evaluating factor in determining the performance of the seller."}/>
        <Singlefaq headingOne={"headingThird"} collapseOne={"collapseThird"} 
        title={"TI am having trouble during registration. Can I get some help?"} 
        content={"Once you are registered at Flipkart Seller Hub, you can get in touch with the seller support team at sell@flipkart.com. Our seller support executive will assist you in the registration process. You can also refer to the FAQ section for any doubts/queries. We will be happy to assist you in each step."}/>
        </div> 
    </div>
    </div>
  )
}

export default Service