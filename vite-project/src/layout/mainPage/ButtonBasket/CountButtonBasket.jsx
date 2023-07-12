import React, { useEffect, useRef } from 'react'

export default function CountButtonBasket(props) {
  const count = useRef(null)

  useEffect(() => {
    count.current.animate([
      { transform: "scaleX(0)" },
      { transform: "scaleX(1)" },
      { transform: "rotate(-5deg)" },
      { transform: "rotate(0deg)" }
    ], {
      duration: 1000,
      iterations: Infinity
    })
  }, [props.countTotal])

  return (
    <div ref={count} className='countButtonBasket'>
      {props.countTotal}
    </div>
  )
}
