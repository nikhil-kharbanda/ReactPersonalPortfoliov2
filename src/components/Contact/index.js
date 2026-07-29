/* src/components/Contact/index.js */

import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import ContactForm from './ContactForm'
import ContactMap from './ContactMap'

const Contact = () => {

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
            <div className='container-contact contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}/>
                    </h1>
                    <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                    </p>

                    <ContactForm />
                </div>
                <div className='info-map'>
                    Nikhil Kharbanda
                    <br />
                    Mississauga, ON
                    <br />
                    Canada
                    <span>nikhil_kharbanda@hotmail.com</span>
                </div>
                <div className='map-wrap'>
                    <ContactMap />
                </div>
            </div>
            <Loader type='pacman' />
         </>
    )
}

export default Contact;
