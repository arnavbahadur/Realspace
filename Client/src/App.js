import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Header from './Universal/Header';
import Footer from './Universal/Footer';
// import HouseBox from './Components/HouseBox/HouseBox';
import HousePreview from './Pages/HousePreview/HousePreview';
import Compare from './Pages/Compare/Compare';
import Contact from './Pages/Contact/Contact';
import Faq from './Components/Faq/Faq';
import Home from './Pages/Home/Home';
import Projectbox from './Components/Projectbox/Projectbox';
import Appointment from './Pages/Contact/Appointment/Appointment';
import MyModal from './Pages/Home/MyModal';
import Project from './Pages/Project/Project';
import About from './Pages/About/Ourteam/About';
import Morefloor from './Pages/Project/Morefloor';
import CurrentProject from './Pages/Current/CurrentProject';
import PreviousProject from './Pages/Previous/PreviousProject';


import Dropapp from './Pages/Home/Dropapp.jsx';
import HouseSale from './Pages/House/HouseSale';
import HouseRent from './Pages/House/HouseRent';
function App() {
  return (
   <div className="app">
       <Header/> 
         <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/compare" element={<Compare/>}/>
            <Route path="/project/:id" element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
            {/* <Route path="/houseBox" element={<HouseBox/>}/> */}
            <Route path="/housePreview/:id" element={<HousePreview/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/projectbox" element={<Projectbox/>}/>
            <Route path="/appointment" element={<Appointment/>}/>
            <Route path="/mymodal" element={<MyModal/>}/>
            <Route path='/housesale' element={<HouseSale/>}/>     
            <Route path='/houserent' element={<HouseRent/>}/>     
            <Route path="/mymodal" element={<MyModal/>}/>  
            <Route path="/viewmore" element={<Morefloor/>}/>   
            <Route path="/currentproject" element={<CurrentProject/>}/>   
            <Route path="/previousproject" element={<PreviousProject/>}/>   
            
        </Routes> 
        <Footer/>  
        {/* <Dropapp/> */}
    </div>
  );
}

export default App;
