import FoodItem from '../FoodItem/FoodItem'
import styles from './FoodList.module.sass'

export default function FoodList({ result }) {
    return (
        <div className={styles.foodWrapper}>
            {result.map(food => (
                <FoodItem food={food} key={food.id} />
            ))}
        </div>
    )
}
