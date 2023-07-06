import React from 'react'

export default function ModuleButtonBasket({ stick, countTotal }) {
    return (
        <span style={{ color: "white", display: 'flex', alignItems: "center" }}>
            <span style={{ marginRight: "15px", marginLeft: "-23px", fontSize: "22px" }}> {stick} </span>
            <span> {countTotal} </span>
        </span>
    )
}
