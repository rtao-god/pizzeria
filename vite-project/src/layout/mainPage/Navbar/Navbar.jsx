import React, { useRef, useState } from 'react'

import cl from './Navbar.module.css'
import OpenModulWindow from './OpenModalWindow'

import Basket from '@UI/Basket/Basket'
import ModuleButtonBasket from '@UI/Basket/ModuleButtonBasket'

export default function Navbar(props) {
  const [stateModalWindow, setStateModalWindow] = useState(true)

  const stickAndCountRef = useRef()

  const basketButton = document.querySelector("._basket_18btz_1")

  setTimeout(() => {
    if (props.count >= 1) {
      stickAndCountRef.current.style.display = "flex"
      basketButton.style.width = "170px"
    }
  }, 1)

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
      </div>
    </div>
  )
}
