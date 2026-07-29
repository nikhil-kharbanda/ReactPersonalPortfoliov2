/* src/hooks/useScrollSpy.js */

import { useEffect, useState } from 'react'

const useScrollSpy = (ids, containerSelector) => {
    const [activeId, setActiveId] = useState(null)

    useEffect(() => {
        const container = containerSelector ? document.querySelector(containerSelector) : null
        const elements = ids.map(id => document.getElementById(id)).filter(Boolean)
        if (elements.length === 0) {
            return undefined
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
                if (visible[0]) {
                    setActiveId(visible[0].target.id)
                }
            },
            { root: container, threshold: [0.25, 0.5, 0.75] }
        )

        elements.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [ids, containerSelector])

    return activeId
}

export default useScrollSpy
