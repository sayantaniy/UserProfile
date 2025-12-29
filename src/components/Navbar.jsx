import React from 'react'
import Searchbar from '../Navbar/Searchbar'
import Welcome from '../Navbar/Welcome'
import Clock from '../bodytop/clock'

const Navbar = () => {
  return (
    <div className="
      flex flex-col
      lg:flex-row
      justify-between
      items-center
      gap-4
    ">
      <Searchbar />
      <div className='lg:flex'>
      <Clock  />
      <Welcome />
      </div>
    </div>
  )
}

export default Navbar
