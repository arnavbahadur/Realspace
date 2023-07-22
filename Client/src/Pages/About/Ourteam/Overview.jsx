import React from 'react'
import './Overview.css'
import { NavLink } from 'react-router-dom'
function Overview() {
  return (
    <div className="Overview-main">
        <h1 className="Overview-heading">Overview</h1>
      <h3 className="about-heading">About us</h3>
      <p>At Realspace Group, we are passionate about helping you find your dream property or sell your current one with ease. As a leading real estate platform, we strive to provide a seamless and personalized experience for all our valued clients.
      </p>
      <h3 className="about-heading">Our Mission:</h3>
    <p>Our mission is to be your trusted partner in the real estate journey, whether you're a first-time homebuyer, a seasoned investor, or a seller looking to make the most of your property. We aim to simplify the process, offer expert guidance, and ensure that you have access to the best resources to make informed decisions.</p>
    <h3 className="about-heading">What Sets Us Apart:</h3>
   <ol>
    <li>Expertise: Our team of experienced and licensed real estate professionals is dedicated to understanding your unique needs and preferences. With a wealth of market knowledge and insights, we offer sound advice and support throughout the entire process.</li>
    <li>Vast Listings: We take pride in curating an extensive and up-to-date database of residential and commercial properties. Whether you're looking for a cozy home, a luxury estate, a rental property, or a commercial space, you'll find a diverse range of options to choose from.</li>
    <li>User-Friendly Platform: Our website is designed with you in mind. The user-friendly interface allows for seamless navigation and quick property searches, making it easy for you to find the right property that matches your criteria.</li>
    <li>Local Market Focus: We have a deep understanding of the local real estate market and stay up-to-date with the latest trends and developments. This knowledge allows us to provide valuable insights and guidance tailored to your specific location.</li>
    <li>Transparent Transactions: We believe in building trust and maintaining transparency in all our dealings. Whether it's about property prices, negotiations, or documentation, you can count on us for honesty and clarity.</li>
   </ol>
    
   <h3 className="about-heading">Our Services:</h3>
   
    <li>Buying: Whether you're a first-time homebuyer or an experienced investor, we'll assist you in finding the perfect property that suits your needs and budget.</li>
    <li>Selling: If you're looking to sell your property, we'll help you market it effectively, attract qualified buyers, and secure the best possible deal.</li>
    <li>Renting: For tenants, we offer a wide selection of rental properties, and for landlords, we help you find reliable tenants and manage your rental property efficiently.</li>

    <h3 className="about-heading">Contact Us:</h3>
    <p>We invite you to explore our website and discover the vast array of properties available. Should you have any questions or need assistance, don't hesitate to reach out to our friendly team. We look forward to being a part of your real estate journey and helping you achieve your property goals.</p>
    
    <NavLink to="/contact">
    <button className="overview-button">Contact Us</button>
    </NavLink>

    <p>Thank you for choosing Realspace Group , where your real estate dreams come to life!</p>
    
    </div>
  )
}

export default Overview
