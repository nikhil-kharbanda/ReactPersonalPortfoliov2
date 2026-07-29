/* src/styles/motion.js */
/* Mirrors the duration/easing values in src/styles/_tokens.scss.
   framer-motion transitions are JS objects, not CSS, so these values
   are kept in sync manually with the SCSS custom properties. */

export const DURATION = {
    fast: 0.15,
    base: 0.3,
    slow: 0.6,
    chapter: 0.9,
};

export const EASE_STANDARD = [0.16, 1, 0.3, 1];
