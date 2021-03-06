import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home.js";
import About from './components/about.js';
import Projects from './components/projects.js';
import ContactInfo from './components/contactInfo.js';
import Navbar from './components/navbar.js';
import Carousel from "./components/carousel.js";
import './App.css';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel />
      <main>
        <Home />
        <card>
          <About />
          <Projects />
          <ContactInfo />
        </card>
      </main>
    </div>
  );
}

export default App;
