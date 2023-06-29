import './App.css';
// import { Route, Routes, useLocation } from "react-router-dom";

import Header from './Universal/Header';
// import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import Partners from './Pages/Ourpartners/Partner';
import Carousel from './Pages/Home/Carousel';
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <HouseBox/>
      <Partners/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
