import React from 'react'
import Weather from '../bodytop/weather'
import Bday from '../bodytop/bday'
import Clock from '../bodytop/clock'

const bodytop = () => {
  return (
    <div className='flex justify-around lg:justify-start'>
      <Weather />
      <Bday />
      
    </div>
  )
}

export default bodytop
