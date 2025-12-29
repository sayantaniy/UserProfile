import React from 'react'
import Navbar from './components/Navbar.jsx'
import Socials from './components/socials.jsx'
import Herosec from './components/herosec.jsx'
import Freesp from './components/freesp.jsx'

const App = () => {
  return (
    <div className='min-h-screen c0'>
      <Navbar />
      
      <Herosec />
      <Socials />
      <Freesp />

    </div>
  )
}

export default App
