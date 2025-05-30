import { useState } from 'react'
import './App.css'
import React from 'react'
import Contactus from './pages/ContactUs'
import Form from './pages/Form'
import Whychoose from './pages/Whychoose'
import Menu from './pages/Menu'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import WorkProcess from './pages/WorkProcess'
import Locations from './pages/Locations'
import BranchLocations from './pages/Branch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/> 
    </>
  )
}

export default App
