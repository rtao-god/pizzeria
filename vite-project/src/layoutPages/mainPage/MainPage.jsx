import React, { useState } from 'react'

<<<<<<< HEAD
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

=======
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

>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
    return (
        <div>
            <div style={{ position: "absolute", left: "0" }}>
                <Header />
<<<<<<< HEAD
                <Navbar count={count} />
=======
                <Navbar counterFun={counterFun} />
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
            </div>
            <BigSwiper />
            <div className='backgroundWrapper'> </div>
            <SwiperStories />
<<<<<<< HEAD
            <Pizza counter={counter} />
            <FilterPizzas />
            <ButtonBasket count={count} countState={countState} />
=======
            <Pizza />
            <FilterPizzas />
            <ButtonBasket countCard={countCard} />
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
            <Cookies />
        </div>
    )
}
