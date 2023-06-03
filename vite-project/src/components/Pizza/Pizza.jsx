import React, { useState } from 'react'
import PizzaForm from './PizzaForm'
import "@mainSass/main.sass"
import FilterPizzas from '@mainPage/FilterPizzas/FilterPizzas'

export default function Pizza({ counter }) {

    return (
        <div className='pizza'>
            <PizzaForm counter={counter} />
        </div>
    )
}
