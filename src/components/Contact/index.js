import Loader from 'react-loaders';
import emailjs from "@emailjs/browser"
import { useEffect, useRef, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        alert("Submitted");
        emailjs.sendForm('service_90osgm8', 'contact_form', e.target, 'y7elJyFg9Tn9fblCG');
    }

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
            <div className='container contact-page'>
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

                    <div className='contact-form'>
                        <form ref = {refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type='text' name="name" placeholder='Name' required/>
                                </li>
                                <li className="half">
                                    <input type='email' name="email" placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type = "text" name="subject" placeholder ="Subject" required/>
                                </li>
                                <li>
                                    <textarea type="text" name="message" placeholder="Type a message..." required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND"/>
                                </li>
                            </ul>
                        </form>

                    </div>
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
                    <MapContainer center={[43.5826, -79.7551]} zoom={12} scrollWheelZoom={false} zoomControl={false} dragging={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[43.5826, -79.7551]}>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
         </>
    )
}

export default Contact;