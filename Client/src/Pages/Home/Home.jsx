// import React from 'react'
import Carousel from './Carousel'
import Popup from './MyModal'
import React, { useEffect } from 'react';
// import MyModal from './MyModal';
import Ourpartners from './Ourpartners/Partner'
import Filter from './Filter'
import Feature from './Ourfeature/Feature';
import Featured from './Featured/featured'
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
    <Filter/>
    {/* <Feature/> */}
    <Featured/>
    {/* <MyModal/> */}
    <Ourpartners/>
   
    </div>
  )
}

export default Home