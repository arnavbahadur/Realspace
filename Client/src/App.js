import './App.css';
import { Route, Routes} from "react-router-dom";
import Header from './Universal/Header';
import Footer from './Universal/Footer';
import HouseBox from './Components/HouseBox/HouseBox';
import HousePreview from './Pages/HousePreview/HousePreview';
import Compare from './Pages/Compare/Compare';
import Partner from './Pages/Ourpartners/Partner';
// import Carousel from './Pages/Home/Carousel';
import Contact from './Pages/Contact/Contact';
import Faq from './Components/Faq/Faq';
import Team from './Pages/Ourteam/Team';
import Home from './Pages/Home/Home';


function App() {
  return (
   <div className="app">
       <Header/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/compare" element={<Compare/>}/>
            <Route path="/partner" element={<Partner/>}/>
            <Route path="/houseBox" element={<HouseBox/>}/>
            <Route path="/housePreview" element={<HousePreview/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/team" element={<Team/>}/>
        </Routes>
        <Footer/>
       
        
    </div>
  );
}

export default App;
