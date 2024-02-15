import React from 'react'
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer';
import './index.css'

function App() {

  return (
    <>
    <div className="body">
      <div className="portfolio-box">
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App
