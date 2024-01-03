import React, { useEffect } from 'react'
import ModalCartItem from '../ModalCartItem/ModalCartItem'

export default function odalCartItemList({ setActive, getDefaultPrice, basket, increase, decrement }) {
  const safeBasket = basket || []

  // Check if setActive is a function before calling
  useEffect(() => {
    if (!safeBasket.length && typeof setActive === 'function') {
      setActive(false)
    }
  }, [safeBasket, setActive])

  return (
    <div>
      {safeBasket.length === 0 ? (
        <span>No items in the basket.</span>
      ) : (
        <div>
          {safeBasket.map(bas => (
            <ModalCartItem
              getDefaultPrice={getDefaultPrice}
              bas={bas}
              key={bas.id}
              basket={safeBasket}
              increase={increase}
              decrement={decrement}
            />
          ))}
        </div>
      )}
    </div>
  )
}
