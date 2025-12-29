import React from 'react'

const card = () => {
  return (
    <div className='flex flex-col
  w-full lg:w-1/3
  rounded-4xl
  p-5 sm:p-7
  m-3 sm:m-5
  c6 b2
  items-center justify-center'>
    
        <div className="
  m-2
  c5
  h-56 w-56 sm:h-72 sm:w-72
  rounded-full
  overflow-hidden
  flex items-center justify-center
  shadow-lg shadow-pink-300/50
">

      <img className='rounded-full h-9/10 w-9/10 object-cover  b4'
      src='https://i.pinimg.com/736x/10/4d/b3/104db3a3c97cbaeeb42f31062aa6f087.jpg' ></img>
        </div>
        
        <div className='flex gap-3'>
          <div id='rising' className='bg-amber-500 rounded-full b4'
          >
            <img className='rounded-full h-7 w-7 object-cover  b4'
      src='https://i.pinimg.com/736x/c1/c2/43/c1c243e0c05b608b40f9c555ad05be0e.jpg' ></img>
          </div>

          <div id='moonsign' className='bg-pink-400 b4 rounded-full '>
            <img className='rounded-full h-7 w-7 object-cover b4'
      src='https://i.pinimg.com/736x/e5/69/47/e56947ee8299bdb266d90c2e3c8f592c.jpg' ></img>
            </div>


          <div id='sunsign' className='bg-amber-950 b4 rounded-full '>
            <img className='rounded-full h-7 w-7 object-cover  b4'
      src='https://i.pinimg.com/736x/91/3c/de/913cde2fba66f906bc1512603df28029.jpg' ></img>
            </div>
        </div>

        <div className='font-bold px-3 py-2 mt-2 bg-amber-800 rounded-2xl font-patrick t5 c3'>INTJ</div>

        </div>
    
  )
}

export default card
