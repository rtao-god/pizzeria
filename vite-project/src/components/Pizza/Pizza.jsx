import React from 'react'
import "@mainSass/main.sass"
import FoodList from './FoodList'

export default function Pizza({ result, addFoodToBasket }) {
    return (
        <div>
            <div className='titleFoodWrapper'>
                <h1 className='titleFood'> PIZZA </h1>
            </div>
            <FoodList result={result} addFoodToBasket={addFoodToBasket} />
        </div>
    )
}