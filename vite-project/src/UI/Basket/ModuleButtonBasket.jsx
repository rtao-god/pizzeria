import React from 'react'

export default function ModuleButtonBasket(props) {
    return (
        <div style={{ color: "white", display: 'flex', alignItems: "center" }}>
            <span style={{ marginRight: "20px", marginLeft: "-20px", fontSize: "22px" }}> {props.stick} </span>
            <span> {props.count} </span>
        </div>
    )
}
