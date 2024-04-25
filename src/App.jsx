import './App.css';
import Lenis from 'lenis'
import { useState, useEffect } from 'react'

import Image1 from './imgs/circles1.gif'
import Image2 from './imgs/squares2.gif'
import Image3 from './imgs/circles2.gif'


function App() {

  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX -200,
        y: e.clientY -150
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  })

  const [showAbout, setShowAbout] = useState(false)

  const mouseEnter = () => {
    setShowAbout(true);
  }

  const mouseLeave = () => {
    setShowAbout(false);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>p5.js Explorations</h1>
        <h1 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{paddingLeft: 150, paddingBottom: 150}}>About</h1>
      </div>

      <div className="comp1">
        {!showAbout && (
          <div className="img-container" style={{top: mousePos.y, left: mousePos.x}}>
            <img src={Image1} alt="img1" />
          </div>
        )}
      </div>

      <div className="comp2">
        <div className="img-container" style={{top: mousePos.y, left: mousePos.x}}>
          <img src={Image2} alt="img1" />
        </div>
      </div>

      <div className="comp3">
        <div className="img-container" style={{top: mousePos.y, left: mousePos.x}}>
          <img src={Image3} alt="img1" />
        </div>
      </div>

    </div>
  );
}

export default App;
