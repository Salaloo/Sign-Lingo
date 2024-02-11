import { useState } from 'react'
import logo from '/SignLingo.png'

import './App.css'

function App() {
  return (
    <><img src={logo} className="logo"></img>
      <h1 className= "heading1">Learn American Sign Language</h1>
        <button className= "ABCs">ABCs</button>
        <button className= "ABCs">Basic Words</button>
        <button className= "ABCs">Colors</button>
        <button className= "ABCs">Travel</button>
        <button className= "ABCs">Cooking</button>
        <button className= "ABCs">Sports</button>
    </>
  )
}

export default App