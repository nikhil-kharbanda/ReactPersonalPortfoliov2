/* src/components/DevProjects/index.js */

import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { Proj } from '../data/ProjectData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { 
  faExternalLinkAlt,
  faCode
} from '@fortawesome/free-solid-svg-icons'

const DevProjects = () => {
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

  // Extract tech stack from description or project name
  const getTechStack = (project) => {
    const techKeywords = {
      'React': /react/i,
      'Node.js': /node/i,
      'MongoDB': /mongo/i,
      'JavaScript': /javascript|js/i,
      'Bootstrap': /bootstrap/i,
      'API': /api/i,
      'Heroku': /heroku/i,
      'HTML/CSS': /html|css/i
    }
    
    const found = []
    const searchText = `${project.name} ${project.description}`.toLowerCase()
    
    Object.keys(techKeywords).forEach(tech => {
      if (techKeywords[tech].test(searchText)) {
        found.push(tech)
      }
    })
    
    return found.length > 0 ? found : ['Web Development']
  }

  return (
    <>
      <div className="container-dev-projects dev-projects-page">
        {/* Title */}
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['D','e','v',' ','P','r','o','j','e','c','t','s']}
              idx={10}
            />
          </h1>
          <p className="subtitle">Interactive Web Applications & Tools</p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-container">
          <div className="masonry-grid">
            {Proj.map((project, index) => (
              <div
                key={project.id}
                className="masonry-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Project Image */}
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    loading="lazy"
                  />
                  <div className={`image-overlay ${hoveredId === project.id ? 'visible' : ''}`}>
                    <div className="overlay-content">
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-button"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="overlay-button"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Tech Stack Badges */}
                  <div className="tech-stack">
                    <FontAwesomeIcon icon={faCode} className="code-icon" />
                    {getTechStack(project).map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default DevProjects