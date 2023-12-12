import React, { useState } from 'react'
import FoodFilterItem from '../FoodFilterItem/FoodFilterItem'
import cl from './FoodFilter.module.sass'

export default function FoodFilter({ allFoods, setResult }) {
  const [filter, setFilter] = useState([
    { id: 1, name: 'Without Meat', active: true },
    { id: 2, name: 'Without Mushrooms', active: true },
    { id: 3, name: 'Without Onion', active: true },
    { id: 4, name: 'Meat', active: true },
    { id: 5, name: 'Mushrooms', active: true },
    { id: 6, name: 'Onion', active: true },
  ])

  const FILTER_MAP = {
    'Without Meat': 'withoutMeat',
    'Without Mushrooms': 'withoutMushrooms',
    'Without Onion': 'withoutOnion',
    'Meat': 'meat',
    'Mushrooms': 'mushrooms',
    'Onion': 'onion',
  }

  const sort = myFilter => {
    const filterKey = FILTER_MAP[myFilter.name]
    const updatedFoods = allFoods.filter(el => {
      if (myFilter.active) {
        return el.filter[0][filterKey] === true
      } else {
        return el.filter[0][filterKey] !== null
      }
    })

    // Update the state of filters
    setFilter(prevFilters => prevFilters.map(f => (f.id === myFilter.id ? { ...f, active: !f.active } : f)))

    setResult(updatedFoods)
  }

  return (
    <div className={cl.FoodFilter}>
      {filter.map(myFilter => (
        <FoodFilterItem key={myFilter.id} sort={sort} myFilter={myFilter} />
      ))}
    </div>
  )
}
