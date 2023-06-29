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
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/masala.jpeg"
              className="carousel-img d-block w-100 "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://muehlenchemie.com/wp-content/uploads/2022/06/mehl-basis3022_quer_blau_header-2-2500x1133.jpg"
              className="carousel-img d-block w-100 "
              height={"369px"}
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