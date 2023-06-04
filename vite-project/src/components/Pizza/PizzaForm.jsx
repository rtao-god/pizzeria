import React, { createRef, useState } from 'react'
import { allFoods } from "./sortingPhotos/sort"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import Navbar from "@mainPage/Navbar/Navbar"
import Basket from '@UI/Basket/Basket'

export default function PizzaForm({ counter }) {

  const allFood = allFoods.map((el) =>
    <div className='card'>
      <img src={'assets/photo/food/' + el.food + '-optimize.jpg'} alt={el.pizza} />

      <div className='cardContent'>
        <h3> Пицца Венеция </h3>
        <p> {el.ingredients} </p>
        <button> Edit </button>
        <div className='params'>
          <input type='text' value="Traditional" />
          <input type='text' value="30cm" />
        </div>
        <div className='footerCard'>
          <p className='priceFood'> 578$ </p>
          <button onClick={() => counter()}>
            <Basket />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className='titleFoodWrapper'>
        <h1 className='titleFood'> PIZZA </h1>
      </div>

      <div className='cardWrapper'>
        <div className='count'>
          <FontAwesomeIcon icon={faBasketShopping} />
        </div>
        {allFood}
      </div>
    </div>
  )
}