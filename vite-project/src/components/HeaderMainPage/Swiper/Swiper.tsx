import React from 'react'
import cl from "./Swiper.module.css"
import Carousel from "./Carousel"

export default function Swiper() {
    return (
        <div className={cl.swiper}>
            <Carousel>
                <div className={cl.item && cl.item1}> item-1 </div>
                <div className={cl.item && cl.item2}> item-2 </div>
                <div className={cl.item && cl.item3}> item-3 </div>
                <div className={cl.item && cl.item4}> item-4 </div>
            </Carousel>
        </div>
    )
}
