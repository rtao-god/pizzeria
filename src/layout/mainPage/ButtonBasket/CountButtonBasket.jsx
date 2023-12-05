import React, { useEffect, useRef } from 'react'

export default function CountButtonBasket(props) {
  const count = useRef(null)

  useEffect(() => {
    count.current.animate([
      { transform: "scaleX(1)" },
      { transform: "scaleX(2)" },
      { transform: "rotate(10000deg)" },
      { transform: "rotate(2deg)" },
      { transform: "rotate(-1000000000deg)" },
      { transform: "rotate(-1444deg)" },
      { transform: "rotate(-1deg)" },
      { transform: "rotate(-1deg)" },
      { transform: "rotate(1deg)" },
      { transform: "rotate(100000deg)" },
      { transform: "scaleX(2)" },
    ], {
      duration: 1200,
    })
  }, [props.countTotal])

  return (
    <div ref={count} className='countButtonBasket'>
      {props.countTotal}
    </div>
  )
}
