/* src/components/ProjectDetail/index.js */

import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faExternalLinkAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { AllProjectsData } from '../data/AllProjsData'
import './index.scss'

const ProjectDetail = () => {
    const { slug } = useParams()
    const project = AllProjectsData.find(p => p.slug === slug)

    if (!project) {
        return (
            <div className='container-project-detail project-detail-page not-found'>
                <div className='text-zone'>
                    <h1>Project not found</h1>
                    <p>That project doesn't exist, or the link may be out of date.</p>
                    <Link className='back-link' to='/projects'>
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='container-project-detail project-detail-page'>
            <div className='text-zone'>
                <Link className='back-link' to='/projects'>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to Projects
                </Link>

                <div className='type-badge'>{project.category}</div>
                <h1>{project.name}</h1>

                <img className='detail-image' src={project.image} alt={project.name} />

                <p className='description'>{project.description}</p>

                {project.techStack && project.techStack.length > 0 && (
                    <div className='tech-section'>
                        <h4>Tech Stack</h4>
                        <div className='tech-tags'>
                            {project.techStack.map((tech, i) => (
                                <span key={i} className='tech-tag'>{tech}</span>
                            ))}
                        </div>
                    </div>
                )}

                <div className='project-links'>
                    {project.demo && (
                        <a href={project.demo} target='_blank' rel='noopener noreferrer' className='certificate-link'>
                            <FontAwesomeIcon icon={project.type === 'video' ? faPlayCircle : faExternalLinkAlt} />
                            {project.type === 'video' ? 'Watch Video' : 'Live Demo'}
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target='_blank' rel='noopener noreferrer' className='certificate-link'>
                            <FontAwesomeIcon icon={faGithub} /> View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
