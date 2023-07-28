import React from 'react'
import './Faq.css';

import  { useState } from "react";
import General from './General';
import BuyersCorner from './BuyersCorner';
import NRIService from './NRIService';
import SellerCorner from './SellerCorner';

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
        onClick={() => setColor(<SellerCorner/>)}
      >Seller Corner</button>
      <button className="groups-bttn" 
      type="button"
        onClick={() => setColor(<BuyersCorner/>)}
      >Buyer Corner</button>
      <button className="groups-bttn" 
        type="button"
        onClick={() => setColor(<NRIService/>)}
      > NRI Service </button>
     </div>
     {color}
   
  </div>    
    </div>
  );
};

export default Faq;
