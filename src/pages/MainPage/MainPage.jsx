import React, { useContext, useEffect } from 'react'

import Header from '@layout/Header/Header'
import Navbar from '@layout/Navbar/Navbar'

import MainSwiper from '@layout/swipers/MainSwiper/Swiper'
import SwiperStories from '@layout/swipers/SwiperStories/Swiper'

import FoodMenu from '@components/food/FoodMenu/FoodMenu'
import FoodFilter from '@components/food/FoodFilter/FoodFilter'

import BasketButton from '@layout/BasketButton/BasketButton'
import Cookies from '@layout/Cookies/Cookies'
import Footer from '@layout/Footer/Footer'

import { Context } from '@context'

export default function MainPage() {
  const context = useContext(Context)

  const app = document.getElementsByClassName('App')

  const styleFalse = () => {
    app[0].style.width = '1100px'
    app[0].style.margin = 'auto auto'
  }

  useEffect(() => {
    if (location.pathname == '/main') styleFalse()
  }, [location.pathname])

  return (
    <>
      <div style={{ position: 'absolute', left: '0' }}>
        <Header />
        <Navbar
          basket={context.basket}
          setBasket={context.setBasket}
          countTotal={context.countTotal}
          setCountTotal={context.setCountTotal}
          active={context.activeModal}
          setActive={context.setActiveModal}
        />
      </div>
      <MainSwiper />
      <SwiperStories />
      <FoodFilter allFoods={context.allFoods} setResult={context.setResult} />
      <FoodMenu result={context.result} />
      <BasketButton
        countTotal={context.countTotal}
        countState={context.countState}
        setCountState={context.setCountState}
        active={context.activeModal}
        setActive={context.setActiveModal}
      />
      <Cookies />
      <Footer />
    </>
  )
}
