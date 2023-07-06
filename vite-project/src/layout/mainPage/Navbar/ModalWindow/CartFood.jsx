import React from 'react'
import CartFoodForm from './CartFoodForm'

export default function CartFood({ setActive, getDefaultPrice, basket, increase, decrement }) {
    return (
        <div>
            {!basket.length
                ? <span> {setActive(false)} </span>
                : <span>
                    {basket.map(bas =>
                        <CartFoodForm
                            getDefaultPrice={getDefaultPrice} bas={bas} key={bas.id}
                            basket={basket} increase={increase} decrement={decrement}
                        />
                    )}
                </span>
            }
        </div>
    )
}