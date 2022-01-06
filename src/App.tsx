import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
