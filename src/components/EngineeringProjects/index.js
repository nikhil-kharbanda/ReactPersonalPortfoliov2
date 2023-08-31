
import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

import { motion } from 'framer-motion'
import './index.scss'

const EngineeringProject = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        let timeout
        timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])


    return (
        <>
            <div className="container proj-page">
                <div className="text-zone engineering-title" >
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={[
                                'E',
                                'n',
                                'g',
                                'i',
                                'n',
                                'e',
                                'e',
                                'r',
                                'i',
                                'n',
                                'g',
                                ' ',
                                'P',
                                'r',
                                'o',
                                'j',
                                'e',
                                'c',
                                't',
                                's'
                            ]}
                            idx={10}
                        />
                    </h1>
                </div>
                {/* TODO: Engineering Dev Cards */}



                {/* End TODO: Engineering Dev Cards */}

            </div>
        </>
    )

}

export default EngineeringProject;