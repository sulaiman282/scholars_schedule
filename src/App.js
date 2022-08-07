import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar"
import Homeslideshow from './components/Homeslideshow';
import Islamicscholars from './components/Islamicscholars';
import Footer from './components/Footer';
import Homeinfo1 from './components/Homeinfo1';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
      <Route exact path="/islamic_scholars" element={<div><Islamicscholars/></div>} />

      <Route  path="/*" element={<div><Homeslideshow/><Homeinfo1/></div>} />

      </Routes>
      
  


      <Footer/>
    </div>
  );
}

export default App;
