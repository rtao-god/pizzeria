import React from 'react'
import cl from "./style.module.sass"
import FoodList from './FoodList'

export default function Pizza({ result, addFoodToBasket }) {
    return (
        <div>
            <div className={cl.titleFoodWrapper}>
                <h1 className={cl.titleFood}> PIZZA </h1>
            </div>
            <FoodList result={result} addFoodToBasket={addFoodToBasket} />
        </div>
    )
}