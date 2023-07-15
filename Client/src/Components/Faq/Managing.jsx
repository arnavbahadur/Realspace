import React from 'react'
import Singlefaq from './Singlefaq';
import './Faq.css';

const Managing = () => {
  return (
    <div> 
      <div className="managing">
        <h2>Managing your Account</h2>
        <div className="accordion" id="accordionExample">
        <Singlefaq headingOne={"headingOne"} collapseOne={"collapseOne"} 
        title={"FHow do I list my products on Flipkart.com?"} 
        content={"Once you have the brand approval of your products from Flipkart’s Brand Regulation Team, you can then proceed to choose the most suitable category for your product. Based on the category you choose, you'll be asked to include product details such as size, model, color, brand, etc. To boost your sales and enhance your online selling experience, you can also take advantage of our various programs by Flipkart, for as low as ₹999 for 1 month. In case of any assistance or guidance, you can reach out to Flipkart’s Seller Support Team 24/7."}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"} 
        title={"What do I need to list my products on Flipkart.com?"}
        content={"To list products on Flipkart.com, you need product details, price, images, stock, and shipping information."}/>
        <Singlefaq headingOne={"headingThird"} collapseOne={"collapseThird"} 
        title={"Can I get help with the development of the catalog (product images, description, etc.)?"} 
        content={"Yes, Flipkart.com always takes good care of its sellers. To amplify your selling experience, Flipkart provides a huge Partner Services Network. One of them is our recently launched IGNITE program, which is as low as ₹999 for 1 month that provides image editing and product cataloging services to enhance product images and kickstart your business. "}/>
        </div>
    </div>
    </div>
  )
}

export default Managing