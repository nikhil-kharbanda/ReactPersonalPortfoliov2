/* src/components/Home/chapters/EducationChapter/index.js */

import { useState } from 'react'
import { Edu } from '../../../data/EduData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faExternalLinkAlt, faCertificate } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const EducationChapter = () => {
    const [expandedId, setExpandedId] = useState(null)

    const toggleAccordion = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <div className='education-accordion-container'>
            {Edu.map((item, index) => (
                <div
                    key={item.id}
                    className={`accordion-item ${expandedId === item.id ? 'expanded' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className='accordion-header' onClick={() => toggleAccordion(item.id)}>
                        <div className='header-left'>
                            <div className='item-number'>{String(item.id).padStart(2, '0')}</div>
                            <h3 className='item-title'>{item.name}</h3>
                        </div>
                        <div className='header-right'>
                            <FontAwesomeIcon
                                icon={expandedId === item.id ? faChevronUp : faChevronDown}
                                className='accordion-icon'
                            />
                        </div>
                    </div>

                    <div className={`accordion-content ${expandedId === item.id ? 'show' : ''}`}>
                        <div className='content-wrapper'>
                            <div className='content-left'>
                                <div className='image-container'>
                                    <img src={item.imgSrc} alt={item.name} />
                                    <div className='image-overlay'>
                                        <FontAwesomeIcon icon={faCertificate} className='cert-icon' />
                                    </div>
                                </div>
                            </div>
                            <div className='content-right'>
                                <div className='description'>
                                    {item.description.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </div>
                                <a href={item.link} target='_blank' rel='noopener noreferrer' className='certificate-link'>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    View Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EducationChapter
