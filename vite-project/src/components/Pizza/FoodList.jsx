import React from 'react'
import MyFood from './MyFood'

export default function FoodList({ addFoodInBasket, foods }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {!foods.length
        ? <h1> Foods not found !!! </h1>
        : <div className='foodWrapper'>
          {foods.map(food =>
            <MyFood food={food} addFoodInBasket={addFoodInBasket} />
          )}
        </div>
      }
    </div>
  )
}