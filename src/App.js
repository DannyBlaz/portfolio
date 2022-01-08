import React from "react";
import Home from "./components/home.js";
import About from './components/about.js';
import Projects from './components/projects.js';
import ContactInfo from './components/contactInfo.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>About</button>
        <button>Projects</button>
        <button>Contact Info</button>
      </header>
      <main>
        <constant>
        
        </constant>
        <Home />
        <About />
        <Projects />
        <ContactInfo />
      </main>
    </div>
  );
}

export default App;