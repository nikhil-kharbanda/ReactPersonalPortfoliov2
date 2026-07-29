/* src/components/Chapter/index.js */

import { motion, useReducedMotion } from 'framer-motion'
import { DURATION, EASE_STANDARD } from '../../styles/motion'
import './index.scss'

const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.chapter, ease: EASE_STANDARD },
    },
}

const Chapter = ({ number, title, id, className = '', onEnter, children }) => {
    const shouldReduceMotion = useReducedMotion()

    return (
        <motion.section
            id={id}
            className={`chapter ${className}`}
            initial={shouldReduceMotion ? undefined : 'hidden'}
            whileInView={shouldReduceMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
            variants={shouldReduceMotion ? undefined : variants}
            onViewportEnter={onEnter}
        >
            <div className='chapter-number' aria-hidden='true'>.0{number}</div>
            <div className='chapter-body'>
                {title && <h2 className='chapter-title'>{title}</h2>}
                {children}
            </div>
        </motion.section>
    )
}

export default Chapter
