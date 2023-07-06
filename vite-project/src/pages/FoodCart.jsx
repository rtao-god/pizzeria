import React from 'react'
import Pizza from '../components/Pizza/Pizza'

function Posts({ result, addFoodToBasket }) {
    return (
        <Pizza result={result} addFoodToBasket={addFoodToBasket} />
    )
}

export default Posts