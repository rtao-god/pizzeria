import React from 'react'
import MyFood from './MyFood'
import cl from "./style.module.sass"

export default function FoodList({ result }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className={cl.foodWrapper}>
        {result.map(food =>
          <MyFood food={food} key={food.id} />
        )}
      </div>
    </div>
  )
}