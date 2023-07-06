import React from 'react'

export default function FilterFoodForm({ sort, myFilter }) {
    return (
        <button onClick={() => sort(myFilter)} className={myFilter.active ? null : "actveFilter"}> {myFilter.name} </button>
    )
}
