import './App.css';
// import { Route, Routes, useLocation } from "react-router-dom";

import Header from './Universal/Header';
import Footer from './Universal/Footer';
import Partner from './Pages/Ourpartners/Partner';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Partner/>
    </div>
  );
}

export default App;
