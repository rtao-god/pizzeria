import React, { useEffect } from 'react'
import cl from "./ModalWindow.module.sass"
import { useState } from 'react'

export default function CartFoodForm({ countTotal, setCountTotal, getDefaultPrice, getCartAmount, bas, basket, setBasket, increase, decrement }) {
    const arr = []
    basket.map(el => {
        arr.push(el.price)
    })

    useEffect(() => {
        getDefaultPrice({ myDefaultPrice: bas.price })
        const duplicateFoodPrice = () => {
            if (bas.count >= 2) {
                setSum(sum + bas.price * bas.count)
                setPrice(bas.price * bas.count)
            }
        }
        duplicateFoodPrice()
        getCartAmount(sum)
    }, [])

    const [count, setcount] = useState(bas.count)
    const [price, setPrice] = useState(bas.price)
    const priceDefault = bas.price
    const [sum, setSum] = useState(arr.reduce(function (a, b) { return (a + b) }))
    console.log("sum", sum, "price", price, "priceDefault", priceDefault)

    function increaseCount() {
        bas.count++
        setSum(sum + bas.price)
        setPrice(bas.price * bas.count)
        setcount(count + 1)
        setCountTotal(countTotal + 1)
    }

    console.log("countTotal", countTotal)

    function decrementCount() {
        if (bas.count >= 2) {
            bas.count--
            setPrice(price - priceDefault)
            setcount(count - 1)
            setCountTotal(countTotal - 1)

        } else {
            const index = basket.indexOf(bas)
            setCountTotal(countTotal - 1)
            basket.splice(index, 1)
        }
    }

    return (
        <div className={cl.cartFood}>
            <img className={cl.miniFoodImg} src={"assets/photo/food/" + bas.img + "-optimize.jpg"} alt="Your basket" />
            <div className={cl.cartDescription}>
                <h3> Pizza Venice </h3>
                <p> 30 cm, traditional </p>
            </div>
            <div className={cl.cartSvg}>
                <span className={cl.counterAndPrice}>
                    <span className={cl.counter}>
                        <span style={{ marginLeft: "40px" }}>
                            <span onClick={decrementCount}>
                                <svg onClick={decrement} fill="rgb(120, 131, 140)" version="1.1" xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 8.32 8.32" enable-background="new 0 0 512 512" xml: space="preserve"><path points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812 " d="M5.447 2.506L4.16 3.792L2.873 2.506L2.506 2.873L3.792 4.16L2.506 5.447L2.873 5.814L4.16 4.528L5.447 5.814L5.814 5.447L4.528 4.16L5.814 2.873Z" /><path d="M4.16 0C1.862 0 0 1.862 0 4.16s1.862 4.16 4.16 4.16 4.16 -1.862 4.16 -4.16S6.458 0 4.16 0zm0 7.67c-1.939 0 -3.51 -1.571 -3.51 -3.51S2.221 0.65 4.16 0.65s3.51 1.571 3.51 3.51 -1.571 3.51 -3.51 3.51z" /></svg>
                            </span>
                            <span> {count} </span>
                            <span onClick={increaseCount}>
                                <svg onClick={() => increase()} fill="rgb(112, 164, 1)" width="16" height="16" viewBox="0 0 0.39 0.39" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.358.195a.162.162 0 1 1-.325 0c0-.09.072-.162.162-.162s.163.073.163.163zm-.033 0a.13.13 0 1 1-.26 0 .13.13 0 0 1 .26 0zM.114.211a.016.016 0 1 1 0-.033h.065V.114a.016.016 0 1 1 .033 0v.065h.065a.016.016 0 0 1 0 .033L.211.211v.065a.016.016 0 1 1-.033 0V.211H.114z" /></svg>
                            </span>
                        </span>
                    </span>
                    <span style={{ marginLeft: "30px" }}> {price} $ </span>
                </span>
            </div>
        </div>
    )
}
