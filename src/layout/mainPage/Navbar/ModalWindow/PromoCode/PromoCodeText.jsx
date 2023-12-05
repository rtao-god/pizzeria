import React from 'react'
import cl from "./PromoCode.module.sass"

export default function PromoCodeText() {
    return (
        <div className={cl.promoCodeText}>
            <p>
                Enter the code <span style={{ color: "rgb(217, 34, 36)" }}>"ZABERUSAM"</span> and get a <span style={{ color: "rgb(217, 34, 36)" }}>20% discount</span> in the restaurant for pickup <br /> <br />
                <span className={cl.promoCodeSpan}> Discount does not apply to promo kits and other promotional offers </span>
            </p>
        </div>
    )
}
