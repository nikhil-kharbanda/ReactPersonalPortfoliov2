/* src/components/Jobs/index.js */

import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { PrevJobsData } from '../data/PrevJobsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBriefcase, 
  faMapMarkerAlt,
  faCalendar,
  faCheckCircle,
  faCode,
  faBuilding
} from '@fortawesome/free-solid-svg-icons'

const Jobs = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [selectedId, setSelectedId] = useState(null)
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

  const handleImageError = (jobId) => {
    setImageErrors(prev => ({ ...prev, [jobId]: true }))
  }

  const toggleDetails = (id) => {
    setSelectedId(selectedId === id ? null : id)
  }

  return (
    <>
      <div className="container-jobs jobs-page">
        {/* Title */}
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P','r','e','v','i','o','u','s',' ','J','o','b','s']}
              idx={10}
            />
          </h1>
          <p className="subtitle">Career Journey & Experience</p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
        {[...PrevJobsData].reverse().map((job, index) => (
              <div
              key={job.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${selectedId === job.id ? 'expanded' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot">
                <div className="dot-inner">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="dot-pulse"></div>
              </div>

              {/* Timeline Card */}
              <div className="timeline-card" onClick={() => toggleDetails(job.id)}>
                {/* Card Header */}
                <div className="card-header">
                  <div className="company-logo">
                    {!imageErrors[job.id] && job.imgSrc ? (
                      <img 
                        src={job.imgSrc} 
                        alt={job.company}
                        onError={() => handleImageError(job.id)}
                      />
                    ) : (
                      <div className="logo-fallback">
                        <FontAwesomeIcon icon={faBuilding} />
                      </div>
                    )}
                  </div>
                  <div className="header-content">
                    <h3 className="company-name">{job.company}</h3>
                    <p className="role-title">{job.role}</p>
                    <div className="job-meta-inline">
                      <span className="meta-badge">
                        <FontAwesomeIcon icon={faCalendar} />
                        {job.dates}
                      </span>
                      <span className="meta-badge">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        {job.location}
                      </span>
                      <span className={`type-badge ${job.type.toLowerCase()}`}>
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body - Expands on click */}
                <div className={`card-body ${selectedId === job.id ? 'show' : ''}`}>
                  {/* Description */}
                  <div className="job-description">
                    <p>{job.description}</p>
                  </div>

                  {/* Achievements */}
                  {job.achievements && job.achievements.length > 0 && (
                    <div className="achievements-section">
                      <h4>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Key Achievements
                      </h4>
                      <ul>
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  {job.techStack && job.techStack.length > 0 && (
                    <div className="tech-section">
                      <h4>
                        <FontAwesomeIcon icon={faCode} />
                        Technologies & Skills
                      </h4>
                      <div className="tech-tags">
                        {job.techStack.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Expand Indicator */}
                <div className="expand-indicator">
                  {selectedId === job.id ? 'Click to collapse' : 'Click for details'}
                </div>
              </div>
            </div>
          ))}

          {/* Timeline End Marker */}
          <div className="timeline-end">
            <div className="end-dot"></div>
            <span className="end-text">Career Journey Continues...</span>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Jobs