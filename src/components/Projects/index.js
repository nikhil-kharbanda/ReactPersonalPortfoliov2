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

const Projects = () => {
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
    console.log("carousel = ", carousel.current)
    console.log("scrollWidth = ", carousel.current.scrollWidth);
    console.log("offsetWidth = ", carousel.current.offsetWidth);
    console.log("carousel.current.scrollWidth - carousel.current.offsetWidth = ", carousel.current.scrollWidth - carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth + 120)
  }, []);

  return (
    <>
      <div className="container proj-page">
        <div className="text-zone project-title" >
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
          <h2 className='proj-instruct'>Here, you can see a few samples of my full-stack development work. At the bottom of each card, you can see the demo of the site, and the Git repo</h2>
          <h2 className='proj-instruct'>To scroll through the cards, drag within the red box.</h2>
        </div>



        {/* TODO: CARDS WITH PREV PROJECTS */}

        <div className='project-display'>
          <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }} style={{ originX: 0.5 }} variants={transitionEffect}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-project-display' variants={transitionEffect}>
              {Proj.map(wd => {
                return (
                  <motion.div className='item' key={wd.id}>
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
      <Loader type="ball-grid-pulse" />

    </>

  )
}

export default Projects
