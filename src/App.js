import React from 'react'
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills'

function App() {
  
  return (
    <>
    <div className="body">
      <div className="portfolio-box">
        <Intro/>
        <About/>
        <Skills/>
      </div>
    </div>
    </>
  );
}

export default App;
