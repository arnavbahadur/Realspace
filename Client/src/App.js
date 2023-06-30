import './App.css';
// import { Route, Routes, useLocation } from "react-router-dom";

import Header from './Universal/Header';
import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import Partners from './Pages/Ourpartners/Partner';
import Dropdown from './Pages/Home/Filter';
function App() {
  return (
    <div className="App">
      {/* <Header/>
      <HouseBox/>
      <Partners/> */}
      <Footer/>
      {/* <Dropdown placeHolder="Select..." /> */}
    </div>
  );
}

export default App;
