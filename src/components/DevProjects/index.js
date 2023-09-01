import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'

import { Proj } from '../data/ProjectData'
import { motion } from 'framer-motion'
import Card from '../subComponents/Card'

const transitionEffect = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

const DevProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    let timeout
    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 120)
  }, []);

  return (
    <>
      <div className="container-devProj devproj-page">
        <div className="text-zone devproj-title" >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'P',
                'r',
                'e',
                'v',
                'i',
                'o',
                'u',
                's',
                ' ',
                'P', 
                'r', 
                'o', 
                'j', 
                'e', 
                'c', 
                't', 
                's'
              ]}
              idx={10}
            />
          </h1>
          <h2 className='devproj-instruct'>Here, you can see a few samples of my full-stack development work. At the bottom of each card, you can see the demo of the site, and the Git repo</h2>
          <h2 className='devproj-instruct'>To scroll through the cards, drag within the red box.</h2>
        </div>



        {/* TODO: CARDS WITH PREV PROJECTS */}

        <div className='devproj-display'>
          <motion.div ref={carousel} className='carousel-devproj' whileTap={{ cursor: "grabbing" }} style={{ originX: 0.5 }} variants={transitionEffect}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-project-display-devproj' variants={transitionEffect}>
              {Proj.map(wd => {
                return (
                  <motion.div className='item-devproj' key={wd.id}>
                    <Card key={wd.id}
                      data={wd}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Loader type="pacman" />

    </>

  )
}

export default DevProjects
