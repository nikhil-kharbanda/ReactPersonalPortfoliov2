/* src/components/Home/chapters/ContactChapter/index.js */

import ContactForm from '../../../Contact/ContactForm'
import './index.scss'

const ContactChapter = () => {
    return (
        <div className='contact-chapter'>
            <p className='description'>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using the form below.
            </p>

            <ContactForm />

            <div className='contact-info'>
                Nikhil Kharbanda &middot; Mississauga, ON &middot; Canada
                <br />
                <a href='mailto:nikhil_kharbanda@hotmail.com'>nikhil_kharbanda@hotmail.com</a>
            </div>
        </div>
    )
}

export default ContactChapter
