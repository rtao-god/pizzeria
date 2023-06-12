import React, { useState } from 'react'
import FoodForm from './FoodForm'
import "@mainSass/main.sass"
import filterFood from '@mainPage/filterFood/filterFood'

export default function Pizza({ counter }) {
    return (
        <div className='pizza'>
            <div className='titleFoodWrapper'>
                <h1 className='titleFood'> PIZZA </h1>
            </div>
            <FoodForm counter={counter} />
        </div>
    )
}