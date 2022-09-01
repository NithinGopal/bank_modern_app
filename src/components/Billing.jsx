import React from 'react'
import { motion } from 'framer-motion'
import { billingImgVariants, textVariants } from '../framerVariants'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <motion.img 
          variants={billingImgVariants} initial='hidden' animate='visible'
          src={bill} alt="billing" 
          className='w-[100%] h-[100%] relative z-[5]' 
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      <div className={layout.sectionInfo}>
        <motion.h2 variants={textVariants} initial='hidden' animate='visible' className={styles.heading2}>
          Easily control your <br className='sm:block hidden' /> billing & invoicing. 
        </motion.h2>
        <motion.p variants={textVariants} initial='hidden' animate='visible' className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. 
          Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </motion.p>

        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img 
            src={apple} 
            alt="apple_play" 
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />

          <img 
            src={google} 
            alt="google_play" 
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
        </div>
      </div>
    </section>
  )
}

export default Billing