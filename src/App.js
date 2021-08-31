import React from 'react'
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills'
import Projects from './components/Projects'

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
    </div>
    </>
  );
}

export default App;
