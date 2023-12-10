import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './SwiperRec.module.css'
import { allFoods } from '@components/food/foodArray'
import 'swiper/css'
import Basket from '@common/controls/BasketButton/BasketButton'
import { Context } from '@context'

export default function SwiperRec() {
    const context = useContext(Context)

    const allFood = allFoods.map(el => {
        if (el.rec == true) {
            return (
                <div key={el.id} className={cl.cart}>
                    <img src={'/photo/food/' + el.img + '-optimize.jpg'} alt="recFood" />
                    <div className={cl.cartContent}>
                        <h3> Roman Pizza Margherita  </h3> <br />
                        <p className={cl.priceCart}> 576$ </p> <br />
                        <div onClick={() => context.addFoodToBasket(el)} className={cl.footerCart} >
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