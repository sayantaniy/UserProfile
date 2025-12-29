import React from 'react'
import { motion } from "motion/react"

const Techstack = () => {
  const items = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", 
    "Redux", "NodeJS", "Express"
  ]

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="font-bold font-comic text-4xl sm:text-5xl t4 underline mt-9 mb-5"
      >
        tech stack
      </motion.h1>

      <div className="flex flex-wrap gap-3 sm:gap-4 mt-7">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="font-dmserif px-4 py-1 rounded-3xl text-base sm:text-lg t2 c5"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Techstack
