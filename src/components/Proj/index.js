import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'

import { Projects } from '../data/ProjectData'


const Proj = () => {
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

  return (

    
    <>
      <div className="container proj-page">
        <div className="text-zone">
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
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
                's'
              ]}
              idx={10}
            />
          </h1>

          {/* TODO: CARDS WITH PREV PROJECTS */}

          
        </div>
      </div>
    </>
  )
}

export default Proj
