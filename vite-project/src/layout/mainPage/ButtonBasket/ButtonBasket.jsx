import React, { useState } from 'react'
import './button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import CountButtonBasket from "./CountButtonBasket"

export default function ButtonBasket(props) {

    return (
        <div id='ButtonBasket'>
            {props.countState
                ? <CountButtonBasket count={props.count} />
                : <p> </p>
            }
            <FontAwesomeIcon style={{ marginRight: "0", width: "23px", height: "20px" }} icon={faBasketShopping} />
        </div>
    )
}


