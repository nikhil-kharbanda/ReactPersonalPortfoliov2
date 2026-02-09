/* src/components/EngineeringProjects/index.js */

import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { EngProjData } from '../data/EngProjData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlayCircle,
  faStar,
  faCodeBranch,
  faCircle,
  faMicrochip,
  faRobot,
  faCar
} from '@fortawesome/free-solid-svg-icons'

const EngineeringProjects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    let timeout
    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // Get project icon based on keywords
  const getProjectIcon = (name, description) => {
    const text = `${name} ${description}`.toLowerCase()
    if (text.includes('mirror') || text.includes('ai')) return faRobot
    if (text.includes('car') || text.includes('rc')) return faCar
    return faMicrochip
  }

  // Extract tech from description
  const extractTech = (description) => {
    const techMap = {
      'AI': /ai|artificial intelligence|machine learning/i,
      'Computer Vision': /computer vision|image recognition|opencv/i,
      'Raspberry Pi': /raspberry pi|rpi|pi/i,
      'Python': /python/i,
      'Hardware': /hardware|circuit|sensor|ultrasonic/i,
      'Embedded': /embedded|microcontroller|arduino/i,
      'IoT': /iot|internet of things/i,
      'Automation': /autonom|automat/i
    }
    
    const found = []
    const searchText = description.join(' ')
    
    Object.keys(techMap).forEach(tech => {
      if (techMap[tech].test(searchText)) {
        found.push(tech)
      }
    })
    
    return found.length > 0 ? found : ['Engineering']
  }

  return (
    <>
      <div className="container-eng-projects eng-projects-page">
        {/* Title */}
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E','n','g','i','n','e','e','r','i','n','g',' ','P','r','o','j','e','c','t','s']}
              idx={10}
            />
          </h1>
          <p className="subtitle">Hardware, Embedded Systems & Robotics</p>
        </div>

        {/* GitHub-Style Cards Grid */}
        <div className="code-cards-container">
          {EngProjData.map((project, index) => (
            <div
              key={project.id}
              className="code-card"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="project-icon">
                  <FontAwesomeIcon icon={getProjectIcon(project.name, project.description)} />
                </div>
                <div className="header-content">
                  <h3 className="project-name">{project.name}</h3>
                  <div className="project-stats">
                    <span className="stat">
                      <FontAwesomeIcon icon={faStar} />
                      Featured
                    </span>
                    <span className="stat">
                      <FontAwesomeIcon icon={faCodeBranch} />
                      Capstone
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <p className="project-description">
                  {project.description[0]}
                </p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  <FontAwesomeIcon icon={faCircle} className="lang-dot" />
                  <div className="tech-list">
                    {extractTech(project.description).map((tech, i) => (
                      <span key={i} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Project Image Preview */}
                <div className="project-preview">
                  <img src={project.imgSrc} alt={project.name} />
                  <div className={`preview-overlay ${hoveredId === project.id ? 'visible' : ''}`}>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="watch-button"
                    >
                      <FontAwesomeIcon icon={faPlayCircle} />
                      Watch Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <FontAwesomeIcon icon={faPlayCircle} />
                  View Project Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default EngineeringProjects