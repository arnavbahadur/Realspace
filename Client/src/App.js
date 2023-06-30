import './App.css';
// import { Route, Routes, useLocation } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Universal/Header';
// import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import Partners from './Pages/Ourpartners/Partner';
import Carousel from './Pages/Home/Carousel';
import Faq from './Components/Faq/Faq';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <HouseBox/>
      {/* <Partners/> */}
      <Faq/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
