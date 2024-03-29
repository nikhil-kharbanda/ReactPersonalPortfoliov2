import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { Edu } from '../data/EduData'
import EduComponents from '../subComponents/EduCard'
import { motion } from 'framer-motion'

const Education = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeout
    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const [height, setHeight] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight)
  }, []);

  return (
    <>
      <div className="container-edu edu-page">
        <div className="text-zone education-title" >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
              idx={10}
            />
          </h1>
          </div>
          {/* TODO: Add education cards */}
          <div className='box-edu'>
            <div ref={carousel} className='center-edu' whileTap={{ cursor: "grabbing" }} style={{ originX: 0.5 }}>
              <motion.div dragConstraints={{top: 10, bottom: -height - 150}} className='gridEdu'>
                {Edu.map((Proj) => {
                  return <EduComponents key={Proj.id} proj={Proj} />
                })}
              </motion.div>
          </div>
          {/* END TODO: Add education cards */}

        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Education