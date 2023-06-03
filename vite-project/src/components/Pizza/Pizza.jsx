<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react'
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
import PizzaForm from './PizzaForm'
import "@mainSass/main.sass"
import FilterPizzas from '@mainPage/FilterPizzas/FilterPizzas'

<<<<<<< HEAD
export default function Pizza({ counter }) {

    return (
        <div className='pizza'>
            <PizzaForm counter={counter} />
=======
export default function Pizza(props) {
    return (
        <div className='pizza'>
            <PizzaForm setCountCard={props.setCountCard} />
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
        </div>
    )
}
