// src/components/Sidebar/index.js

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './index.scss'
import LogoK from '../../assets/images/logo_new.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome, faSchool, faUser, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

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
                    <NavLink exact='true' activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='edu-link' to='/education'>
                        <FontAwesomeIcon icon={faSchool} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='jobs-link' to='/previous-jobs'>
                        <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='eng-link' to='/projects'>
                        <FontAwesomeIcon icon={faWrench} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a target='blank' rel='noreferrer' href='https://www.linkedin.com/in/nikhil-kharbanda/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='blank' rel='noreferrer' href='https://github.com/nikhil-kharbanda'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='blank' rel='noreferrer' href='https://www.instagram.com/nik22cool'>
                            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar