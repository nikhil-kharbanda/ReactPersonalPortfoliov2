/* src/components/Jobs/index.js */

import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { PrevJobsData } from '../data/PrevJobsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faChevronDown, 
  faChevronUp, 
  faBriefcase, 
  faMapMarkerAlt,
  faCalendar,
  faCheckCircle,
  faCode,
  faBuilding
} from '@fortawesome/free-solid-svg-icons'

const Jobs = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [expandedId, setExpandedId] = useState(null)
  const [imageErrors, setImageErrors] = useState({})

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

  const handleImageError = (jobId) => {
    setImageErrors(prev => ({ ...prev, [jobId]: true }))
  }

  return (
    <>
      <div className="container-jobs jobs-page">
        {/* Title on the left */}
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P','r','e','v','i','o','u','s',' ','J','o','b','s']}
              idx={10}
            />
          </h1>
        </div>

        {/* Accordion on the right */}
        <div className="jobs-accordion-container">
          {PrevJobsData.map((job, index) => (
            <div
              key={job.id}
              className={`accordion-item ${expandedId === job.id ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Accordion Header */}
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(job.id)}
              >
                <div className="header-left">
                  <div className="item-number">{String(job.id).padStart(2, '0')}</div>
                  <div className="header-info">
                    <h2 className="company-name">{job.company}</h2>
                    <p className="role-title">{job.role}</p>
                  </div>
                </div>
                <div className="header-right">
                  <span className="job-type-badge">{job.type}</span>
                  <FontAwesomeIcon
                    icon={expandedId === job.id ? faChevronUp : faChevronDown}
                    className="accordion-icon"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div className={`accordion-content ${expandedId === job.id ? 'show' : ''}`}>
                <div className="content-wrapper">
                  {/* Left side - Company logo/image */}
                  <div className="content-left">
                    <div className="image-container">
                      {!imageErrors[job.id] && job.imgSrc ? (
                        <img 
                          src={job.imgSrc} 
                          alt={job.company}
                          onError={() => handleImageError(job.id)}
                        />
                      ) : (
                        <div className="image-fallback">
                          <FontAwesomeIcon icon={faBuilding} className="fallback-icon" />
                          <span>{job.company}</span>
                        </div>
                      )}
                      <div className="image-overlay">
                        <FontAwesomeIcon icon={faBriefcase} className="job-icon" />
                      </div>
                    </div>
                    
                    {/* Job meta info */}
                    <div className="job-meta">
                      <div className="meta-item">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>{job.dates}</span>
                      </div>
                      <div className="meta-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Job details */}
                  <div className="content-right">
                    {/* Description */}
                    <div className="job-description">
                      <p>{job.description}</p>
                    </div>

                    {/* Key Achievements */}
                    {job.achievements && job.achievements.length > 0 && (
                      <div className="achievements-section">
                        <h3>
                          <FontAwesomeIcon icon={faCheckCircle} />
                          Key Achievements
                        </h3>
                        <ul>
                          {job.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {job.techStack && job.techStack.length > 0 && (
                      <div className="tech-stack-section">
                        <h3>
                          <FontAwesomeIcon icon={faCode} />
                          Tech Stack & Skills
                        </h3>
                        <div className="tech-tags">
                          {job.techStack.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
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

export default Jobs