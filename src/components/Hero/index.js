/* src/components/Hero/index.js */

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-n.png'
import Logo from '../Home/Logo'
import Resume from '../../assets/docs/Nikhil_Kharbanda-Resume.pdf'
import { Typewriter } from 'react-simple-typewriter'
import './index.scss'

const Hero = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['i', 'k', 'h', 'i', 'l', ' ', 'K', 'h', 'a', 'r', 'b', 'a', 'n', 'd', 'a']
    const Job1 = 'Computer Systems Engineer'
    const Job2 = 'Full-Stack Developer'

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className='hero-section'>
            <div className='text-zone'>
                <h1>
                    <span className='OpenerLines'>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt='developer' />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                    </span>

                    <span className='TyperWriterHeadline'>
                        <Typewriter
                            loop='true'
                            cursor
                            words={[Job1, Job2]}
                            animation-delay={1500}
                            delaySpeed={2000}
                            deleteSpeed={100}
                        />
                    </span>
                </h1>
                <Link to='/contact' className='flat-button btnHomePage'>CONTACT ME</Link>
                <a
                    href={Resume}
                    download='NikhilKharbanda-Resume'
                    target='_blank'
                    rel='noreferrer'
                >
                    <div className='resume-btn btnHomePage'>DOWNLOAD MY RESUME</div>
                </a>
            </div>
            <Logo className='bitmojiMe' />
        </div>
    )
}

export default Hero
