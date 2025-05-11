import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Footer from "./component/Footer";
import Transportation from "./pages/Tranportation";
import Hotel from "./pages/Hotel";

function App() {
  return (
      <>
          <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/transportation" element={<Transportation />} />
                  <Route path="/hotel" element={<Hotel />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>

          <Footer/>
      </>
  );
}

export default App;
