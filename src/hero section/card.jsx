import React from 'react'
import { motion } from "motion/react"

const card = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className='flex flex-col
      w-full lg:w-1/3
      rounded-4xl
      p-5 sm:p-7
      m-3 sm:m-5
      c6 b2
      items-center justify-center'
    >
    
      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="
          m-2
          c5
          h-56 w-56 sm:h-72 sm:w-72
          rounded-full
          overflow-hidden
          flex items-center justify-center
          shadow-lg shadow-pink-300/50
        "
      >
        <img
          className='rounded-full h-9/10 w-9/10 object-cover b4'
          src='https://i.pinimg.com/736x/10/4d/b3/104db3a3c97cbaeeb42f31062aa6f087.jpg'
        />
      </motion.div>
        
      {/* Zodiac icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className='flex gap-3'
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          id='rising'
          className='bg-amber-500 rounded-full b4'
        >
          <img
            className='rounded-full h-7 w-7 object-cover b4'
            src='https://i.pinimg.com/736x/c1/c2/43/c1c243e0c05b608b40f9c555ad05be0e.jpg'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15, rotate: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          id='moonsign'
          className='b4 rounded-full'
        >
          <img
            className='rounded-full h-7 w-7 object-cover b4'
            src='https://i.pinimg.com/736x/e5/69/47/e56947ee8299bdb266d90c2e3c8f592c.jpg'
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          id='sunsign'
          className='bg-amber-950 b4 rounded-full'
        >
          <img
            className='rounded-full h-7 w-7 object-cover b4'
            src='https://i.pinimg.com/736x/91/3c/de/913cde2fba66f906bc1512603df28029.jpg'
          />
        </motion.div>
      </motion.div>

      {/* Personality badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        className='font-bold px-3 py-2 mt-2 bg-amber-800 rounded-2xl font-patrick t5 c3 '
      >
        INTJ
      </motion.div>

      

    </motion.div>
  )
}

export default card
