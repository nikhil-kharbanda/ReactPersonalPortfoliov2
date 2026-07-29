/* src/components/Home/chapters/ProjectsPreviewChapter/index.js */

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCode, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { AllProjectsData } from '../../../data/AllProjsData'
import './index.scss'

const FEATURED_SLUGS = ['mirrai', 'rc-cars-proximity-sensing', 'devspace']

const ProjectsPreviewChapter = () => {
    const featured = FEATURED_SLUGS
        .map(slug => AllProjectsData.find(p => p.slug === slug))
        .filter(Boolean)

    return (
        <div className='projects-preview'>
            <div className='preview-grid'>
                {featured.map(project => (
                    <Link key={project.id} to={`/projects/${project.slug}`} className='preview-card'>
                        <div className={`preview-badge type-badge ${project.category.toLowerCase().replace(' ', '-')}`}>
                            <FontAwesomeIcon icon={project.category === 'Engineering' ? faPlayCircle : faCode} />
                            {project.category}
                        </div>
                        <img className='preview-image' src={project.image} alt={project.name} loading='lazy' />
                        <h3 className='item-title'>{project.name}</h3>
                    </Link>
                ))}
            </div>

            <Link to='/projects' className='certificate-link view-all-link'>
                View All Projects <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    )
}

export default ProjectsPreviewChapter
