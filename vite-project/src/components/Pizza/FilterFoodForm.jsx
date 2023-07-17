import React from 'react'
import cl from "./style.module.sass"

export default function FilterFoodForm({ sort, myFilter }) {
    return (
        <button onClick={() => sort(myFilter)} className={myFilter.active ? null : cl.actveFilter}> {myFilter.name} </button>
    )
}
