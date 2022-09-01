import React from 'react' 
import { motion } from 'framer-motion'
import { cardDealImgVariants, textVariants } from '../framerVariants'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <motion.h2 variants={textVariants} initial='hidden' animate='visible' className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy steps.
        </motion.h2>
        <motion.p variants={textVariants} initial='hidden' animate='visible' className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. 
          Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, 
          ametau.
        </motion.p>

        <Button styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <motion.img 
          variants={cardDealImgVariants} initial='hidden' animate='visible'
          src={card} alt="card" 
          className='w-[100%] h-[100%]' 
        />
      </div>
    </section>
  )
}

export default CardDeal