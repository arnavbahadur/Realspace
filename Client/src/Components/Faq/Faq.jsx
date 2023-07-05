import React from 'react'
import './Faq.css';
import Singlefaq from './Singlefaq';

const Faq = () => {
  return (
    <div>
      <div className="container-faq">
        <div className="faq-text">Frequently Asked Questions</div>

        <div className="group-faq">
          <button> <h1>General</h1> </button>
          <button> <h1>Fees and Charges</h1> </button>
          <button> <h1>Managing your Account</h1> </button>
          <button> <h1>Services and Fulfillment by Flipkart (FBF)</h1> </button>
        </div>

        <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"} title={"First title"} content={"First Content"}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"} title={"Second title"} content={"Second Content"}/>
        <Singlefaq headingOne={"headingThird"} collapseOne={"collapseThird"} title={"Third title"} content={"Third Content"}/>
        </div>
      </div>
    </div>
  );
};

export default Faq;
