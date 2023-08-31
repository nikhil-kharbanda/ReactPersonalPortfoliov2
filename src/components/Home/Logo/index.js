import { useLayoutEffect, useRef } from 'react';
import LogoS from '../../../assets/images/logo-s.png';
import './index.scss';
import { motion } from 'framer-motion'
import styled from 'styled-components'

import Me from '../../../assets/images/bitmoji.png'



const Logo = () => {

  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

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