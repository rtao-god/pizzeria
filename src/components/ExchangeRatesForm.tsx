import React, { FC, useState } from 'react'

const initState = {
    ruble: 60,
    dollar: 60
}

interface RubleToDollar {
    ruble: number
    dollar: number
}

const ConvertCurrencies: FC = () => {
  /*   const [rubleNumber, setRubleNumber] = useState(50)

    const increment = (e:OnClickEvent<>) => {
        e.preventDefault()
        setRubleNumber(rubleNumber + 100)
    } */

    return (
        <form>
            {/* <input value={100} name="amount" type="text" placeholder="Enter amount" />
            <button onClick={increment}></button> */}
            {/* <span> {rubleNumber} </span> */}
            {/* <span> 10 $ </span>
            <span> 10 ₽ </span> */}
        </form>
    )
}

export default ConvertCurrencies 