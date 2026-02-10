/* src/components/Projects/index.js */

import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { AllProjectsData } from '../data/AllProjsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { 
  faExternalLinkAlt,
  faCode,
  faPlayCircle,
  faFilter
} from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [hoveredId, setHoveredId] = useState(null)
  const [filter, setFilter] = useState('All') // 'All', 'Web Dev', 'Engineering'

  useEffect(() => {
    let timeout
    timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? AllProjectsData 
    : AllProjectsData.filter(p => p.category === filter)

  return (
    <>
      <div className="container-projects projects-page">
        {/* Title */}
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P','r','o','j','e','c','t','s']}
              idx={10}
            />
          </h1>
          <p className="subtitle">Web Development & Engineering</p>
          
          {/* Filter Buttons */}
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              onClick={() => setFilter('All')}
            >
              <FontAwesomeIcon icon={faFilter} />
              All Projects ({AllProjectsData.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'Web Dev' ? 'active' : ''}`}
              onClick={() => setFilter('Web Dev')}
            >
              <FontAwesomeIcon icon={faCode} />
              Web Dev ({AllProjectsData.filter(p => p.category === 'Web Dev').length})
            </button>
            <button 
              className={`filter-btn ${filter === 'Engineering' ? 'active' : ''}`}
              onClick={() => setFilter('Engineering')}
            >
              <FontAwesomeIcon icon={faPlayCircle} />
              Engineering ({AllProjectsData.filter(p => p.category === 'Engineering').length})
            </button>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-container">
          <div className="masonry-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`masonry-item ${project.category.toLowerCase().replace(' ', '-')}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Category Badge */}
                <div className={`category-badge ${project.category.toLowerCase().replace(' ', '-')}`}>
                  <FontAwesomeIcon icon={project.category === 'Engineering' ? faPlayCircle : faCode} />
                  {project.category}
                </div>

                {/* Project Image */}
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    loading="lazy"
                  />
                  <div className={`image-overlay ${hoveredId === project.id ? 'visible' : ''}`}>
                    <div className="overlay-content">
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="overlay-button"
                        >
                          <FontAwesomeIcon icon={project.type === 'video' ? faPlayCircle : faExternalLinkAlt} />
                          {project.type === 'video' ? 'Watch Video' : 'Live Demo'}
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="overlay-button"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Tech Stack Badges - NOW USES MANUAL techStack ARRAY */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="tech-stack">
                      <FontAwesomeIcon icon={faCode} className="code-icon" />
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="project-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link demo-link"
                      >
                        <FontAwesomeIcon icon={project.type === 'video' ? faPlayCircle : faExternalLinkAlt} />
                        {project.type === 'video' ? 'Video' : 'Demo'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="empty-state">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Projects