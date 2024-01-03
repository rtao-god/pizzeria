import cl from './FoodFilterItem.module.sass'

export default function FoodFilterItem({ sort, myFilter }) {
  return (
    <button
      onClick={() => sort(myFilter)}
      className={`${cl.foodFilterButton} ${myFilter.active ? '' : cl.activeFilter}`}
    >
      {myFilter.name}
    </button>
  )
}
