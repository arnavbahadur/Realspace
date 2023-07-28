import React from "react";
import "./Carousel.css";
function Carousel() {
  return (
    <div className="section-main">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.designsagar.com/wp-content/uploads/2019/10/beautiful-gradient-logo-designs-1.jpg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/123/821/original/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.pikbest.com/png-images/home-icon-logo-design--golden-home-vector-logo-design--home-golden-icon-_1623095.png!w700wp "
              className="carousel-img d-block w-100 "
              height={"369px"}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/124/777/original/real-estate-logo-house-logo-home-logo-sign-symbol-free-vector.jpg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/premium-vector/real-estate-logo-house-logo-home-logo-sign-symbol_565585-829.jpg?w=360"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">last</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  );
}

export default Carousel;