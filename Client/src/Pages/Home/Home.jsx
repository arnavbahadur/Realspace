// import React from 'react'
import Carousel from './Carousel'
import Popup from './MyModal'
import React, { useEffect } from 'react';

setTimeout(() => {
  <Popup/>
}, 3000);
const Home = () => {
  useEffect(() => {
  const timer = setTimeout(() => {
    <Popup/>
  }, 1000);
  return () => clearTimeout(timer);
}, []);
  return (
    <div>
    <Carousel/>
    <Popup/>
    </div>
  )
}

export default Home