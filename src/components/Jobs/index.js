import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { PrevJobsData } from '../data/PrevJobsData'
import JobsCard from '../subComponents/JobsCard'
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
      <div className="container-jobs jobs-page">
        <div className="text-zone jobs-title" >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'P','r','e','v','i','o','u','s',' ' ,'J','o','b','s']}
              idx={10}
            />
          </h1>
          </div>
          {/* TODO: Add education cards */}
          <div className='box-jobs'>
            <div ref={carousel} className='center-jobs' whileTap={{ cursor: "grabbing" }} style={{ originX: 0.5 }}>
              <motion.div dragConstraints={{top: 10, bottom: -height - 150}} className='gridJobs'>
                {PrevJobsData.map((Proj) => {
                  return <JobsCard key={Proj.id} proj={Proj} />
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