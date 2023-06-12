import React, { useEffect, useRef, useState } from 'react'
import cl from "./ModalWindow.module.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import SwiperRec from "../SwiperRec"
import CartFood from './CartFood'

export default function ModalWindow({ active, setActive }) {
    const [price, setPrice] = useState(100)
    const [priceDefault, setPriceDefault] = useState(price)

    const [threshold, setThreshold] = useState(1000)
    const [thresholdDefault, setThresholdDefault] = useState(1000)

    const [left, setleft] = useState(threshold - price)
    const [count, setCount] = useState(1)
    const [lvlProgress, setLvlProgress] = useState(1)

    const [width, setWidth] = useState(Math.min(threshold / price + 10), 100)
    const [widthDefault, setWidthDefault] = useState(threshold / price)

    const modalWindow = useRef(null)
    const modalWindowAll = useRef(null)
    const arrowBackgroundRef = useRef(null)
    const progressBarRef = useRef(null)

    function inputHandler() {
        arrowBackgroundRef.current.style.backgroundColor = "rgb(112, 164, 1)"
    }

    useEffect(() => {
        setTimeout(() => {
            modalWindow.current.classList.add(cl.active)
        }, 1)
    }, [])

    function increase() {
        setWidth(width + widthDefault)
        setleft(threshold - price - priceDefault)
        setPrice(price + priceDefault)
        setCount(count + 1)
        progressBarRef.current.style.width = width + "%"
        if (width >= 100) {
            setLvlProgress(lvlProgress + 1)
            setThreshold(threshold * 2)
            setWidth(width - width + 10)
        }
    }

    function decrement() {
        if (count >= 2) {
            setWidth(width - widthDefault)
            setleft(threshold - price + priceDefault)
            setPrice(price - priceDefault)
            setCount(count - 1)
            progressBarRef.current.style.width = width - 20 + "%"
            if (width <= 20) {
                setWidth(width + 80)
                setLvlProgress(lvlProgress - 1)
                setThreshold(threshold / 2)
            }
        } else {
            setActive(false)
        }
    }

    return (
        <div>
            {active
                ?
                <div ref={modalWindowAll}>
                    <div onClick={() => setActive(false)} className={cl.block} ></div >
                    <div ref={modalWindow} className={cl.modalWindow}>
                        <p className={cl.countItem}> {count} ITEM WORTH {price} $ </p> <br />
                        <div className={cl.freeDeliveryProgress}>
                            <div className={cl.leftAndLvl}>
                                <span> Before free shipping another {left} $ </span>
                                <span className={cl.lvlProgress}> {lvlProgress} lvl </span>
                            </div>
                            <div>
                                <div ref={progressBarRef} className={cl.progressBar}> </div>
                                <div className={cl.blockFlex}>
                                    <div className={cl.progress}> </div>
                                    <p className={cl.threshold}> {threshold} $ </p>
                                </div>
                            </div>
                        </div> <br />
                        <div className={cl.blockLink}>
                            <a href="#"> Delivery </a>
                            <a href="#"> Pickup </a>
                        </div> <br /> <br />
                        <div className={cl.scrollOuter}>
                            <div className={cl.scrollInner}>
                                <CartFood price={price} count={count} increase={increase} decrement={decrement} />
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
                            <input onChange={inputHandler} type="text" placeholder='Promo code' />
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
