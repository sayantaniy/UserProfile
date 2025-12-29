import React from 'react'
import { motion } from "motion/react"
import Techstack from './techstack'

const basicinfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col rounded-3xl p-6 sm:p-10 m-4 sm:m-8 c1 b1"
    >
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='font-bold font-comic text-5xl t4 underline'
      >
        basic info
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='font-dmserif lg:text-lg t6 mt-5'
      >
        an enthusiastic and curious individual from India who enjoys exploring technology, programming, and creative projects, has a keen interest in building interactive web applications. Sayantani is detail-oriented and enjoys learning new skills, often experimenting with design, animations, and project development. Her approach combines both creativity and technical precision, reflecting a thoughtful and innovative mindset.
      </motion.p>
      
     
     <Techstack />
      
      
    </motion.div>

    
  )
}

export default basicinfo
