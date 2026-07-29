/* src/components/NotFound/index.js */

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const NotFound = () => {
    return (
        <div className='container-not-found not-found-page'>
            <div className='text-zone'>
                <h1>404</h1>
                <p>This page doesn't exist.</p>
                <Link className='certificate-link' to='/'>
                    <FontAwesomeIcon icon={faArrowLeft} /> Back Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
