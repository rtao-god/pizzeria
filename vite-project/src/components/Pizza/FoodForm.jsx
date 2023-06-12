import React from 'react'
import { allFoods } from './sortingPhotos/sort'
import Basket from '@UI/Basket/Basket'

export default function FoodForm({ counter }) {
    return (
        <div className='cartItems'>
            {allFoods.map(el =>
                <div className={"cart cart_" + el.id}>
                    <img className="imgFoodItem" src={'assets/photo/food/' + el.food + '-optimize.jpg'} alt={el.pizza} />
                    <div className='cartContent'>
                        <h3> Пицца Венеция </h3>
                        <p> {el.ingredients} </p>
                        <button> Edit </button>
                        <div className='params'>
                            <input type='text' value="Traditional" />
                            <input type='text' value="30cm" />
                        </div>
                        <div className='footerCart'>
                            <p className='priceFood'> 578$ </p>
                            <button onClick={() => counter()}>
                                <Basket title={"To basket"} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
