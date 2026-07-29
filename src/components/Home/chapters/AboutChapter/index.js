/* src/components/Home/chapters/AboutChapter/index.js */

import { faNodeJs, faGithub, faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const AboutChapter = () => {
    return (
        <div className='about-chapter'>
            <div className='about-text'>
                <p className='description'>My name is Nikhil Kharbanda, and I am a recent Computer Systems Engineering graduate (graduated in April 2021) from Carleton University
                    with a bachelor's degree. My degree primarily focuses in combining hardware and software to design and implement integrated computer systems for
                    applications such as robotics, AI, aerospace and avionic systems, and cloud computing.</p>
                <p className='description'>I have also completed a Full Stack Coding Bootcamp offered by the University of Toronto. This bootcamp
                    allows me to build a wide range of projects and applications for front-end and back-end development. Some examples
                    include HTML/CSS, Node.js, MySQL, Express.js, and more.</p>
                <p className='description'>Feel free to connect with me via social links, or by sending an email to <a className='email-link' href='mailto:nikhil_kharbanda@hotmail.com'>nikhil_kharbanda@hotmail.com</a></p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1 cubespinnerface'>
                        <FontAwesomeIcon icon={faNodeJs} color='#DD0031' />
                    </div>
                    <div className='face2 cubespinnerface'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3 cubespinnerface'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face4 cubespinnerface'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5 cubespinnerface'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6 cubespinnerface'>
                        <FontAwesomeIcon icon={faGithub} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutChapter
