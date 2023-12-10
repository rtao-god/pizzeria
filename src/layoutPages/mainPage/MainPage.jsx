import React, { useContext, useEffect } from 'react'

import Header from "@mainPage/Header/Header"
import Navbar from "@mainPage/Navbar/Navbar"

import MainSwiper from "@mainPage/Swipers/MainSwiper/Swiper"
import SwiperStories from "@mainPage/Swipers/SwiperStories/Swiper"

import ButtonBasket from '@controls/BasketButton/BasketButton'
import Cookies from '@mainPage/Cookies/Cookies'
import Footer from '@mainPage/Footer/Footer'

import FoodCart from "@pages/FoodCart"
import FoodFilter from '@components/food/FoodFilter/FoodFilter'

import { Context } from '@context'

export default function MainPage() {
  const context = useContext(Context)

  const app = document.getElementsByClassName("App")

  const styleFalse = () => {
    app[0].style.width = "1100px"
    app[0].style.margin = "auto auto"
  }

  useEffect(() => {
    if (location.pathname == "/main") styleFalse()
  }, [location.pathname])

  return (
    <>
      <div style={{ position: "absolute", left: "0"}}> 
        <Header />
        <Navbar basket={context.basket} setBasket={context.setBasket} countTotal={context.countTotal} setCountTotal={context.setCountTotal} active={context.activeModal} setActive={context.setActiveModal} />
      </div>
      <MainSwiper />
      <SwiperStories />
      <FoodFilter allFoods={context.allFoods} setResult={context.setResult} />
      <FoodCart result={context.result} />
      <Footer />
      <ButtonBasket countTotal={context.countTotal} countState={context.countState} setCountState={context.setCountState} active={context.activeModal} setActive={context.setActiveModal} />
      <Cookies />
    </>
  )
}