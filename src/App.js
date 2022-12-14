import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";












import Navbar from "./components/Navbar"
import Homeslideshow from './components/Homeslideshow';
import Islamicscholars from './components/Islamicscholars';
import Footer from './components/Footer';
import Members from './components/Members';
import Aboutus from './components/Aboutus';
import Latestposts from './components/Latestposts';
import Scholarinfo from './components/Scholarinfo'
import Information from './components/Information'
import Allinfo from './components/Allinfo';
import Donation from './components/Donation';
import Cart from './components/Cart';
import Takeschedule from './components/Takeschedule';





function App() {


 





  return (
    <div className="App">
      <Navbar/>
  
      
       
  
      <Routes>
      <Route exact path="/islamic_scholars" element={<div><Islamicscholars/></div>} />

      <Route  path="/*" element={<div><Homeslideshow/><Members/><Aboutus/><Latestposts/></div>} />


      <Route  path="/islamic_scholars/*" element={<div><Scholarinfo/></div>} />

      <Route exact path="/Information" element={<div><Information/>  </div>} />
      <Route  path="/Information/*" element={<div><Allinfo/></div>} />

      <Route  path="/Donation" element={<div><Donation/></div>} />

      <Route  path="/cart" element={<div><Cart/></div>} />

      <Route  path="/islamic_scholars/take_schedule" element={<div><Takeschedule/></div>} />


      </Routes>
      
  


      <Footer/>
    </div>
  );
}

export default App;
