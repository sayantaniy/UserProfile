import React from 'react'
import { motion } from "motion/react"

const Welcome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className='lg:relative lg:right-1 lg:top-1 text-center flex flex-col items-start sm:items-center m-9'
    >

      <div className='flex flex-row font-patrick'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className='text-6xl font-google font-bold t5'
        >
          Welcome
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='flex font-comic t6 px-2 justify-baseline items-end'
        >
          to my
        </motion.h3>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='font-dmserif px-20 bg-red-100 c3 rounded-4xl'
      >
        userprofile
      </motion.h2>

    </motion.div>
  )
}

export default Welcome
