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
              src="https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/107457.Ahmedabad--Luxury-bungalow-owners-of-50-hectare-scheme-to-get-BU-node-after-a-decade-2.jpg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1677782975062-56111703e90e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://assets.architecturaldigest.in/photos/6008380ce6e1f64740188ef1/16:9/w_2560%2Cc_limit/new-delhi-house-of-greens-featured-image-1366x768.jpg "
              className="carousel-img d-block w-100 "
              height={"369px"}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://ashwinarchitects.com/3/wp-content/uploads/2020/06/60x40-plot-residence-bungalow-designs-india.jpg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
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