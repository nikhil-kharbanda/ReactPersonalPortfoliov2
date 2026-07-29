/* src/components/Home/index.js */

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Loader from 'react-loaders'
import Hero from '../Hero'
import Chapter from '../Chapter'
import AboutChapter from './chapters/AboutChapter'
import EducationChapter from './chapters/EducationChapter'
import ExperienceChapter from './chapters/ExperienceChapter'
import ProjectsPreviewChapter from './chapters/ProjectsPreviewChapter'
import ContactChapter from './chapters/ContactChapter'
import './index.scss'

const Home = () => {
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) {
            return
        }
        const id = location.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [location.hash])

    return (
        <>
            <div className='home-page'>
                <Hero />
                <Chapter number={1} title='About' id='about'>
                    <AboutChapter />
                </Chapter>
                <Chapter number={2} title='Education' id='education'>
                    <EducationChapter />
                </Chapter>
                <Chapter number={3} title='Experience' id='experience'>
                    <ExperienceChapter />
                </Chapter>
                <Chapter number={4} title='Projects' id='projects-preview'>
                    <ProjectsPreviewChapter />
                </Chapter>
                <Chapter number={5} title='Contact' id='contact-chapter'>
                    <ContactChapter />
                </Chapter>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home
