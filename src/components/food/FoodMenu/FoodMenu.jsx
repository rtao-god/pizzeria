import React from 'react'
import cl from './FoodMenu.module.sass'
import FoodList from '../FoodList/FoodList'

export default function Pizza({ result }) {
  return (
    <div>
      <div className={cl.titleFoodWrapper}>
        <h1 className={cl.titleFood}> PIZZA </h1>
      </div>
      <FoodList result={result} />
    </div>
  )
}
