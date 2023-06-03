import React from 'react'
import PizzaForm from './PizzaForm'
import "@mainSass/main.sass"
import FilterPizzas from '@mainPage/FilterPizzas/FilterPizzas'

export default function Pizza(props) {
    return (
        <div className='pizza'>
            <PizzaForm setCountCard={props.setCountCard} />
        </div>
    )
}
