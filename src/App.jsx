import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero"
import HeroCard from "./components/HeroCard"
import About from "./components/About"
import Price from "./components/Price"
import Testimonials from "./components/Testimonials"
import Gallery from "./components/Gallery"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import Programs from "./components/programs"
import Plans from "./components/Plans"

import Help from "./components/Help"
import { Link } from 'react-router-dom';

// import JoinUs from "./components/JoinUs"
function App() {
  

  return (
<>
{/* <Router>
      <Navbar />
      <Routes>
   
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Price" element={<Price />} />
        <Route path="/About" element={<About />} />
     
        <Route path="/Subscribe" element={<Subscribe/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router> */}
   <Router>
      <div>
        <Navbar>
          <ul>
            {/* Main Navigation Links */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/plans">Plans</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            {/* Additional Links */}
            <li>
              <Link to="/help">Help</Link>
            </li>
            {/* <li>
              <Link to="/join-us">Join Us</Link>
            </li> */}
            {/* <li>
              <Link to="/dashboard">Dashboard</Link>
            </li> */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          {/* <Route path="/join-us" element={<JoinUs />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
        <Hero />
      <HeroCard />
      <About/>
      <Gallery/>
      <Price/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
      
      </>
  )
}

export default App;
