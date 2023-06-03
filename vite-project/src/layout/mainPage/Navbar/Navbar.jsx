import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import cl from './Navbar.module.css'
import OpenModulWindow from './OpenModalWindow'

export default function Navbar(props) {
  const [stateModalWindowBasket, setStateModalWindowBasket] = useState(true)

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
      </div>
    </div>
  )
}

