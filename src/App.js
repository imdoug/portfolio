import React from 'react'
import Intro from './components/Intro';
import About from './components/About';

function App() {
  return (
    <>
    <div className="body">
      <div className="portfolio-box">
        <Intro/>
        <About/>
      </div>
    </div>
    </>
  );
}

export default App;
