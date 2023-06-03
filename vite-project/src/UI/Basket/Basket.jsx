import React from 'react'
import cl from './Basket.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
<<<<<<< HEAD
import ModuleButtonBasket from './ModuleButtonBasket'

export default function Basket(props) {
=======

export default function Basket() {
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
    return (
        <button className={cl.basket}>
            <div className={cl.basketContent}>
                <FontAwesomeIcon icon={faBasketShopping} />
<<<<<<< HEAD
                <p style={{ color: "white" }} className={cl.basketText}>
                    {props.title}
                    <ModuleButtonBasket />
                </p>
=======
                <p style={{ color: "white" }} className={cl.basketText}> To basket </p>
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
            </div>
        </button>
    )
}
