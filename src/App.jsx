import './App.css';
import Lenis from 'lenis'
import { useState, useEffect } from 'react'

import Image1 from './imgs/circles1.gif'
import Image2 from './imgs/circles3.gif'
import Image3 from './imgs/squares1.gif'
import Image4 from './imgs/circles2.gif'
import Image5 from './imgs/circles4.gif'



function App() {

  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2 - 150,
    y: window.innerHeight / 2 - 200,
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

  const imgs = [
    {
      img: Image1,
      imgNum: "comp1"
    },
    {
      img: Image2,
      imgNum: "comp2"
    },
    {
      img: Image3,
      imgNum: "comp3"
    },
    {
      img: Image4,
      imgNum: "comp4"
    },
    {
      img: Image5,
      imgNum: "comp5"
    }
  ]

  return (
    <div className="App">
      <div className="header">
        <h1>p5.js EXPLORATIONS</h1>
        {/* <h1 onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{paddingLeft: 150, paddingBottom: 150}}>ABOUT</h1> */}
      </div>

      {imgs.map(({img, imgNum}) => {
        return <div className={imgNum} key={imgNum}>
        <div className="img-container" style={{top: mousePos.y, left: mousePos.x}}>
          <img src={img} alt={img} />
        </div>
      </div>
      })}


      <div className="comp-last">
        <div className="info-container" style={{top: mousePos.y, left: mousePos.x}}>
          <div>All images created by Boy Tillekens using a JavaScript library called p5.js</div>
        </div>
      </div>

    </div>
  );
}

export default App;
