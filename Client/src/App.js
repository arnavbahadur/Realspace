import './App.css';
// import { Route, Routes, useLocation } from "react-router-dom";

import Header from './Universal/Header';
// import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import HousePreview from './Pages/HousePreview/HousePreview';
function App() {
  return (
    <div className="App">
      <Header/>
      <HouseBox/>
      <HousePreview/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
