import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import Footer from "./components/footer";
import Resume from "./containers/Resume";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
