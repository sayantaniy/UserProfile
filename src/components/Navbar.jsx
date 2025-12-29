import React from 'react'
import Searchbar from '../Navbar/Searchbar'
import Welcome from '../Navbar/Welcome'

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
      <Welcome />
    </div>
  )
}

export default Navbar
