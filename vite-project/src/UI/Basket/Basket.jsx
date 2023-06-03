import React from 'react'
import cl from './Basket.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

export default function Basket() {
    return (
        <button className={cl.basket}>
            <div className={cl.basketContent}>
                <FontAwesomeIcon icon={faBasketShopping} />
                <p style={{ color: "white" }} className={cl.basketText}> To basket </p>
            </div>
        </button>
    )
}
