import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-n.png'
import './index.scss'
import Logo from './Logo';
import Loader from 'react-loaders';
import Resume from '../../assets/docs/NikhilKharbanda-Resume.pdf'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['i', 'k', 'h', 'i', 'l', ' ', 'K','h','a','r','b','a','n','d','a']
    const jobArray1 = [
        'C',    //computer systems engineer
        'o',
        'm',
        'p',
        'u',
        't',
        'e',
        'r',
        ' ',
        'S',
        'y',
        's',
        't',
        'e',
        'm',
        's',
        ' ',
        'E',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r',
        '.',
    ]

    const Job1 = 'Computer Systems Engineer'

    const jobArray2 =
        [
            'F',            //Full-stack Developer
            'u',
            'l',
            'l',
            '-',
            's',
            't',
            'a',
            'c',
            'k',
            ' ',
            'D',
            'e',
            'v',
            'e',
            'l',
            'o',
            'p',
            'e',
            'r',
            '.'
        ]
        const Job2 = 'Full-Stack Developer'

    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);
        return () => {
            clearTimeout(timeout);
        };
    },
        []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />

                        <Typewriter
                            loop="true"
                            cursor
                            words={[Job1, Job2]}
                            animation-delay={1500}
                            delaySpeed={2000}
                            deleteSpeed={100}
                        />
                    </h1>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                    <a
                        href={Resume}
                        download="NikhilKharbanda-Resume"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className='resume-btn'>DOWNLOAD MY RESUME</div>
                    </a>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    );

}

export default Home;