/* src/components/Home/Logo/index.js */

import './index.scss';
import { motion, useReducedMotion } from 'framer-motion'
import Me from './Bitmoji.png'



const Logo = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <motion.div className='logo-container'>
        <motion.div>
          <motion.img
          className="avatar" src={Me} alt="ProfilePic"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", delay: 1, duration: 2, bounce: 0.75 }}/>
        </motion.div>
      </motion.div>

    </>
  )
}

export default Logo