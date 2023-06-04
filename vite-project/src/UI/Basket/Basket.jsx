import React from 'react'
import cl from './Basket.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import ModuleButtonBasket from './ModuleButtonBasket'

export default function Basket(props) {
    return (
        <button className={cl.basket}>
            <div className={cl.basketContent}>
                <FontAwesomeIcon icon={faBasketShopping} />
                <p style={{ color: "white" }} className={cl.basketText}>
                    {props.title}
                    <ModuleButtonBasket />
                </p>
            </div>
        </button>
    )
}
