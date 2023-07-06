import React, { useState } from 'react'
import FilterFoodForm from './FilterFoodForm'

export default function FilterFood({ allFoods, setResult, }) {
    const [filter, setFilter] = useState([
        {
            id: 1,
            name: "Without Meat",
            active: true,
        },
        {
            id: 2,
            name: "Without Mushrooms",
            active: true,
        },
        {
            id: 3,
            name: "Without Onion",
            active: true,
        },
        {
            id: 4,
            name: "Meat",
            active: true,
        },
        {
            id: 5,
            name: "Mushrooms",
            active: true,
        },
        {
            id: 6,
            name: "Onion",
            active: true,
        },
    ])

    const sort = myFilter => {
        if (myFilter.active && myFilter.name === "Without Meat") {
            setResult(allFoods.filter(el => el.filter[0].withoutMeat === true))
            myFilter.active = false
        } else if (myFilter.name === "Without Meat") {
            setResult(allFoods.filter(el => el.filter[0].withoutMeat !== null))
            myFilter.active = true
        }

        if (myFilter.active && myFilter.name === "Without Mushrooms") {
            setResult(allFoods.filter(el => el.filter[0].withoutMushrooms === true))
            myFilter.active = false
        } else if (myFilter.name === "Without Mushrooms") {
            setResult(allFoods.filter(el => el.filter[0].withoutMushrooms !== null))
            myFilter.active = true
        }

        if (myFilter.active && myFilter.name === "Without Onion") {
            setResult(allFoods.filter(el => el.filter[0].withoutOnion === true))
            myFilter.active = false
        } else if (myFilter.name === "Without Onion") {
            setResult(allFoods.filter(el => el.filter[0].withoutOnion !== null))
            myFilter.active = true
        }

        if (myFilter.active && myFilter.name === "Meat") {
            setResult(allFoods.filter(el => el.filter[0].meat === true))
            myFilter.active = false
        } else if (myFilter.name === "Meat") {
            setResult(allFoods.filter(el => el.filter[0].meat !== null))
            myFilter.active = true
        }

        if (myFilter.active && myFilter.name === "Mushrooms") {
            setResult(allFoods.filter(el => el.filter[0].mushrooms === true))
            myFilter.active = false
        } else if (myFilter.name === "Mushrooms") {
            setResult(allFoods.filter(el => el.filter[0].mushrooms !== null))
            myFilter.active = true
        }

        if (myFilter.active && myFilter.name === "Onion") {
            setResult(allFoods.filter(el => el.filter[0].onion === true))
            myFilter.active = false
        } else if (myFilter.name === "Onion") {
            setResult(allFoods.filter(el => el.filter[0].onion !== null))
            myFilter.active = true
        }
    }

    return (
        <div className='filterFood'>
            {filter.map(myFilter =>
                <FilterFoodForm key={myFilter.id} sort={sort} myFilter={myFilter} />
            )}
        </div>
    )
}