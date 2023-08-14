import React, { useContext, useEffect, useRef } from 'react'
import cl from "./stylesModal.module.sass"
import "@assets/PF DIN/stylesheet.css"
import Header from "@mainPage/Header/Header"
import Navbar from "@mainPage/Navbar/Navbar"
import Footer from '@mainPage/Footer/Footer'
import Basket from '@UI/Basket/Basket'
import { useLocation } from 'react-router-dom'
import { Context } from '@context'
import { allFoods } from '@components/Pizza/foods/food'

export default function ModalPreview() {
  const context = useContext(Context)

  const checkRef = useRef(null)

  const cheeseFunc = () => {
    checkRef.current.style.display == "block"
      ? checkRef.current.style.display = "none"
      : checkRef.current.style.display = "block"
  }

  let location = useLocation()

  const found = allFoods.find(food => {
    return "/preview/" + food.id === location.pathname
  })

  const app = document.getElementsByClassName("App")

  const styleTrue = () => {
    app[0].style.width = "0"
    app[0].style.margin = "0"
  }

  useEffect(() => {
    allFoods.map(food => {
      if (location.pathname == "/preview/" + food.id) styleTrue()

    })
    checkRef.current.style.display = "block"
  }, [location.pathname])

  return (
    <div>
      <div style={{ position: "fixed", top: "0", left: "0", zIndex: "1" }}>
        <Header />
        <Navbar basket={context.basket} setBasket={context.setBasket} active={context.activeModal} setActive={context.setActiveModal} countTotal={context.countTotal} setCountTotal={context.setCountTotal} />
      </div>

      <div className={cl.preview}>
        <img src={"/photo/food/" + found.img + "-optimize.jpg"} alt="food" />
        <div className={cl.previewContent}>
          <h4> {found.title} </h4>
          <p> {found.ingredients} </p>
          <div style={{ display: 'flex', flexDirection: "column" }}>
            <div className={cl.addToppings}>
              <p> Add more toppings </p>
              <span> {'>'} </span>
            </div>
            <span> Options </span>
          </div>
          <input type="text" tabIndex="0" value="30cm" aria-autocomplete="list" aria-label="Select size" readOnly />
          <input type="text" tabIndex="0" value="Traditional" aria-autocomplete="list" aria-label="Select size" readOnly />
          <div className={cl.cheese} onClick={cheeseFunc}>
            <input type="checkBox" />
            <span>
              <svg ref={checkRef} viewBox="0 0 14 10">
                <path fill="rgb(112, 164, 1)" d="M5 7.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683418 14.0976 1.31658 13.7071 1.70711L5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683418 3.90237 1.31658 3.90237 1.70711 4.29289L5 7.58579Z"></path>
              </svg>
            </span>
            <span> Double cheese </span>
          </div>
          <span onClick={() => context.addFoodToBasket(found)}>
            <Basket title={"To basket"} />
          </span>
          <span style={{ fontWeight: "600", paddingLeft: "1.5rem", fontSize: "1.188em" }}> 500 $ </span>
        </div>
      </div>

      <Footer />
    </div >
  )
}
