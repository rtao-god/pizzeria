import React, { useEffect } from 'react'
import animationGif from '/public/photo/animation/animationGif.webp'

export default function Animation({ setAnimation }) {
    useEffect(() => {
        setTimeout(() => {
            setAnimation(false)
        }, 5000)
    }, [])

    return (
        <img src={animationGif} />
    )
}
