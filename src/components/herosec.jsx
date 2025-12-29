import React from 'react'
import Basicinfo from '../hero section/basicinfo'
import Card from '../hero section/card'


const herosec = () => {
  return (
    <div className='flex flex-col lg:flex-row  px-4 justify-between items-center'>
      <Basicinfo />
      <Card />
    </div>
  )
}

export default herosec
