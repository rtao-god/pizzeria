import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import cl from './SwiperRec.module.css'
import { allFoods } from '@components/Pizza/sortingPhotos/sort'

import 'swiper/css'
import Basket from '@UI/Basket/Basket'

export default function SwiperRec() {

    const allFood = allFoods.map(el => {
        if (el.rec !== false) {
            return (
                <div className={cl.cart}>
                    <img src={'assets/photo/food/' + el.food + '-optimize.jpg'} alt="recFood" />
                    <div className={cl.cartContent}>
                        <h3> Roman Pizza Margherita  </h3> <br />
                        <p className={cl.priceCart}> 576$ </p> <br />
                        <Basket title={"To basket"} />
                    </div>
                </div>
            )
        }
    })

    return (
        <div className={cl.mySwiperRec}>
            <p> WE RECOMMEND ADDING </p> <br />
            <Swiper
                loop={true}
                spaceBetween={10}
                slidesPerView={2.5}
            >
                {allFood.map(el => {
                    if (el !== undefined) {
                        return (
                            <SwiperSlide>
                                {el}
                            </SwiperSlide>
                        )
                    }
                })}
            </Swiper>
        </div>
    )
}