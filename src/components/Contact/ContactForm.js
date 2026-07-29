/* src/components/Contact/ContactForm.js */

import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import './contact-form.scss'

const ContactForm = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        alert('Submitted')
        emailjs.sendForm('service_90osgm8', 'contact_form', e.target, 'y7elJyFg9Tn9fblCG')
    }

    return (
        <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required />
                    </li>
                    <li>
                        <textarea type='text' name='message' placeholder='Type a message...' required></textarea>
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value='SEND' />
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default ContactForm
