import React from 'react'
import { motion } from 'framer-motion'
import { btnVariants } from '../framerVariants'


const Button = ({ styles }) => {
  return (
    <motion.button 
      variants={btnVariants} whileHover='hover'
      type='button' 
      className={`py-4 px-6 bg-blue-gradient 
      font-poppins font-medium text-[18px] 
      text-primary outline-none rounded-[10px] ${styles}`}
    >
      Get Started
    </motion.button>
  )
}

export default Button