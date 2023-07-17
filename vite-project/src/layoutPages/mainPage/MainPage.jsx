import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "@mainPage/Header/Header.jsx"
import Navbar from "@mainPage/Navbar/Navbar"
import MainSwiper from "@mainPage/Swipers/MainSwiper/Swiper"
import SwiperStories from "@mainPage/Swipers/SwiperStories/Swiper"
import Footer from '@mainPage/Footer/Footer'
import ButtonBasket from '@mainPage/ButtonBasket/ButtonBasket.jsx'
import Cookies from '@mainPage/Cookies/Cookies'
import FoodCart from "@pages/FoodCart"
import FilterFood from '@components/Pizza/FilterFood'
import { allFoods } from '@components/Pizza/foods/food'

export default function MainPage() {
  const [basket, setBasket] = useState([])
  const [countTotal, setCountTotal] = useState(basket.length)
  const [countState, setCountState] = useState(false)
  const [result, setResult] = useState(allFoods)
  const [activeModal, setActiveModal] = useState(false)
  let productAlreadyInCart = false

  const addFoodToBasket = food => {
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
        <Navbar basket={basket} setBasket={setBasket} countTotal={countTotal} setCountTotal={setCountTotal} addFoodToBasket={addFoodToBasket} active={activeModal} setActive={setActiveModal} />
      </div>
      <MainSwiper />
      <SwiperStories />
      <FilterFood allFoods={allFoods} setResult={setResult} />
      <FoodCart result={result} addFoodToBasket={addFoodToBasket} />
      <Footer />
      <ButtonBasket countTotal={countTotal} countState={countState} setCountState={setCountState} active={activeModal} setActive={setActiveModal} />
      <Cookies />
    </div>
  )
}