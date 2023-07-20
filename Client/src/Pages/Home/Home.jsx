import Carousel from './Carousel'
import Popup from './MyModal'
import React, { useContext, useEffect } from 'react';
import MyModal from './MyModal';
import Ourpartners from './Ourpartners/Partner'
import Filter from './Filter';
import Feature from './HomeProjects/Feature';
// import Featured from './Featured/featured';
import HouseSale from './HouseSale/HouseSale';
import HouseRent from './HouseRent/HouseRent';
import CompareSideBtn from '../../Components/CompareSideBtn/CompareSideBtn';
setTimeout(() => {
  <Popup/>
}, 3000);
const Home = (props) => {

  useEffect(() => {
  const timer = setTimeout(() => {
    <Popup/>
  }, 1000);
  return () => clearTimeout(timer);
}, []);
  return (
    <div>
      <CompareSideBtn Count={props.Count} setCount={props.setCount}/>
    <Carousel/>
    <Filter/>
    <Feature/>
    {/* <Featured/> */}
    {/* <MyModal/> */}
    <HouseSale/>
    <HouseRent/>
    <Ourpartners/>
   
    </div>
  )
}

export default Home