import React from 'react'
import FoodItem from '../FoodItem/FoodItem'
import cl from './FoodList.module.sass'

export default function FoodList({ result }) {
  return (
    <div className={cl.foodWrapper}>
      {result.map(food => (
        <FoodItem food={food} key={food.id} />
      ))}
    </div>
  )
}
