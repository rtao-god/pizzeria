import React, { useState } from 'react'

import Header from "@mainPage/Header/Header"
import Navbar from "@mainPage/Navbar/Navbar"
import BigSwiper from "@mainPage/Content/Swipers/BigSwiper/Swiper"
import SwiperStories from "@mainPage/Content/Swipers/SwiperStories/Swiper"
import Footer from '@mainPage/Footer/Footer.jsx'
import Pizza from '@components/Pizza/Pizza'
import FilterPizzas from '@mainPage/FilterPizzas/FilterPizzas'
import ButtonBasket from '@mainPage/ButtonBasket/ButtonBasket'
import Cookies from '@mainPage/Cookies/Cookies'

export default function MainPage() {
    const [countCard, setCountCard] = useState(0)

    const counterFun = () => {
        setCountCard(countCard + 1)
    }

    return (
        <div>
            <div style={{ position: "absolute", left: "0" }}>
                <Header />
                <Navbar counterFun={counterFun} />
            </div>
            <BigSwiper />
            <div className='backgroundWrapper'> </div>
            <SwiperStories />
            <Pizza />
            <FilterPizzas />
            <ButtonBasket countCard={countCard} />
            <Cookies />
        </div>
    )
}
