import React, { useRef, useState } from 'react'
import cl from './ModalPromoCodeInput.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function ModalPromoCodeInput() {
  const promoCodeInput = useRef(null)
  const arrowBackgroundRef = useRef(null)

  const [promoCodeValue, setPromoCodeValue] = useState({ value: '' })

  function inputHandler(e) {
    setPromoCodeValue({ ...promoCodeValue, value: e.target.value })
    arrowBackgroundRef.current.style.backgroundColor = 'rgb(112, 164, 1)'
    if (promoCodeInput.current.value == '') {
      arrowBackgroundRef.current.style.backgroundColor = 'rgb(183, 209, 128)'
    }
  }

  return (
    <div className={cl.modalPromoCodeInput}>
      <input
        value={promoCodeValue.value}
        ref={promoCodeInput}
        onChange={inputHandler}
        type="text"
        placeholder="Promo code"
      />
      <div ref={arrowBackgroundRef} className={cl.arrowBackground}>
        <span className={cl.arrow}>
          {' '}
          <FontAwesomeIcon icon={faArrowRight} disabled />{' '}
        </span>
      </div>
    </div>
  )
}
