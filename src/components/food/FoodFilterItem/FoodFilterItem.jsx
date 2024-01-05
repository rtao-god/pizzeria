import styles from './FoodFilterItem.module.sass'

export default function FoodFilterItem({ sort, myFilter }) {
    return (
        <button
            onClick={() => sort(myFilter)}
            className={`${styles.foodFilterButton} ${myFilter.active ? '' : styles.activeFilter}`}
        >
            {myFilter.name}
        </button>
    )
}
