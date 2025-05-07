import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Destinations from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./pages/About";
import Blog from "./pages/Blog";
import {Container} from "@mui/material";

function App() {
  return (
      <>
          <Navbar />
          <Hero />
          <Container>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/destination" element={<Destinations />} />
                  <Route path="/hotel" element={<Destinations />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </Container>
      </>
  );
}

export default App;
