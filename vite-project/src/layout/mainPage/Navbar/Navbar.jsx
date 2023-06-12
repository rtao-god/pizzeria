import React, { useRef } from 'react'
import cl from './Navbar.module.css'

import ModulWindow from './ModalWindow/ModalWindow'

import Basket from '@UI/Basket/Basket'
import ModuleButtonBasket from '@UI/Basket/ModuleButtonBasket'

export default function Navbar({ count, active, setActive }) {
  const stickAndCountRef = useRef()

  const basketButton = document.querySelector("._basket_18btz_1")

  setTimeout(() => {
    if (count >= 1) {
      stickAndCountRef.current.style.display = "flex"
      basketButton.style.width = "165px"
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
        <div onClick={() => setActive(true)} style={{ display: "flex", marginLeft: "235px" }}>
          <div>
            <Basket title={"BASKET"} />
          </div>
          <span ref={stickAndCountRef} style={{ display: "none", position: "relative", left: "-23px" }}>
            <ModuleButtonBasket stick={"|"} count={count} />
          </span>
        </div>

        {active
          ? <ModulWindow active={active} setActive={setActive} />
          : null
        }
      </div>
    </div>
  )
}
