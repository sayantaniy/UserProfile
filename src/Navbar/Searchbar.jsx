import React from 'react'
import { motion } from "motion/react"
import { Moon } from 'lucide-react';

const Searchbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className='font-poppins flex flex-row lg:inline-flex items-center justify-between gap-5 px-4 py-2 m-7 text-lg font-medium bg-pink-200 rounded-full text-shadow-rose-900 c3 t5 b2 hover:bg-pink-300 shadow-lg shadow-pink-300/50 whitespace-nowrap'
    >

      <motion.img
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        src='https://i.pinimg.com/736x/10/4d/b3/104db3a3c97cbaeeb42f31062aa6f087.jpg'
        className='w-12 h-12 rounded-full object-cover flex self-start shadow-lg shadow-pink-300/50 border-2 border-c4-700'
      />

      <motion.h1 whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
        <motion.p
        className='px-4 flex tracking-wider'
        >SAYANTANI  MANNA <span className='pl-4'> <Moon strokeWidth={1.5} />  </span></motion.p>
      </motion.h1>

      

    </motion.div>
  )
}

export default Searchbar
