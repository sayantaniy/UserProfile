import React from 'react'

const Searchbar = () => {
  return (
    
      <div className='font-poppins flex flex-row lg:inline-flex items-center justify-between gap-5 px-4 py-2 m-7 text-lg font-medium bg-pink-200 rounded-full text-shadow-rose-900 c3 t5 b2 hover:bg-pink-300 shadow-lg shadow-pink-300/50 whitespace-nowrap'>

        <img src='https://i.pinimg.com/736x/10/4d/b3/104db3a3c97cbaeeb42f31062aa6f087.jpg'
        className='w-12 h-12 rounded-full object-cover flex self-start shadow-lg shadow-pink-300/50 border-2 border-c4-700' ></img>
        <h1 className='cursor-pointer  hover:scale-105 transform transition-transform duration-300 hover:underline'> Home </h1>
        <h1 className='cursor-pointer hover:scale-105 transform transition-transform duration-300 hover:underline '> Playlist</h1>
        <h1 className='cursor-pointer hover:scale-105 transform transition-transform duration-300 hover:underline'> Games </h1>
      </div>
    
  )
}

export default Searchbar
