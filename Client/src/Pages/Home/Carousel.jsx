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
              src="./Images/house-1.jpg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./Images/house-2.jpg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./Images/house-3.jpg "
              className="carousel-img d-block w-100 "
              height={"369px"}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./Images/house-4.jpg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./Images/house-5.jpg"
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