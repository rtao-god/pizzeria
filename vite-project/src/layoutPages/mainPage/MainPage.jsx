import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "@mainPage/Header/Header.jsx"
import Navbar from "@mainPage/Navbar/Navbar"
import BigSwiper from "@mainPage/Content/Swipers/BigSwiper/Swiper"
import SwiperStories from "@mainPage/Content/Swipers/SwiperStories/Swiper"
import Footer from '@mainPage/Footer/Footer'
import filterFood from '@mainPage/filterFood/filterFood'
import ButtonBasket from '@mainPage/ButtonBasket/ButtonBasket.jsx'
import Cookies from '@mainPage/Cookies/Cookies'
import CartFood from "../../pages/FoodCart"

export default function MainPage() {
    const [basket, setBasket] = useState([])
    const [countTotal, setCountTotal] = useState(basket.length)
    const [copy, setCopy] = useState([])
    console.log(countTotal)

    const [countState, setCountState] = useState(false)
    const [activeModal, setActiveModal] = useState(false)

    let productAlreadyInCart = false

    const addFoodInBasket = (food) => {
        basket.forEach(el => {
            if (food.id == el.id) {
                productAlreadyInCart = true
                food.count++
            }
        })
        if (!productAlreadyInCart) {
            basket.push(food)
        }

        setCountTotal(countTotal + 1)
        setCountState(true)
    }

    return (
        <div>
            <div style={{ position: "absolute", left: "0" }}>
                <Header />
                <Navbar copy={copy} basket={basket} setBasket={setBasket} countTotal={countTotal} setCountTotal={setCountTotal} active={activeModal} setActive={setActiveModal} />
            </div>

            <BigSwiper />
            <div className='backgroundWrapper'> </div>
            <SwiperStories />
            <CartFood addFoodInBasket={addFoodInBasket} />
            <filterFood />
            <ButtonBasket countTotal={countTotal} countState={countState} setCountState={setCountState} active={activeModal} setActive={setActiveModal} />
            <Cookies />
        </div>
    )
}
