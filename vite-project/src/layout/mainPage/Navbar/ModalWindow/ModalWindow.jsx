import React, { useEffect, useRef, useState } from 'react'
import cl from "./ModalWindow.module.sass"
import { AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import ConfettiAnimation from '@src/../public/assets/7893-confetti-cannons/data.json'
import CartFood from './CartFood'
import PromoCode from './PromoCode/PromoCode'
import PromoCodeText from './PromoCode/PromoCodeText'
import SwiperRec from './SwiperRec/SwiperRec'

export default function ModalWindow({ addFoodToBasket, countTotal, setCountTotal, basket, active, setActive }) {
    const modalWindow = useRef(null)
    const modalWindowAll = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            modalWindow.current.style.right = "0"
        }, 1)
    }, [])

    const arrPrice = [0]
    const arrCount = [0]

    basket?.map(el => {
        arrPrice.push(el.price)
        arrCount.push(el.count)
    })

    const getDefaultPrice = myDefaultPrice => {
        setDefaultPrice(myDefaultPrice)
    }

    const [defaultPrice, setDefaultPrice] = useState(0)
    const [threshold, setThreshold] = useState(2000)
    const totalPrice = arrPrice.reduce((a, b) => a + b)
    const totalCount = arrCount.reduce((a, b) => a + b)
    const widthProcent = Math.min(totalPrice / threshold * 100, 100)
    const remaining = threshold - totalPrice

    function increase() {
        widthProcent >= 100
            ? setThreshold(threshold * 2) || setCountTotal(countTotal + 1)
            : setCountTotal(countTotal + 1)
    }

    function decrement() {
        setCountTotal(countTotal - 1)
    }
    return (
        <span>
            {active
                ?
                <div ref={modalWindowAll}>
                    <span onClick={() => setActive(false)} className={cl.block}></span>
                    <div ref={modalWindow} className={cl.modalWindow}>
                        <p className={cl.countItem}> {totalCount} ITEM WORTH {totalPrice} $ </p> <br />
                        <div className={cl.freeDeliveryProgress}>
                            <div className={cl.leftAndThreshold}>
                                <span className={cl.remaining}> You're missing {remaining} $ for free shipping </span>
                                <span className={cl.threshold}> {threshold} $ </span>
                            </div>
                            <div className={cl.shipping}>
                                <div style={{ width: widthProcent + "%" }} className={cl.progressBar}></div>
                                <div className={cl.progress}></div>
                            </div>
                        </div> <br />
                        <div className={cl.blockLink}>
                            <a href="#"> Delivery </a>
                            <a href="#"> Pickup </a>
                        </div> <br /> <br />
                        <div className={cl.scrollOuter}>
                            <div className={cl.scrollInner}>
                                <CartFood setActive={setActive} getDefaultPrice={getDefaultPrice} basket={basket} increase={increase} decrement={decrement} />
                                <AnimatePresence>
                                    {widthProcent === 100 && (
                                        <Lottie className={cl.confettiAnimation} animationData={ConfettiAnimation} loop={false} autoplay />
                                    )}
                                </AnimatePresence>
                                <PromoCodeText />
                                <SwiperRec addFoodToBasket={addFoodToBasket} />
                            </div>
                        </div>
                        <PromoCode />
                        <div> <br />
                            <div className={cl.blockSum}>
                                <p> Sum </p>
                                <p> + 19 points {totalPrice} $ </p>
                            </div> <br />
                            <button className={cl.checkout}> Checkout </button>
                            <p className={cl.minSum}> Minimum order amount - 1 $ </p>
                        </div>
                    </div>
                </div>
                : null
            }
        </span>
    )
}
