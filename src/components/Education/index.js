/* src/components/Education/index.js */

import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { Edu } from '../data/EduData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faExternalLinkAlt, faCertificate } from '@fortawesome/free-solid-svg-icons'

const Education = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    let timeout
    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <>
      <div className="container-edu edu-page">
        {/* Title at the very top */}
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
              idx={10}
            />
          </h1>
        </div>

        {/* Accordion items below title */}
        <div className="education-accordion-container">
          {Edu.map((item, index) => (
            <div
              key={item.id}
              className={`accordion-item ${expandedId === item.id ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Accordion Header */}
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="header-left">
                  <div className="item-number">{String(item.id).padStart(2, '0')}</div>
                  <h2 className="item-title">{item.name}</h2>
                </div>
                <div className="header-right">
                  <FontAwesomeIcon
                    icon={expandedId === item.id ? faChevronUp : faChevronDown}
                    className="accordion-icon"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div className={`accordion-content ${expandedId === item.id ? 'show' : ''}`}>
                <div className="content-wrapper">
                  <div className="content-left">
                    <div className="image-container">
                      <img src={item.imgSrc} alt={item.name} />
                      <div className="image-overlay">
                        <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="content-right">
                    <div className="description">
                      {item.description.map((desc, i) => (
                        <p key={i}>{desc}</p>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Education