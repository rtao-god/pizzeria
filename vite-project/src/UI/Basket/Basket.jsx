import React from 'react'
import './Basket.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import ModuleButtonBasket from './ModuleButtonBasket'

export default function Basket(props) {
    return (
        <button className="basket">
            <span className="basketContent">
                <FontAwesomeIcon icon={faBasketShopping} />
                <p style={{ color: "white" }} className="basketText">
                    {props.title}
                    <ModuleButtonBasket />
                </p>
            </span>
        </button>
    )
}