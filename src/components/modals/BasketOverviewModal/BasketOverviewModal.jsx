import { useEffect, useRef, useState, useCallback } from 'react'
import cl from './BasketOverviewModal.module.sass'
import { AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'
import ConfettiAnimation from '@/assets/confetti/data.json'
import ModalCartItemList from '../ModalCartItemList/ModalCartItemList'
import ModalPromoCodeInput from '../ModalPromoCodeInput/ModalPromoCodeInput'
import ModalDiscountMessage from '../ModalDiscountMessage/ModalDiscountMessage'
import ModalFoodSwiper from '../ModalFoodSwiper/ModalFoodSwiper'

export default function BasketOverviewModal({ setCountTotal, basket, active, setActive }) {
  const basketOverviewModalAll = useRef(null)
  const basketOverviewModal = useRef(null)

  const [defaultPrice, setDefaultPrice] = useState(0)
  const [threshold, setThreshold] = useState(2000)

  const totalPrice = basket?.reduce((sum, el) => sum + el.price, 0) || 0
  const totalCount = basket?.reduce((sum, el) => sum + el.count, 0) || 0
  const widthProcent = Math.min((totalPrice / threshold) * 100, 100)
  const remaining = threshold - totalPrice

  const getDefaultPrice = myDefaultPrice => {
    setDefaultPrice(myDefaultPrice)
  }

  const increase = useCallback(() => {
    if (widthProcent >= 100) {
      setThreshold(prevThreshold => prevThreshold * 2)
      setCountTotal(prevCount => prevCount + 1)
    } else {
      setCountTotal(prevCount => prevCount + 1)
    }
  }, [widthProcent, setCountTotal, setThreshold])

  const decrement = useCallback(() => {
    setCountTotal(prevCount => prevCount - 1)
  }, [setCountTotal])

  useEffect(() => {
    setTimeout(() => {
      basketOverviewModal.current.style.right = '0'
    }, 1)
  }, [])

  return (
    <>
      {active && (
        <div ref={basketOverviewModalAll}>
          <span onClick={() => setActive(false)} className={cl.block}></span>
          <div ref={basketOverviewModal} className={cl.basketOverviewModal}>
            <p className={cl.countItem}>
              {totalCount} ITEM WORTH {totalPrice} $
            </p>
            <div className={cl.freeDeliveryProgress}>
              <div className={cl.leftAndThreshold}>
                <span className={cl.remaining}>You're missing {remaining} $ for free shipping</span>
                <span className={cl.threshold}>{threshold} $</span>
              </div>
              <div className={cl.shipping}>
                <div style={{ width: widthProcent + '%' }} className={cl.progressBar}></div>
                <div className={cl.progress}></div>
              </div>
            </div>
            <div className={cl.blockLink}>
              <a href="#">Delivery</a>
              <a href="#">Pickup</a>
            </div>
            <div className={cl.scrollOuter}>
              <div className={cl.scrollInner}>
                <ModalCartItemList
                  setActive={setActive}
                  getDefaultPrice={getDefaultPrice}
                  basket={basket}
                  increase={increase}
                  decrement={decrement}
                />
                <AnimatePresence>
                  {widthProcent === 100 && (
                    <Lottie className={cl.confettiAnimation} animationData={ConfettiAnimation} loop={false} autoplay />
                  )}
                </AnimatePresence>
                <ModalDiscountMessage />
                <ModalFoodSwiper />
              </div>
            </div>
            <ModalPromoCodeInput />
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
  )
}
