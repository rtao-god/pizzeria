import React, { useState } from 'react'
import cl from "./ModalWindow.module.sass"
import CartFoodForm from './CartFoodForm'

export default function CartFood({ countTotal, setCountTotal, setActive, getDefaultPrice, getCartAmount, copy, basket, setBasket, increase, decrement }) {
    return (
        <div>
            {!basket.length
                ? <div> {setActive(false)} </div>
                : <div>
                    {basket.map(bas =>
                        <CartFoodForm
                            getDefaultPrice={getDefaultPrice} getCartAmount={getCartAmount}
                            copy={copy} bas={bas} basket={basket} setBasket={setBasket} increase={increase}
                            decrement={decrement} countTotal={countTotal} setCountTotal={setCountTotal}
                        />
                    )}
                </div>
            }
        </div>
    )
}