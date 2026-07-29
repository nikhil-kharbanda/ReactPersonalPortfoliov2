/* src/components/Home/chapters/ExperienceChapter/index.js */

import { useState } from 'react'
import { PrevJobsData } from '../../../data/PrevJobsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBriefcase,
    faMapMarkerAlt,
    faCalendar,
    faCheckCircle,
    faCode,
    faBuilding
} from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const ExperienceChapter = () => {
    const [selectedId, setSelectedId] = useState(null)
    const [imageErrors, setImageErrors] = useState({})

    const handleImageError = (jobId) => {
        setImageErrors(prev => ({ ...prev, [jobId]: true }))
    }

    const toggleDetails = (id) => {
        setSelectedId(selectedId === id ? null : id)
    }

    return (
        <div className='timeline-container'>
            <div className='timeline-line' />

            {[...PrevJobsData].reverse().map((job, index) => (
                <div
                    key={job.id}
                    className={`timeline-item ${selectedId === job.id ? 'expanded' : ''}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                >
                    <div className='timeline-dot'>
                        <div className='dot-inner'>
                            <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className='dot-pulse' />
                    </div>

                    <div className='timeline-card' onClick={() => toggleDetails(job.id)}>
                        <div className='card-header'>
                            <div className='company-logo'>
                                {!imageErrors[job.id] && job.imgSrc ? (
                                    <img src={job.imgSrc} alt={job.company} onError={() => handleImageError(job.id)} />
                                ) : (
                                    <div className='logo-fallback'>
                                        <FontAwesomeIcon icon={faBuilding} />
                                    </div>
                                )}
                            </div>
                            <div className='header-content'>
                                <h3 className='item-title'>{job.company}</h3>
                                <p className='secondary-title'>{job.role}</p>
                                <div className='job-meta-inline'>
                                    <span className='meta-badge'>
                                        <FontAwesomeIcon icon={faCalendar} />
                                        {job.dates}
                                    </span>
                                    <span className='meta-badge'>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        {job.location}
                                    </span>
                                    <span className={`type-badge ${job.type.toLowerCase().replace('-', '')}`}>
                                        {job.type}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={`card-body ${selectedId === job.id ? 'show' : ''}`}>
                            <div className='description'>
                                <p>{job.description}</p>
                            </div>

                            {job.achievements && job.achievements.length > 0 && (
                                <div className='achievements-section'>
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

                            {job.techStack && job.techStack.length > 0 && (
                                <div className='tech-section'>
                                    <h4>
                                        <FontAwesomeIcon icon={faCode} />
                                        Technologies & Skills
                                    </h4>
                                    <div className='tech-tags'>
                                        {job.techStack.map((tech, i) => (
                                            <span key={i} className='tech-tag'>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='expand-indicator'>
                            {selectedId === job.id ? 'Click to collapse' : 'Click for details'}
                        </div>
                    </div>
                </div>
            ))}

            <div className='timeline-end'>
                <div className='end-dot' />
                <span className='end-text'>Career Journey Continues...</span>
            </div>
        </div>
    )
}

export default ExperienceChapter
