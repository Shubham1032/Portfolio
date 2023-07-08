import React from 'react'
import Navbar_first from './Navbar/Navbar_first'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Education from './Components/Education'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div>
      <Navbar_first/>
      <Home/>
      <AboutMe/>
      <Education/>
      <Projects/>
    </div>
  )
}

export default App