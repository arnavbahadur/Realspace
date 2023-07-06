import React from 'react'
import './Faq.css';

import  { useState } from "react";
import General from './General';
import Managing from './Managing';
import Service from './Service';
import Fee from './Fee';

const Faq = () => {
  const [color, setColor] = useState(<General/>);
  return (
    <div>

<div className="container-faq">
 <div className="faq-text">Frequently Asked Questions</div>
      <div className="groups">
      <button className="groups-bttn"
        type="button"
        onClick={() => setColor(<General/>)}
      >General</button>
      <button className="groups-bttn"
        type="button"
        onClick={() => setColor(<Fee/>)}
      >Fees and Charges</button>
      <button className="groups-bttn"
        type="button"
        onClick={() => setColor(<Managing/>)}
      >Managing your Account</button>
      <button className="groups-bttn"
        type="button"
        onClick={() => setColor(<Service/>)}
      >Services and Fulfillment by Flipkart</button>
     </div>
     {color}
   
  </div>    
    </div>
  );
};

export default Faq;
