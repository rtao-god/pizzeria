import React, { useEffect, useRef, useState } from 'react'
import cl from "./ModalWindow.module.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import SwiperRec from "../SwiperRec"
import CartFood from './CartFood'

export default function ModalWindow({ copy, countTotal, setCountTotal, basket, setBasket, active, setActive }) {
    const modalWindow = useRef(null)
    const modalWindowAll = useRef(null)
    const arrowBackgroundRef = useRef(null)
    const progressBarRef = useRef(null)
    const promoCodeInput = useRef(null)
    const getCartAmount = sum => {
        setTotalPriceBasket(sum)
    }

    const getDefaultPrice = myDefaultPrice => {
        setDefaultPrice(myDefaultPrice)
    }

    const [totalPriceBasket, setTotalPriceBasket] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [defaultPrice, setDefaultPrice] = useState(0)
    // console.log("defaultPrice", defaultPrice.myDefaultPrice)
    const [threshold, setThreshold] = useState(1000)
    const [left, setleft] = useState(threshold - totalPrice)
    const [totalCount, setTotalCount] = useState(1)
    const [lvlProgress, setLvlProgress] = useState(1)
    const [widthProcent, setWidthProcent] = useState(totalPrice / threshold * 100)

    const [promoCodeValue, setPromoCodeValue] = useState({ value: "" })

    useEffect(() => {
        setTimeout(() => {
            // setTotalPrice(totalPrice + defaultPrice.myDefaultPrice)
            setleft(threshold - totalPrice)

            modalWindow.current.style.right = "0"

            setTotalPrice(totalPriceBasket + totalPrice)
            // setWidthProcent(widthProcent + 1)
        }, 1)
    }, [])

    const increase = () => {
        setWidthProcent(widthProcent + widthProcent)
        setTotalPrice(totalPrice + defaultPrice.myDefaultPrice)
        setTotalCount(totalCount + 1)
        setleft(threshold - totalPrice)  // setleft(threshold - totalPrice - defaultPrice.myDefaultPrice) 
        progressBarRef.current.style.width = widthProcent + "%"
        if (widthProcent >= 100) {
            setLvlProgress(lvlProgress + 1)
            setThreshold(threshold * 2)
            setWidthProcent(widthProcent - 90)
        }
        /*   console.log("totalPrice", totalPrice, "totalPriceBasket", totalPriceBasket)
          console.log(widthProcent) */
    }

    function decrement() {
        setWidthProcent(widthProcent - widthProcent)
        setTotalPrice(totalPrice - defaultPrice.myDefaultPrice)
        setTotalCount(totalCount - 1)
        setleft(threshold - totalPrice - defaultPrice.myDefaultPrice + 100)
        progressBarRef.current.style.width = widthProcent - 20 + "%"
        if (widthProcent <= 20) {
            setWidthProcent(widthProcent + 80)
            progressBarRef.current.style.width = widthProcent - 20 + "%"
            setLvlProgress(lvlProgress - 1)
            setThreshold(threshold / 2)
        }
        console.log(widthProcent)
    }

    function inputHandler(e) {
        setPromoCodeValue({ ...promoCodeValue, value: e.target.value })
        arrowBackgroundRef.current.style.backgroundColor = "rgb(112, 164, 1)"

        if (promoCodeInput.current.value == "") {
            arrowBackgroundRef.current.style.backgroundColor = "rgb(183, 209, 128)"
        }
    }

    return (
        <div>
            {active
                ?
                <div ref={modalWindowAll}>
                    <div onClick={() => setActive(false)} className={cl.block} ></div >
                    <div ref={modalWindow} className={cl.modalWindow}>
                        <p className={cl.countItem}> {totalCount} ITEM WORTH {totalPrice} $ </p> <br />
                        <div className={cl.freeDeliveryProgress}>
                            <div className={cl.leftAndLvl}>
                                <span> Spend {left} $ more and get free delivery!  </span>
                                <div className={cl.thresholdAndLvlProgress}>
                                    <span className={cl.lvlProgress}> {lvlProgress} lvl </span>
                                    <span className={cl.threshold}> {threshold} $ </span>
                                </div>
                            </div>
                            <div className={cl.shipping}>
                                <div ref={progressBarRef} className={cl.progressBar}></div>
                                <div className={cl.progress}></div>
                            </div>
                        </div> <br />
                        <div className={cl.blockLink}>
                            <a href="#"> Delivery </a>
                            <a href="#"> Pickup </a>
                        </div> <br /> <br />
                        <div className={cl.scrollOuter}>
                            <div className={cl.scrollInner}>
                                <CartFood countTotal={countTotal} setCountTotal={setCountTotal} setActive={setActive} getDefaultPrice={getDefaultPrice} getCartAmount={getCartAmount} copy={copy} basket={basket} setBasket={setBasket} increase={increase} decrement={decrement} />
                                <div className={cl.promoCodeText}>
                                    <p>
                                        Enter the code <span style={{ color: "rgb(217, 34, 36)" }}>"ZABERUSAM"</span> and get a <span style={{ color: "rgb(217, 34, 36)" }}>20% discount</span> in the restaurant for pickup <br /> <br />
                                        <p className={cl.promoCodeSpan}> Discount does not apply to promo kits and other promotional offers </p>
                                    </p>
                                </div> <br />
                                <SwiperRec />
                            </div>
                        </div>
                        <div className={cl.promoCode}>
                            <input value={promoCodeValue.value} ref={promoCodeInput} onChange={inputHandler} type="text" placeholder='Promo code' />
                            <div ref={arrowBackgroundRef} className={cl.arrowBackground}>
                                <span className={cl.arrow}> <FontAwesomeIcon icon={faArrowRight} disabled /> </span>
                            </div>
                        </div>
                        <div> <br />
                            <div className={cl.blockSum}>
                                <p> Sum </p>
                                <p> + 19 points 379₽ </p>
                            </div> <br />
                            <button className={cl.checkout}> Checkout </button>
                            <p className={cl.minSum}> Minimum order amount - 1 $ </p>
                        </div>
                    </div>
                </div>
                : null
            }
        </div>
    )
}
