import React from 'react'
import cl from './BasketButton.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

export default function BasketButton({ title, countTotal }) {
  return (
    <button className={cl.basketButton}>
      <FontAwesomeIcon icon={faBasketShopping} className={cl.icon} />
      <p className={cl.title}>{title}</p>
      {countTotal > 0 && <span className={cl.countTotal}>{countTotal}</span>}
    </button>
  )
}
