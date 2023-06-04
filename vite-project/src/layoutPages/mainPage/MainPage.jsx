import React, { useState } from 'react'

import Header from "@mainPage/Header/Header.jsx"
import Navbar from "@mainPage/Navbar/Navbar"
import BigSwiper from "@mainPage/Content/Swipers/BigSwiper/Swiper"
import SwiperStories from "@mainPage/Content/Swipers/SwiperStories/Swiper"
import Footer from '@mainPage/Footer/Footer'
import Pizza from '@components/Pizza/Pizza'
import FilterPizzas from '@mainPage/FilterPizzas/FilterPizzas'
import ButtonBasket from '@mainPage/ButtonBasket/ButtonBasket.jsx'
import Cookies from '@mainPage/Cookies/Cookies'

export default function MainPage() {
    const [count, setCount] = useState(0)
    const [countState, setCountState] = useState(false)

    const counter = () => {
        setCount(count + 1)
    }

    setTimeout(() => {
        if (count == 1) {
            setCountState(true)

        }
    }, 1)

    return (
        <div>
            <div style={{ position: "absolute", left: "0" }}>
                <Header />
                <Navbar count={count} />
            </div>
            <BigSwiper />
            <div className='backgroundWrapper'> </div>
            <SwiperStories />
            <Pizza counter={counter} />
            <FilterPizzas />
            <ButtonBasket count={count} countState={countState} />
            <Cookies />
        </div>
    )
}
