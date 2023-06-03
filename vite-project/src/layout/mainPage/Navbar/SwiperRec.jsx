import React, { useState } from 'react'

import { Virtual, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from './SwiperRec.module.css'
import { allFoods } from '@components/Pizza/sortingPhotos/sort'

import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/scrollbar'
import Basket from '@UI/Basket/Basket'

export default function SwiperRec() {
    const allFood = allFoods.map((el) =>
        <img src={'assets/photo/food/' + el.food + '-optimize.jpg'} alt={el.pizza} />
    )
    
    return (
        <div className={cl.mySwiperRec}>
            <Swiper
                modules={[Virtual, Scrollbar, A11y]}
                loop={true}
                spaceBetween={10}
                slidesPerView={2.5}
            >
                {allFood.map((allFood) => (
                    <SwiperSlide>
                        <div className={cl.cardContent}>
                            <a href='#'>
                                {allFood}
                            </a>
                            <h3> Roman Pizza Margherita  </h3> <br />
                            <p className={cl.priceCard}> 576$ </p> <br />
                           <Basket title={"Basket"}> lol </Basket>
                    </div>
                    </SwiperSlide>
                ))}
        </Swiper>
        </div >
    )
}