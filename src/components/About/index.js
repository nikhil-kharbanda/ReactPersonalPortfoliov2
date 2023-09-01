import { faNodeJs, faGithub, faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    },
        []);

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>My name is Nikhil Kharbanda, and I am a recent Computer Systems Engineering graduate (graduated in April 2021) from Carleton University
                        with a bachelor’s degree. My degree primarily focuses in combining hardware and software to design and implement integrated computer systems for
                        applications such as robotics, AI, aerospace and avionic systems, and cloud computing.</p>
                    <p>I have also completed a Full Stack Coding Bootcamp offered by the University of Toronto. This bootcamp
                        allows me to build a wide range of projects and applications for front-end and back-end development. Some examples
                        include HTML/CSS, Node.js, MySQL, Express.js, and more.</p>
                    <p>Feel free to connect with me via social links, or by sending an email to  <a className='email-link' href="mailto:nikhil_kharbanda@hotmail.com">nikhil_kharbanda@hotmail.com</a></p>
                   
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About;