import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> 
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Certificates />
    <Contact />
    </div>
  );
}

export default App;