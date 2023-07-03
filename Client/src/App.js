import './App.css';
// import { Route, Routes} from "react-router-dom";

import Header from './Universal/Header';
import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import Partner from './Pages/Ourpartners/Partner';
import Carousel from './Pages/Home/Carousel';
import Contact from './Pages/Contact/Contact';
import Faq from './Components/Faq/Faq';
import Team from './Pages/Ourteam/Team';
import Compare from './Pages/Compare/Compare';
import HousePreview from './Pages/HousePreview/HousePreview';
import CompareSideBtn from './Components/CompareSideBtn/CompareSideBtn';

function App() {
  return (
   <div className="app">
       {/* <Routes> */}
       <Header/>
       <CompareSideBtn/>
       <Carousel/>
       <HouseBox/>
       <HousePreview/>
      <Compare/>
      <Partner/>
      <Contact/>
      {/* <Team/> */}
       <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
