import React, { useEffect, useRef, useState, useCallback } from 'react';
import cl from "./ModalWindow.module.sass";
import { AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import ConfettiAnimation from '@src/../public/assets/7893-confetti-cannons/data.json';
import CartFood from './CartFood';
import PromoCode from './PromoCode/PromoCode';
import PromoCodeText from './PromoCode/PromoCodeText';
import SwiperRec from './SwiperRec/SwiperRec';

export default function ModalWindow({ setCountTotal, basket, active, setActive }) {
    const modalWindow = useRef(null);
    const modalWindowAll = useRef(null);

    const [defaultPrice, setDefaultPrice] = useState(0);
    const [threshold, setThreshold] = useState(2000);

    const totalPrice = basket?.reduce((sum, el) => sum + el.price, 0) || 0;
    const totalCount = basket?.reduce((sum, el) => sum + el.count, 0) || 0;
    const widthProcent = Math.min(totalPrice / threshold * 100, 100);
    const remaining = threshold - totalPrice;

    const getDefaultPrice = myDefaultPrice => {
        setDefaultPrice(myDefaultPrice)
    }

    const increase = useCallback(() => {
        if (widthProcent >= 100) {
            setThreshold(prevThreshold => prevThreshold * 2);
            setCountTotal(prevCount => prevCount + 1);
        } else {
            setCountTotal(prevCount => prevCount + 1);
        }
    }, [widthProcent, setCountTotal, setThreshold]);

    const decrement = useCallback(() => {
        setCountTotal(prevCount => prevCount - 1);
    }, [setCountTotal]);

    useEffect(() => {
        setTimeout(() => {
            modalWindow.current.style.right = "0";
        }, 1);
    }, []);

    return (
        <>
            {active && (
                <div ref={modalWindowAll}>
                    <span onClick={() => setActive(false)} className={cl.block}></span>
                    <div ref={modalWindow} className={cl.modalWindow}>
                        <p className={cl.countItem}>{totalCount} ITEM WORTH {totalPrice} $</p>
                        <div className={cl.freeDeliveryProgress}>
                            <div className={cl.leftAndThreshold}>
                                <span className={cl.remaining}>You're missing {remaining} $ for free shipping</span>
                                <span className={cl.threshold}>{threshold} $</span>
                            </div>
                            <div className={cl.shipping}>
                                <div style={{ width: widthProcent + "%" }} className={cl.progressBar}></div>
                                <div className={cl.progress}></div>
                            </div>
                        </div>
                        <div className={cl.blockLink}>
                            <a href="#">Delivery</a>
                            <a href="#">Pickup</a>
                        </div>
                        <div className={cl.scrollOuter}>
                            <div className={cl.scrollInner}>
                                <CartFood setActive={setActive} getDefaultPrice={getDefaultPrice} basket={basket} increase={increase} decrement={decrement} />
                                <AnimatePresence>
                                    {widthProcent === 100 && (
                                        <Lottie className={cl.confettiAnimation} animationData={ConfettiAnimation} loop={false} autoplay />
                                    )}
                                </AnimatePresence>
                                <PromoCodeText />
                                <SwiperRec />
                            </div>
                        </div>
                        <PromoCode />
                        <div>
                            <div className={cl.blockSum}>
                                <p>Sum</p>
                                <p>+ 19 points {totalPrice} $</p>
                            </div>
                            <button className={cl.checkout}>Checkout</button>
                            <p className={cl.minSum}>Minimum order amount - 1 $</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
