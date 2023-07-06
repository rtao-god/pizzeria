import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './SwiperRec.module.css'
import { allFoods } from '@components/Pizza/foods/food'
import 'swiper/css'
import Basket from '@UI/Basket/Basket'

export default function SwiperRec({ addFoodToBasket }) {
    const allFood = allFoods.map(el => {
        if (el.rec == true) {
            return (
                <div key={el.id} className={cl.cart}>
                    <img src={'assets/photo/food/' + el.img + '-optimize.jpg'} alt="recFood" />
                    <div className={cl.cartContent}>
                        <h3> Roman Pizza Margherita  </h3> <br />
                        <p className={cl.priceCart}> 576$ </p> <br />
                        <div onClick={() => addFoodToBasket(el)} className={cl.footerCart} >
                            <Basket title={"To basket"} />
                        </div>
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
                            <SwiperSlide key={el.key}>
                                {el}
                            </SwiperSlide>
                        )
                    }
                })}
            </Swiper>
        </div>
    )
}