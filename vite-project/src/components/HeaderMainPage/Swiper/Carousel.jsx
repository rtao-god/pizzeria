import React, { Children, cloneElement, useState } from 'react'
import cl from "./Carousel.module.css"
import { useEffect } from 'react'

const PAGE_WIDTH = 450

export default function Carousel({ children }) {

    const [pages, setPages] = useState([])

    useEffect(() => {
        setPages(Children.map(children, child => {
            return cloneElement(child, {
                style: {
                    height: "100%",
                    maxWidth: `${PAGE_WIDTH}px`,
                    minWidth: `${PAGE_WIDTH}px`,
                }
            })
        }))
    }, [])

    return (
        <div className={cl.mainContainer}>
            <div className={cl.window}>
                <div className={cl.allPagesContainer}> {children} </div>
            </div>
        </div>
    )
}
