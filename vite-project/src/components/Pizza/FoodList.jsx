import React from 'react'
import MyFood from './MyFood'

export default function FoodList({ result, addFoodToBasket }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div className='foodWrapper'>
        {result.map(food =>
          <MyFood food={food} key={food.id} addFoodToBasket={addFoodToBasket} />
        )}
      </div>
    </div>
  )
}