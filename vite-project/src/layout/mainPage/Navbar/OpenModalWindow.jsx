import React, { useRef, useState } from 'react'
import cl from "./OpenModalWindow.module.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import SwiperRec from "./SwiperRec"

export default function OpenModalWindow(props) {
    const modalWindow = useRef(null)
    const modalWindowAll = useRef(null)
    const arrowBackgroundRef = useRef(null)

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(100)

    setTimeout(() => {
        modalWindow.current.style.right = "0"
    }, 20)

    const closeModalWindow = () => {
        props.setStateModalWindow(true)
        modalWindowAll.current.style.display = "none"
    }

    function inputHandler() {
        arrowBackgroundRef.current.style.backgroundColor = "rgb(112, 164, 1)"
    }

    function decrementCounter() {
        if (count > 0) {
            setPrice(price - 100)
            setCount(count - 1)
        }
    }

    function increaseCounter() {
        setPrice(price + 100)
        setCount(count + 1)
    }

    return (
        <div ref={modalWindowAll}>
            <div onClick={closeModalWindow} className={cl.block}></div>
            <div ref={modalWindow} className={cl.modalWindow} style={{ right: "-360px" }} >
                <p className={cl.countItem}> 1 ITEM WORTH 379 ₽ </p> <br />
                <p className={cl.freeDeliveryProgress}> Free shipping still 511 ₽ </p> <br />
                <div className={cl.blockLink}>
                    <a href="#"> Delivery </a>
                    <a href="#"> Pickup </a>
                </div> <br /> <br />

                <div className={cl.scrollOuter}>
                    <div className={cl.scrollInner}>
                        <div className={cl.cardFood}>
                            <div className={cl.miniFoodImg}>
                                <img src="assets/photo/food/9wuyjOz5zn60sLQjh3rgE5swzBAZT4QDManeUkcM-optimize.jpg" alt="" />
                            </div>
                            <div className={cl.cardDescription}>
                                <h3> Пицца Венеция </h3>
                                <p> 30 см, традиционное </p>
                            </div>
                            <div className={cl.cardSvg}>
                                <span className={cl.counterAndPrice}>
                                    <span className={cl.counter}>
                                        <span style={{ marginLeft: "40px" }}>
                                            <svg onClick={decrementCounter} fill="rgb(120, 131, 140)" version="1.1" xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 8.32 8.32" enable-background="new 0 0 512 512" xml: space="preserve"><path points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812 " d="M5.447 2.506L4.16 3.792L2.873 2.506L2.506 2.873L3.792 4.16L2.506 5.447L2.873 5.814L4.16 4.528L5.447 5.814L5.814 5.447L4.528 4.16L5.814 2.873Z" /><path d="M4.16 0C1.862 0 0 1.862 0 4.16s1.862 4.16 4.16 4.16 4.16 -1.862 4.16 -4.16S6.458 0 4.16 0zm0 7.67c-1.939 0 -3.51 -1.571 -3.51 -3.51S2.221 0.65 4.16 0.65s3.51 1.571 3.51 3.51 -1.571 3.51 -3.51 3.51z" /></svg>
                                            <span style={{ position: "relative", top: "-2px" }}> {count} </span>
                                            <svg onClick={increaseCounter} fill="rgb(112, 164, 1)" width="16" height="16" viewBox="0 0 0.39 0.39" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.358.195a.162.162 0 1 1-.325 0c0-.09.072-.162.162-.162s.163.073.163.163zm-.033 0a.13.13 0 1 1-.26 0 .13.13 0 0 1 .26 0zM.114.211a.016.016 0 1 1 0-.033h.065V.114a.016.016 0 1 1 .033 0v.065h.065a.016.016 0 0 1 0 .033L.211.211v.065a.016.016 0 1 1-.033 0V.211H.114z" /></svg>
                                        </span>
                                    </span>
                                    <span style={{ position: "relative", top: "-2px", marginLeft: "30px" }}> {price}$ </span>
                                </span>
                            </div>
                        </div>
                        <div className={cl.promoCodeText}>
                            <p>
                                Enter the code <span style={{ color: "rgb(217, 34, 36)" }}>"ZABERUSAM"</span> and get a <span style={{ color: "rgb(217, 34, 36)" }}>20% discount</span> in the restaurant for pickup <br /> <br />
                                <p className={cl.promoCodeSpan}> Discount does not apply to promo kits and other promotional offers </p>
                            </p>
                        </div> <br />
                        <p style={{ backgroundColor: "rgb(248, 248, 249)" }}> WE RECOMMEND ADDING </p> <br />
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
    )
}
