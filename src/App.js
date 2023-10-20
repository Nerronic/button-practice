import ParticlesBg from "particles-bg";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/AboutMe/aboutme";
import Home from "./Components/Home/Home.js";
import NavBar from "./Components/NavBar/Navbar";
import Projects from "./Components/Projects/projects";
import Videos from "./Components/Videos/Videos";


// renders the application
export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <ParticlesBg type="cobweb" color="purple" bg={true} />
        {/* <AboutMe/>
        <Videos/>
        <Projects/> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />}/>
          <Route path="/videos" element={<Videos />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </div>
    </Router>
  );
}
