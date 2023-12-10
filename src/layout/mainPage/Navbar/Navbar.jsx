import React, { useEffect, useRef } from 'react';
import cl from './Navbar.module.css';
import ModalWindow from './ModalWindow/ModalWindow';
import BasketButton from '@common/controls/BasketButton/BasketButton';

export default function Navbar({ basket, countTotal, setCountTotal, active, setActive }) {
  const basketButtonRef = useRef();

  useEffect(() => {
    if (countTotal >= 1) {
      basketButtonRef.current.style.width = "165px";
    } else {
      basketButtonRef.current.style.width = "137.75px";
    }
  }, [countTotal]);


  return (
    <div>
      <div className={cl.navbar}>
        <div>
          <a href="#" style={{ paddingLeft: "0" }}> PIZZA </a>
          <a href="#"> BURGERS </a>
          <a href="#"> STOCK </a>
          <a href="#"> WINGS </a>
          <a href="#"> SNACKS </a>
          <a href="#"> DESSERT </a>
          <a href="#"> DRINKS </a>
          <a href="#"> ICE PIZZA </a>
        </div>
        <div onClick={() => setActive(true)} style={{ display: "flex" }}>
          <div ref={basketButtonRef}>
            <BasketButton countTotal={countTotal} title={"BASKET"} />
          </div>
        </div>
        {active &&
          <ModalWindow countTotal={countTotal} setCountTotal={setCountTotal} basket={basket} active={active} setActive={setActive} />
        }
      </div>
    </div>
  )
}
