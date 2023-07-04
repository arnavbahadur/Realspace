import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Header from './Universal/Header';
import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import HousePreview from './Pages/HousePreview/HousePreview';
import Compare from './Pages/Compare/Compare';
// import Partner from './Pages/Ourpartners/Partner';
// import Carousel from './Pages/Home/Carousel';
import Contact from './Pages/Contact/Contact';
import Faq from './Components/Faq/Faq';
import Team from './Pages/Ourteam/Team';
import Home from './Pages/Home/Home';
import Projectbox from './Components/Projectbox/Projectbox';
import Filter from './Pages/Home/Filter.jsx';
import Appointment from './Pages/Appointment/Appointment';
import MyModal from './Pages/Home/MyModal';
import Project from './Pages/Projects/Project';
function App() {
  return (
   <div className="app">
       <Header/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/compare" element={<Compare/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/houseBox" element={<HouseBox/>}/>
            <Route path="/housePreview" element={<HousePreview/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/team" element={<Team/>}/>
            <Route path="/projectbox" element={<Projectbox/>}/>
            <Route path="/filter" element={<Filter/>}/>
            <Route path="/appointment" element={<Appointment/>}/>
            <Route path="/mymodal" element={<MyModal/>}/>
          
        </Routes>
        <Footer/>
       
        
    </div>
  );
}

export default App;
