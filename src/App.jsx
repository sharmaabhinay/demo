import React from 'react'
import Navbar from './compnents/Navbar'
import Hero from './compnents/Hero'
import Skills from './compnents/Skills'
import Hobbies from './compnents/Hobbies'
import Passion from './compnents/Passion'
import Academinc from './compnents/Academinc'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Skills/>
      <Hobbies />
      <Passion/>
      <Academinc/>
    </div>
  )
}

export default App