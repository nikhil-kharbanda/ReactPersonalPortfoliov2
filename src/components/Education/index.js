import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import {Qual} from '../data/QualData'
import QualComponents from '../subComponents/QualCard'

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

  return (
    <>
      <div className="container proj-page">
        <div className="text-zone project-title" >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
              idx={10}
            />
          </h1>
          {/* TODO: Add education cards */}
        </div>
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Education