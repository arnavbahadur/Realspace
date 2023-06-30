import React from "react";
import "./Faq.css";

// const [myStyle, setmyStyle] = useState({
//       color: "black",
//   backgroundColor: "white",
//   border: "1px solid black",
// });

const Faq = () => {
  // let myStyle ={
  //     color: props.mode === 'dark'?'white':'#396179',
  //     backgroundColor: props.mode === 'dark'?'#396179':'white',
  //     border: '1px solid',
  //     borderColor: props.mode === 'dark'?'white':'black',
  //   }
  return (
    <div>
      <div className="container-faq">
        <div className="faq-text">Frequently Asked Questions</div>

        <div className="group-faq"></div>

        <div className="accordion" id="accordionExample">
        
        <div className="g-1-faq"> 
          <div className="accordion-item  ">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="false" aria-controls="collapseOne"
              >
                <strong>Why should I sell on Flipkart?</strong>
              </button>
            </h2>
            <div id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne" data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                Flipkart is one of the most trusted and best E-commerce
                platforms. With over 50 crore customers across 27000+ pin codes,
                Flipkart is trusted by more than 500000 sellers online
                throughout India. By selling online on Flipkart, the sellers
                also get access to some of India’s largest shopping festivals,
                such as The Big Billion Days, The Big Diwali Sale, and whatnot!
                Flipkart.com provides a very low cost of doing business.
              </div>
            </div>
          </div>
          </div>
        
        <div className="g-2-faq">
        <div className="accordion-item ">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                Textutils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
        </div>
        
        <div className="g-3-faq">
        <div className="accordion-item ">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                Textutils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
        </div>
        
        <div className="g-4-faq">
        <div className="accordion-item ">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                Textutils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
        </div>
        
        <div className="g-5-faq">
        <div className="accordion-item ">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                Textutils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
        </div>
        

        
     

        </div>
      </div>

      {/* <div className="container">
        <div className="container-header">
          <h1>Frequently Asked Question</h1>
        </div>
        

        
        <div className="accordion" id="accordionExample">
          <div className="accordion-item  ">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count or
              </div>
            </div>
          </div>


          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                Textutils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body my-3 mx-3">
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </div>
            </div>
          </div>
        </div> 
        </div> 
         */}
      {/* <div className="container my-3">
          <button  onClick={toggleStyle} type="button" className="btn btn-primary ">
           {btntext}
                </button>
      <div className="form-check form-switch container my-3">
        <input className="form-check-input" onClick={toggleStyle} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" onClick={toggleStyle} for="flexSwitchCheckDefault">{btntext}</label>
      </div>
        </div> */}
    </div>
  );
};

export default Faq;
