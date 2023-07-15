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
         title={"Why should I sell on Flipkart?"} 
         content={"Flipkart is one of the most trusted and best E-commerce platforms. With over 50 crore customers across 27000+ pin codes, Flipkart is trusted by more than 500000 sellers online throughout India. By selling online on Flipkart, the sellers also get access to some of India’s largest shopping festivals, such as The Big Billion Days, The Big Diwali Sale, and whatnot! Flipkart.com provides a very low cost of doing business."}/>
        <Singlefaq headingOne={"headingTwo"} collapseOne={"collapseTwo"} 
        title={"How does selling on Flipkart.com work?"}
         content={"Selling on Flipkart is a very easy process. All you have to do is list the products that you wish to sell on Flipkart.com. Once the order is placed, all that is required from your end is that you pack your product and deliver the product or use Fulfillment by Flipkart (FBF) and let Flipkart deliver the product for you. Once the product is dispatched, you will receive your payment within 7-10 days* from the date of dispatch."}/>
        <Singlefaq headingOne={"headingThree"} collapseOne={"collapseThird"} 
        title={"What is the minimum listing quantity to sell on Flipkart.com?"} 
        content={"To sell online on Flipkart.com, all you require is at least 1 product to be listed. However, we recommend you to go for more than 1 product as Flipkart encompasses over 50 crore customers across 27000+ pin codes and the trust of 500000 sellers."}/>
        <Singlefaq headingOne={"headingFour"} collapseOne={"collapseFour"} 
        title={"What products can I sell on Flipkart.com?"} 
        content={"Flipkart.com has more than 3000+ categories that you can opt from and sell online across 27000+ pin codes of India. Some of the popular categories are Clothes, Sarees, Electronics, Shoes, Jewelry, T-Shirts, Furniture, Art, Books, Watch, Mobiles, Camera, Bed, Groceries, Beauty Products, Plants, Kitchenware, and many more. However, certain categories require prior quality approval from the internal committee before going live."}/>
        <Singlefaq headingOne={"headingFive"} collapseOne={"collapseFive"}
        title={"What do I need to register to sell on Flipkart.com?"}
         content={"A big yes. For selling your products on Flipkart.com, you don't require a website. You will have access to Flipkart Seller Hub after completing your registration where you can list your products and start selling. However, Flipkart.com charges a small amount of marketplace fee once your product is sold out."}/>
        </div>
     </div>
    </div>
  )
}

export default General