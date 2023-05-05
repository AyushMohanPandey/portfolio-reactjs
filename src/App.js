import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import SocialLinks from "./components/SocialLinks";
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
    </div>
  )
}

export default App