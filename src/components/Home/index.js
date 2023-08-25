import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['h', 'a', 'r', 'b', 'a', 'n', 'd', 'a']
    const jobArray = [
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

    return(
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
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={10}
                    />
                </h1>
                <h2>
                    Computer Systems Engineer | Full-Stack Developer
                </h2>
                {/* <Link to="/contant" className="flat-button">CONTACT ME</Link> */}
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
        </>
    );

}

export default Home;