// src/components/Sidebar/index.js

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './index.scss'
import LogoK from '../../assets/images/logo_new.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome, faSchool, faUser, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import useScrollSpy from '../../hooks/useScrollSpy'

const CHAPTER_IDS = ['about', 'education', 'experience', 'projects-preview', 'contact-chapter']

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const isHome = location.pathname === '/'
    const activeChapter = useScrollSpy(CHAPTER_IDS, '.home-page')

    // Close drawer on route change
    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    // Lock body scroll when drawer is open on mobile
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    // Scroll to a chapter anchor: if already home, scroll in place; otherwise navigate then scroll
    const goToChapter = (id) => (e) => {
        e.preventDefault()
        if (isHome) {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            navigate(`/#${id}`)
        }
    }

    const goHome = (e) => {
        e.preventDefault()
        if (isHome) {
            document.querySelector('.home-page')?.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            navigate('/')
        }
    }

    return (
        <>
            {/* ── Mobile top bar (≤768px only) ── */}
            <div className='mobile-top-bar'>
                <Link className='mobile-logo' to='/'>
                    <img src={LogoK} alt='logo' />
                </Link>

                <button
                    className={`waffle-btn${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label='Toggle navigation menu'
                    aria-expanded={menuOpen}
                >
                    {/* 3×3 waffle grid */}
                    <span className='waffle-grid'>
                        {[...Array(9)].map((_, i) => (
                            <span key={i} className='waffle-dot' />
                        ))}
                    </span>
                    {/* X close icon (shown when open) */}
                    <span className='waffle-close'>✕</span>
                </button>
            </div>

            {/* ── Backdrop ── */}
            <div
                className={`nav-backdrop${menuOpen ? ' visible' : ''}`}
                onClick={() => setMenuOpen(false)}
                aria-hidden='true'
            />

            {/* ── Sidebar (always on desktop, drawer on mobile) ── */}
            <div className={`nav-bar${menuOpen ? ' nav-bar--open' : ''}`}>
                {/* Desktop logo */}
                <Link className='logo' to='/'>
                    <img src={LogoK} alt='logo' />
                    <img className='sub-logo' src={LogoSubtitle} alt='logo_subtitle' />
                </Link>

                <nav>
                    <a
                        href='/'
                        className={isHome && !activeChapter ? 'active' : ''}
                        onClick={goHome}
                    >
                        <FontAwesomeIcon icon={faHome} color='var(--color-text-muted)' />
                    </a>
                    <a
                        href='/#about'
                        className={`about-link${isHome && activeChapter === 'about' ? ' active' : ''}`}
                        onClick={goToChapter('about')}
                    >
                        <FontAwesomeIcon icon={faUser} color='var(--color-text-muted)' />
                    </a>
                    <a
                        href='/#education'
                        className={`edu-link${isHome && activeChapter === 'education' ? ' active' : ''}`}
                        onClick={goToChapter('education')}
                    >
                        <FontAwesomeIcon icon={faSchool} color='var(--color-text-muted)' />
                    </a>
                    <a
                        href='/#experience'
                        className={`jobs-link${isHome && activeChapter === 'experience' ? ' active' : ''}`}
                        onClick={goToChapter('experience')}
                    >
                        <FontAwesomeIcon icon={faBriefcase} color='var(--color-text-muted)' />
                    </a>
                    <NavLink exact='true' activeclassname='active' className='eng-link' to='/projects'>
                        <FontAwesomeIcon icon={faWrench} color='var(--color-text-muted)' />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='var(--color-text-muted)' />
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a target='blank' rel='noreferrer' href='https://www.linkedin.com/in/nikhil-kharbanda/'>
                            <FontAwesomeIcon icon={faLinkedin} color='var(--color-text-muted)' />
                        </a>
                    </li>
                    <li>
                        <a target='blank' rel='noreferrer' href='https://github.com/nikhil-kharbanda'>
                            <FontAwesomeIcon icon={faGithub} color='var(--color-text-muted)' />
                        </a>
                    </li>
                    <li>
                        <a target='blank' rel='noreferrer' href='https://www.instagram.com/nik22cool'>
                            <FontAwesomeIcon icon={faInstagram} color='var(--color-text-muted)' />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
