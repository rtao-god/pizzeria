import React, { useState } from 'react'
import './button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import CountButtonBasket from "./CountButtonBasket"

export default function ButtonBasket(props) {
    const [countState, setCountState] = useState(false)

    if (countState === false) {
        setCountState(true)
        console.log(countState)
        console.log(props.count)
    }

    return (
        <div id='ButtonBasket'>
            {countState
                ? <p> eee </p>
                : <p> lol </p>
            }
            <CountButtonBasket count={props.count} />
            {props.count} 
            <FontAwesomeIcon style={{ marginRight: "0", width: "23px", height: "20px" }} icon={faBasketShopping} />
        </div>
    )
}


