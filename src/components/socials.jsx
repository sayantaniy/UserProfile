import React from 'react'
import { motion } from "motion/react"
import { House, Github, Linkedin, Mail } from 'lucide-react'

const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50"
    >
      <div className="flex items-center gap-6 sm:gap-10 
                      rounded-full px-6 py-4
                      b1 c3 t5">

        <motion.a whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }} href=''>
          <House className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.a>

        <motion.a whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }} href='https://github.com/sayantaniy'>
          <Github className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.a>

        <motion.a whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }} href='https://www.linkedin.com/in/sayantani-manna-32852a32a/'>
          <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.a>

        <motion.a whileHover={{ scale: 1.15 }} transition={{ duration: 0.2 }} href='https://mail.google.com/mail/?view=cm&fs=1&to=sayantanimanna139@gmail.com'>
          <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.a>

      </div>
    </motion.div>
  )
}

export default Socials
