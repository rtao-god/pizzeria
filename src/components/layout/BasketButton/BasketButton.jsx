import { useEffect } from 'react'
import styles from './BasketButton.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import CountBasketButton from '../CountBasketButton/CountBasketButton'
import ModalCartItemList from '@/modals/ModalCartItemList/ModalCartItemList'

export default function BasketButton({ countTotal, countState, setCountState, active, setActive }) {
    useEffect(() => {
        if (countTotal <= 0) setCountState(false)
    }, [countTotal, setCountState])

    return (
        <div onClick={() => setActive(true)} className={styles.basketButton} role="button" tabIndex="0">
            {countState && <CountBasketButton countTotal={countTotal} />}
            {active && <ModalCartItemList />}

            <FontAwesomeIcon className={styles.iconStyle} icon={faBasketShopping} />
        </div>
    )
}
