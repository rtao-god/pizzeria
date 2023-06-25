import React from 'react'

import { allFoods } from '../components/Pizza/foods/food'
import Pizza from '../components/Pizza/Pizza'

function Posts({ addFoodInBasket }) {
    const foods = allFoods

    return (
        <Pizza addFoodInBasket={addFoodInBasket} foods={foods} />
    )
}

export default Posts