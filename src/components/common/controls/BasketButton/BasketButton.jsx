import React from 'react'
import styles from './BasketButton.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

export default function BasketButton({ title, countTotal }) {
    return (
        <button className={styles.basketButton}>
            <FontAwesomeIcon icon={faBasketShopping} className={styles.icon} />
            <p className={styles.title}>{title}</p>
            {countTotal > 0 && <span className={styles.countTotal}>{countTotal}</span>}
        </button>
    )
}
