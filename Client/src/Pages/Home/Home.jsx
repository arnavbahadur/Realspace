// import React from 'react'
import Carousel from './Carousel'
import Popup from './MyModal'
import React, { useEffect } from 'react';
import MyModal from './MyModal';

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
    <MyModal/>
    </div>
  )
}

export default Home