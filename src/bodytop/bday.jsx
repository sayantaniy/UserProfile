import React from "react";
import { motion } from "framer-motion";

const Bday = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="c6 t5 rounded-full font-dmserif flex justify-center items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 m-4 w-64 text-center tracking-widest"
    >
      28.09.2004
    </motion.div>
  );
};

export default Bday;
