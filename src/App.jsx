
import './App.css'
import About from "./components/About"
import Intro from "./components/Intro"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"


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
  )
}

export default App
