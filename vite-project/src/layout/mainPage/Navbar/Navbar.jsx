import React, { useEffect, createRef } from 'react'
import cl from './Navbar.module.css'

import ModulWindow from './ModalWindow/ModalWindow'
import Basket from '@UI/Basket/Basket'
import ModuleButtonBasket from '@UI/Basket/ModuleButtonBasket'

export default function Navbar({ basket, countTotal, setCountTotal, active, setActive }) {
  const stickAndCountRef = createRef()
  const basketButton = document.getElementsByClassName("basket")

  useEffect(() => {
    if (countTotal >= 1) {
      stickAndCountRef.current.style.display = "flex"
      basketButton[0].style.width = "165px"
    } else {
      stickAndCountRef.current.style.display = "none"
      basketButton[0].style.width = "137.75px"
    }
  }, [countTotal])

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
          <Basket title={"BASKET"} />
          <span ref={stickAndCountRef} style={{ display: "none", position: "relative", left: "-23px" }}>
            <ModuleButtonBasket stick={"|"} countTotal={countTotal} />
          </span>
        </div>

        {active
          ? <ModulWindow countTotal={countTotal} setCountTotal={setCountTotal} basket={basket} active={active} setActive={setActive} />
          : null
        }
      </div>
    </div>
  )
}
