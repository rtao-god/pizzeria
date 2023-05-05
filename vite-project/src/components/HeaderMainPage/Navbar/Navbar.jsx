import React from 'react'
import cl from './Navbar.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <div className={cl.container}>
      <a href="#" style={{ paddingLeft: "0" }}> PIZZA </a>
      <a href="#"> BURGERS </a>
      <a href="#"> STOCK </a>
      <a href="#"> WINGS </a>
      <a href="#"> SNACKS </a>
      <a href="#"> DESSERT </a>
      <a href="#"> DRINKS </a>
      <a href="#"> ICE PIZZA </a>

      <button> <FontAwesomeIcon icon={faBasketShopping} /> BASKET </button>
    </div>
  )
}
