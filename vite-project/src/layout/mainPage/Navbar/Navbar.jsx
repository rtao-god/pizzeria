<<<<<<< HEAD
import React, { useRef, useState } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import cl from './Navbar.module.css'
import OpenModulWindow from './OpenModalWindow'
<<<<<<< HEAD
import Basket from '@UI/Basket/Basket'
import ModuleButtonBasket from '@UI/Basket/ModuleButtonBasket'

export default function Navbar(props) {
  const [stateModalWindow, setStateModalWindow] = useState(true)

  const stickAndCountRef = useRef()

  const basketButton = document.querySelector("._basket_1jmlu_1")
  
  setTimeout(() => {
    if (props.count >= 1) {
      stickAndCountRef.current.style.display = "flex"
      basketButton.style.width = "170px"
    }
  }, 1)
=======

export default function Navbar(props) {
  const [stateModalWindowBasket, setStateModalWindowBasket] = useState(true)
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5

  return (
    <div>
      <div className={cl.navbar}>
        <a href="#" style={{ paddingLeft: "0" }}> PIZZA </a>
        <a href="#"> BURGERS </a>
        <a href="#"> STOCK </a>
        <a href="#"> WINGS </a>
        <a href="#"> SNACKS </a>
        <a href="#"> DESSERT </a>
        <a href="#"> DRINKS </a>
        <a href="#"> ICE PIZZA </a>
<<<<<<< HEAD

        <div onClick={() => setStateModalWindow(false)} style={{ display: "flex" }}>
          <div>
            <Basket title={"BASKET"} />
          </div>
          <span ref={stickAndCountRef} style={{ display: "none", position: "relative", left: "-23px" }}>
            <ModuleButtonBasket stick={"|"} count={props.count} />
          </span>
        </div>

        {stateModalWindow
          ? null
          : <OpenModulWindow setStateModalWindow={setStateModalWindow} />
        }

=======
        {stateModalWindowBasket
          ?
          <button className={cl.basketBtn} onClick={() => setStateModalWindowBasket(false)} style={{ display: "flex" }}>
            <FontAwesomeIcon icon={faBasketShopping} />
            <p> BASKET | {props.countCard} </p>
          </button>

          :
          <div>
            <button className={cl.basketBtn} onClick={() => setStateModalWindowBasket(false)} style={{ display: "flex" }}>
              <FontAwesomeIcon icon={faBasketShopping} />
              <p> BASKET | {props.countCard} </p>
            </button>
            <OpenModulWindow />
          </div>
        }
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
      </div>
    </div>
  )
}

