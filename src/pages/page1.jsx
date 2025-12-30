import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Bodytop from '../components/bodytop'
import Herosec from '../components/herosec'
import Socials from '../components/socials'
import Freesp from '../components/freesp'

const App = ({onOpenModal}) => {

    

  return (
    <div className='min-h-screen c0'>
      <Navbar />
      <Bodytop />
      <Herosec onOpenModal={onOpenModal} />
      <Socials />
      <Freesp />

    </div>
  )
}

export default App
