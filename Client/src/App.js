import './App.css';
// import { Route, Routes, useLocation } from "react-router-dom";

import Header from './Universal/Header';
import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import Partners from './Pages/Ourpartners/Partner';
import Carousel from './Pages/Home/Carousel';
import Contact from './Pages/Contact/Contact';
import Filter from './Pages/Home/Filter';
function App() {
  return (
   <div className="app">
      
       {/* <Header/>
       <Carousel/>
      <HouseBox/>
      <Partners/>
      <Contact/>
      <Footer/> */}
      <Filter/>
    </div>
  );
}

export default App;
