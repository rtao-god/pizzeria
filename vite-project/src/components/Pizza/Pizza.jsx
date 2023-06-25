import React from 'react'

import "@mainSass/main.sass"

import filterFood from '@mainPage/filterFood/filterFood'
import FoodList from './FoodList'

export default function Pizza({ addFoodInBasket, foods }) {
    return (
        <div>
            <div className='titleFoodWrapper'>
                <h1 className='titleFood'> PIZZA </h1>
            </div>
            <FoodList addFoodInBasket={addFoodInBasket} foods={foods} />
        </div>
    )
}