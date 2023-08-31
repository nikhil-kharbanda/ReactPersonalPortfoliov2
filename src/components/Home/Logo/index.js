import './index.scss';
import { motion } from 'framer-motion'
import Me from '../../../assets/images/Bitmoji.png'



const Logo = () => {
  return (
    <>
      <motion.div className='logo-container'>
        <motion.div>
          <motion.img 
          className="avatar" src={Me} alt="ProfilePic" initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 1, duration: 2, bounce: 0.75 }}/>
        </motion.div>
      </motion.div>

    </>
  )
}

export default Logo