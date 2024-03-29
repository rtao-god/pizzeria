import { useEffect } from 'react'
import styles from './ModalCartItem.module.sass'

export default function ModalCartItem({ getDefaultPrice, bas, basket, increase, decrement }) {
    useEffect(() => {
        getDefaultPrice({ myDefaultPrice: bas.defaultPrice })
        bas.price = bas.defaultPrice * bas.count
    }, [bas.count])

    function increaseCount() {
        bas.count++
        bas.price = bas.defaultPrice * bas.count
    }

    function decrementCount() {
        if (bas.count >= 2) {
            bas.count--
            bas.price = bas.price - bas.defaultPrice
        } else {
            const index = basket.indexOf(bas)
            basket.splice(index, 1)
        }
    }

    return (
        <div className={styles.modalCartItem}>
            <img className={styles.miniFoodImg} src={'/photo/food/' + bas.img + '-optimize.jpg'} alt="Your basket" />
            <div className={styles.cartDescription}>
                <h3> Pizza Venice </h3>
                <p> 30 cm, traditional </p>
            </div>
            <div className={styles.cartSvg}>
                <span className={styles.counterAndPrice}>
                    <span style={{ marginLeft: '40px' }} className={styles.counter}>
                        <span onClick={decrementCount}>
                            <svg
                                onClick={decrement}
                                fill="rgb(120, 131, 140)"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="13px"
                                height="13px"
                                viewBox="0 0 8.32 8.32"
                                enableBackground="new 0 0 512 512"
                                xmlSpace="preserve"
                            >
                                <path
                                    points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812 "
                                    d="M5.447 2.506L4.16 3.792L2.873 2.506L2.506 2.873L3.792 4.16L2.506 5.447L2.873 5.814L4.16 4.528L5.447 5.814L5.814 5.447L4.528 4.16L5.814 2.873Z"
                                />
                                <path d="M4.16 0C1.862 0 0 1.862 0 4.16s1.862 4.16 4.16 4.16 4.16 -1.862 4.16 -4.16S6.458 0 4.16 0zm0 7.67c-1.939 0 -3.51 -1.571 -3.51 -3.51S2.221 0.65 4.16 0.65s3.51 1.571 3.51 3.51 -1.571 3.51 -3.51 3.51z" />
                            </svg>
                        </span>
                        <span> {bas.count} </span>
                        <span style={{ position: 'relative', top: '2px' }} onClick={increaseCount}>
                            <svg
                                onClick={increase}
                                fill="rgb(112, 164, 1)"
                                width="16"
                                height="16"
                                viewBox="0 0 0.39 0.39"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M.358.195a.162.162 0 1 1-.325 0c0-.09.072-.162.162-.162s.163.073.163.163zm-.033 0a.13.13 0 1 1-.26 0 .13.13 0 0 1 .26 0zM.114.211a.016.016 0 1 1 0-.033h.065V.114a.016.016 0 1 1 .033 0v.065h.065a.016.016 0 0 1 0 .033L.211.211v.065a.016.016 0 1 1-.033 0V.211H.114z"
                                />
                            </svg>
                        </span>
                    </span>
                    <span style={{ marginLeft: '30px' }}> {bas.price} $ </span>
                </span>
            </div>
        </div>
    )
}
