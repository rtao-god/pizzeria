import React, { useContext, useEffect, useRef, useState } from 'react'
import cl from "./stylesModal.module.sass"
import "@assets/PF DIN/stylesheet.css"
import Header from "@mainPage/Header/Header"
import Navbar from "@mainPage/Navbar/Navbar"
import Footer from '@mainPage/Footer/Footer'
import Basket from '@UI/Basket/Basket'
import { useLocation } from 'react-router-dom'
import { Context } from '@context'
import { allFoods } from '@components/Pizza/foods/food'
import ModalPreviewToppings from './ModalPreviewToppings'

export default function ModalPreview() {
  const context = useContext(Context)

  const checkRef = useRef(null)
  const arrowRef = useRef(null)
  const toppingsTypeRef = useRef(null)

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

  const [toppingsBool, setToppingsBool] = useState([
    { meat: false, vegetables: false, cheeses: false, sauces: false },
  ])

  useEffect(() => {
    const nodeList = toppingsTypeRef.current.querySelectorAll("h3")
    const nodeListToArr = Array.from(nodeList)
    const arrClick = []

    nodeListToArr.map(child => {
      child.style.borderBottom = "0px solid rgb(112, 164, 1)"
    })

    toppingsTypeRef.current.addEventListener("click", e => {
      e.target.style.borderBottom == "0px solid rgb(112, 164, 1)"
        ? e.target.style.borderBottom = "1px solid rgb(112, 164, 1)"
        : e.target.style.borderBottom = "0px solid rgb(112, 164, 1)"

      arrClick.push(e.target)
      if (arrClick.at(-2).style.borderBottom == "1px solid rgb(112, 164, 1)") arrClick.at(-2).style.borderBottom = "0px solid rgb(112, 164, 1)"

      switch (e.target.textContent.trim()) {
        case "Meat":
          return setToppingsBool({ meat: true })

        case "Vegetables":
          return setToppingsBool({ vegetables: true })

        case "Cheeses":
          return setToppingsBool({ cheeses: true })

        case "Sauces":
          return setToppingsBool({ sauces: true })

        default:
          return console.log('default')
      }
    })
  }, [toppingsTypeRef.current])

  const [toppings, setToppings] = useState({
    meat: [
      { img: "2490/de2ad77dec6c6faf8cf932f55f54c70c", title: "Bacon", price: 99, count: 0 },
      { img: "2472/2fd2d87667c83827caeaaa053fb6a601", title: "Pork ham", price: 99, count: 0 },
      { img: "2476/8eded6d9000b5938e0dda3b96d7e9aab", title: "Pepperoni sausage", price: 99, count: 0 },
      { img: "2480/f0c504ffc6ae52e53ae17cb7426cfc54", title: "Meat mix", price: 99, count: 0 },
    ],
    vegetables: [
      { img: "2478/d1dff7233b77423eed0d490ba372d950", title: "Red onion", price: 79, count: 0 },
      { img: "2474/1b4fabf90ae8134a821f127ca6de91b6", title: "Mushrooms", price: 79, count: 0 },
      { img: "2486/40ed3ddd8c568744e147dd62142e7d30", title: "Jalapeno pepper", price: 79, count: 0 },
      { img: "2484/7af78bc33b2873af8477439478a12557", title: "Olives", price: 79, count: 0 },
      { img: "2494/1850ceab39fbec6ce27a09b2ffb895e8", title: "pineapples", price: 79, count: 0 },
      { img: "2482/d553773e96fb9fb7b57a3aa1b393c5ed", title: "Vegetable mix", price: 79, count: 0 },
    ],
    cheeses: [
      { img: "2492/02439b066af72d3224f870df6f17018d", title: "Mozzarella cheese", price: 89, count: 0 },
    ],
    sauces: [
      { img: "2488/36a0f5c354c9830978f46b84037040aa", title: "Barbecue sauce", price: 69, count: 0 },

    ]
  })
  
  return (
    <div>
      <div style={{ position: "fixed", top: "0", left: "0", zIndex: "1" }}>
        <Header />
        <Navbar basket={context.basket} setBasket={context.setBasket} active={context.activeModal} setActive={context.setActiveModal} countTotal={context.countTotal} setCountTotal={context.setCountTotal} />
      </div>

      <div className={cl.preview}>
        <img className={cl.imgFood} src={"/photo/food/" + found.img + "-optimize.jpg"} alt="food" />
        <div className={cl.previewContent}>
          <h4> {found.title} </h4>
          <p> {found.ingredients} </p>
          <div style={{ display: 'flex', flexDirection: "column" }}>
            <div className={cl.dropdown}>
              <div className={cl.addToppings}>
                <p> Add more toppings </p>
                <span ref={arrowRef} onClick={() => "lol"}> {'>'} </span>
              </div>
              <div className={cl.dropdownContent}>
                <div className={cl.toppingsType}>
                  <span ref={toppingsTypeRef}>
                    <h3> Meat </h3>
                    <h3> Vegetables </h3>
                    <h3> Cheeses </h3>
                    <h3> Sauces </h3>
                    <h3> Remove from composition </h3>
                  </span>
                </div>
                {toppingsBool.meat &&
                  toppings.meat.map(toppingsEl =>
                    <ModalPreviewToppings toppingsEl={toppingsEl} />
                  )
                }
                {toppingsBool.vegetables &&
                  toppings.vegetables.map(toppingsEl =>
                    <ModalPreviewToppings toppingsEl={toppingsEl} />
                  )
                }
                {toppingsBool.cheeses &&
                  toppings.cheeses.map(toppingsEl =>
                    <ModalPreviewToppings toppingsEl={toppingsEl} />
                  )
                }
                {toppingsBool.sauces &&
                  toppings.sauces.map(toppingsEl =>
                    <ModalPreviewToppings toppingsEl={toppingsEl} />
                  )
                }
              </div>
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
