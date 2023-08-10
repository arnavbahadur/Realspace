import React, { useState } from "react";
import "./Choose.css";
import PopupChoose from "./PopupChoose";

function Choose() {
  const [popup, setPopup] = useState(false);
  const [popupcontain, setpopupcontain] = useState({ title: "", content: "" });

  return (
    <div className="about-choose-section">
      <div className="about-choose">
        <div className="choose-box-1">
          <img
            src="https://www.indiafirstlife.com/documents/3093566/3099980/Customer-First.png/a6f572a7-101c-adb6-913f-c49baa7eeb21?t=1575965753233"
            alt="abc"
          />
          <div className="choose-heading">
            <h3>CUSTOMER FIRST</h3>
          </div>
          <div className="choose-text">
            <p>
             Realspace Group follows the ‘Customer First’ principle in all its
              business activities.
            </p>
            <button className="learnmore"
              onClick={() => {
                setPopup(true);
                setpopupcontain({
                  title: "CUSTOMER FIRST",
                  content:"Realspace Group follows the Customer First principle in all its business activities. We offer luxury property with real benefits at an affordable price. We are supported by dedicated/differentiated customer service. We sold 100+ properties in Fiscal 2022.",
                });
              }}
            >
              {" "}
              Learn More
            </button>
          </div>
        </div>
        <div className="choose-box-2">
          <img
            src="https://www.indiafirstlife.com/documents/3093566/3099980/Great-Legacy.png/a04f9043-7a92-7cbd-867f-6e98df2a1da2?t=1575959565704"
            alt="def"
          />
          <div className="choose-heading">
            <h3> INVESTORS</h3>
          </div>
          <div className="choose-text">
            <p>
            In our thriving real estate company, the foundation of our success lies in the diverse and accomplished backgrounds of our esteemed investors. We take immense pride in having a remarkable investor base primarily comprised of individuals who have excelled in the fields of medicine, engineering, and business.
            </p>
            <button className="learnmore"
              onClick={() => {
                setPopup(true);
                setpopupcontain({ 
                  title: " INVESTORS", 
                  content: "The presence of doctors among our investors signifies not only their astute financial acumen but also their commitment to enhancing the quality of life for others. Engineers, known for their analytical thinking and innovative problem-solving skills, bring a unique perspective to our real estate ventures. Their penchant for designing and constructing intricate systems resonates with our emphasis on crafting aesthetically pleasing and functionally superior properties.The presence of accomplished business professionals in our investor community adds a layer of strategic insight and financial prowess that propels our real estate endeavors to new heights. " 
                });
              }}
            >
              {" "}
              Learn More{" "}
            </button>
          </div>
        </div>
        <div className="choose-box-3">
          <img
            src="https://www.indiafirstlife.com/documents/3093566/3099980/Technology-Driven+%281%29.png/1068c374-dc48-422a-5823-be09127339b5?t=1575964944299"
            alt="ghi"
          />
          <div className="choose-heading">
            <h3>DIGITAL PLATFORM WITH A SEAMLESS EXPERIENCE</h3>
          </div>
          <div className="choose-text">
            <p>
              We have made significant investments in technology to strength
              our sourcing channels and our business processes from lead
              generation and customer acquisition through the customer lifecycle
              management
            </p>
            <button className="learnmore"
              onClick={() => {
                setPopup(true);
                setpopupcontain({ 
                  title: "DIGITAL PLATFORM WITH A SEAMLESS EXPERIENCE", 
                  content: "We have made significant investments in technology to strengthen our sourcing channels and our business processes from lead generation and customer acquisition through the customer lifecycle management, to improve the customer experience.  Keep the website design clean, intuitive, and easy to navigate. Use a consistent layout throughout the site with clear headings, menus, and buttons. Ensure that essential information is easily accessible, such as property listings, search filters,Responsive Design,Fast Loading speed,Detailed Property Information,Regular Updates and contact details." 
                });
              }}
            >
              {" "}
              Learn More{" "}
            </button>
          </div>
        </div>
        <div className="choose-box-4">
          <img
            src="https://www.indiafirstlife.com/documents/3093566/3099980/Need-based-Product-offerings+%281%29.png/c470be79-84d7-95c9-0c1d-334c21fed084?t=1575965518545"
            alt="jkl"
          />
          <div className="choose-heading">
            <h3>NEED-BASED PRODUCT OFFERINGS</h3>
          </div>
          <div className="choose-text">
            <p>
              We have products that are in sync with your individual needs and
              life goals.
            </p>
            <button className="learnmore"
              onClick={() => {
                setPopup(true);
                setpopupcontain({ 
                  title: "NEED-BASED PRODUCT OFFERINGS", 
                  content: "We have products that are in sync with your individual needs and life goals. In the individual product category, our products help you plan for protection, retirement to legacy planning. Similarly, in our group product category, we cater to protection and savings for organisations and their members. Also, it can be easily sold in synergy with your banking products." 
                });
              }}
            >
              {" "}
              Learn More{" "}
            </button>
          </div>
        </div>
      </div>
      {popup ? (
        <PopupChoose setPopup={setPopup} popupcontain={popupcontain} />
      ) : null}
    </div>
  );
}

export default Choose;
