import { useState } from 'react'
import logo from '/SignLingo.png'

import './App.css'
import ReactCardFlip from 'react-card-flip'

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  return (
    <><img src={logo} className="logo"></img>
      <h1 className= "heading1">Learn American Sign Language</h1>
        <button className= "ABCs">ABCs</button>
        <button className= "ABCs">Basic Words</button>
        <button className= "ABCs">Colors</button>
        <button className= "ABCs">Travel</button>
        <button className= "ABCs">Cooking</button>
        <button className= "ABCs">Sports</button>
        <div>
          <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
            <div className='card' onClick={flipCard}>
              <h1>Front</h1>
            </div>
            <div className='card card-back' onClick={flipCard}>
              <h1>Back</h1>
            </div>
          </ReactCardFlip>
        </div>
    </>
  )
}

export default App