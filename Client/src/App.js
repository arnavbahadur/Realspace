import './App.css';
// import { Route, Routes} from "react-router-dom";

import Header from './Universal/Header';
import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import Partner from './Pages/Ourpartners/Partner';
import Carousel from './Pages/Home/Carousel';
import Contact from './Pages/Contact/Contact';
import Faq from './Components/Faq/Faq';

function App() {
  return (
   <div className="app">
       {/* <Routes> */}
       <Header/>
       <Carousel/>
      <HouseBox/>
      <Partner/>
      <Contact/>
       <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
