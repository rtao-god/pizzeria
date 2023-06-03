import React, { useState } from 'react'
import './button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import CountButtonBasket from "./CountButtonBasket"

export default function ButtonBasket(props) {

    return (
        <div id='ButtonBasket'>
<<<<<<< HEAD
            {props.countState
                ? <CountButtonBasket count={props.count} />
                : <p> </p>
            }

=======
            <CountButtonBasket countCard={props.countCard} />
>>>>>>> 0657087b7ba6da58ef90271e3a43ef862a1f64d5
            <FontAwesomeIcon style={{ marginRight: "0", width: "23px", height: "20px" }} icon={faBasketShopping} />
        </div>
    )
}


