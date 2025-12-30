import React from "react";
import { motion, AnimatePresence } from "motion/react";

/* ---------------- DATA ---------------- */

const astroProfile = {
  rising: {
    heading: "Rising Sign: Leo",
    sign: "Leo",
    element: "Fire",
    rulingPlanet: "Sun",
    keywords: ["Charismatic", "Confident", "Expressive", "Warm"],
    description:
      "Sayantani’s rising sign is Leo, which suggests a naturally warm and expressive presence. She may come across as confident and approachable, often leaving a positive impression on those around her. There is a quiet sense of leadership in the way she carries herself, paired with creativity and openness. Even if she feels reserved at times, others may still perceive a calm self-assurance. This placement is often associated with authenticity and a desire to grow into one’s individuality, allowing her to connect with others in a sincere and thoughtful way."
  },

  sun: {
    heading: "Sun Sign: Virgo",
    sign: "Virgo",
    element: "Earth",
    rulingPlanet: "Mercury",
    keywords: ["Analytical", "Practical", "Thoughtful", "Detail-oriented"],
    description:
      "Sayantani’s sun sign is Virgo, shaping the core of who she is. At heart, she is observant, intelligent, and deeply thoughtful, always analyzing her surroundings and herself. Virgo energy gives her a strong sense of responsibility and a desire to improve everything she touches — whether it’s her skills, her work, or the people she cares about. She values precision and clarity, often holding herself to very high standards. Though she may be self-critical at times, this placement also makes her incredibly reliable, grounded, and quietly powerful."
  },

  moon: {
    heading: "Moon Sign: Pisces",
    sign: "Pisces",
    element: "Water",
    rulingPlanet: "Neptune",
    keywords: ["Empathetic", "Intuitive", "Emotional", "Dreamy"],
    description:
      "Sayantani’s moon is in Pisces, revealing a deeply sensitive and emotionally rich inner world. Beneath her composed exterior lies a heart that feels everything intensely. This placement gives her strong intuition, empathy, and a natural ability to understand emotions without words. She may often retreat into imagination or introspection to process her feelings. Pisces moon brings compassion, softness, and emotional depth, allowing her to connect deeply with others and see beauty beyond the surface."
  },

  mbti: {
    heading: "MBTI Type: INTJ",
    type: "The Architect",
    keywords: ["Strategic", "Independent", "Visionary", "Logical"],
    description:
      "Sayantani is an INTJ, meaning she approaches life with strategy, depth, and long-term vision. She prefers understanding systems rather than following them blindly and thrives when working toward meaningful goals. INTJs are known for their sharp intellect and planning abilities, and she likely thinks several steps ahead at all times. Though reserved, she values honesty, competence, and efficiency, forming deep connections only when there is intellectual or emotional alignment."
  }
};

/* ---------------- MODAL ---------------- */

const Modal = ({ title, onClose }) => {
  const content = astroProfile[title];
  if (!content) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="rounded-2xl glass shadow-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto p-20 border c1 b1"
          initial={{ scale: 0.9, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h2
            className="font-bold font-comic text-5xl t4 lowercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {content.heading}
          </motion.h2>

          {/* Meta Info */}
          <motion.div
            className="flex flex-wrap gap-4 text-sm font-patrick mt-5 t5 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {content.sign && <span>Sign: {content.sign}</span>}
            {content.element && <span>Element: {content.element}</span>}
            {content.rulingPlanet && (
              <span>Ruler: {content.rulingPlanet}</span>
            )}
            {content.type && <span>{content.type}</span>}
          </motion.div>

          {/* Keywords */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {content.keywords.map((word, idx) => (
              <motion.span
                key={idx}
                className="font-dmserif px-4 py-1 rounded-3xl text-sm t2 c5"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="font-dmserif lg:text-lg t6 mt-5 mix-blend"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {content.description}
          </motion.p>

          {/* Close Button */}
          <div className="flex justify-end">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="px-5 py-2 font-patrick mt-5 t5 c4 b5 mb-6 rounded-lg font-semibold cursor-pointer touch-manipulation select-none"
              style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent', userSelect: 'none' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
