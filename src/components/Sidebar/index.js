import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSchool, faUser, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faDev, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (

    <div className='nav-bar'>
        <Link className = 'logo' to='/'>
            <img src={LogoS} alt= 'logo'/>
            <img className= 'sub-logo' src={LogoSubtitle} alt= 'logo_subtitle'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className = 'about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className = 'edu-link' to="/education">
                <FontAwesomeIcon icon={faSchool} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className = 'eng-link' to="/engineering-projects">
                <FontAwesomeIcon icon={faWrench} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className = 'proj-link' to="/development-projects">
                <FontAwesomeIcon icon={faDev} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className = 'contact-link' to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="blank" rel='noreferrer' href='https://www.linkedin.com/in/nikhil-kharbanda/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="blank" rel='noreferrer' href='https://github.com/nikhil-kharbanda'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="blank" rel='noreferrer' href='https://www.instagram.com/nik22cool'>
                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
        </ul>

    </div>

)


export default Sidebar