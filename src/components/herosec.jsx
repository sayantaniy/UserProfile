import React from 'react'
import Basicinfo from '../hero section/basicinfo'
import Card from '../hero section/card'


const Herosec = ({onOpenModal}) => {
  return (
    <div className='flex flex-col lg:flex-row  px-4 gap-5 justify-between items-center'>
      <Basicinfo />
      <Card onOpenModal={onOpenModal} />
    </div>
  )
}

export default Herosec
