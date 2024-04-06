import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Sobre from './Components/Sobre/Sobre'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
const App = () => {
  return (
    <div>
      
    <Navbar/>
    <Hero/>
  <Sobre/>
  <Services/>
  <MyWork/>
    </div>
  )
}

export default App