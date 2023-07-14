import React, { useState } from 'react'
import './button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import CountButtonBasket from "./CountButtonBasket"
import ModalWindow from '../Navbar/ModalWindow/ModalWindow'

export default function ButtonBasket({ countTotal, countState, setCountState, active, setActive }) {
    if (countTotal <= 0) {
        setCountState(false)
    }
    
    return (
        <div onClick={() => setActive(true)} id='buttonBasket'>
            {countState
                ? <CountButtonBasket countTotal={countTotal} />
                : null
            }
            {active
                ? <ModalWindow />
                : null
            }
            <FontAwesomeIcon style={{ marginRight: "0", width: "23px", height: "20px" }} icon={faBasketShopping} />
        </div>
    )
}


