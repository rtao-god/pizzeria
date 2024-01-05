import styles from './FoodMenu.module.sass'
import FoodList from '../FoodList/FoodList'

export default function Pizza({ result }) {
    return (
        <div>
            <div className={styles.titleFoodWrapper}>
                <h1 className={styles.titleFood}> PIZZA </h1>
            </div>
            <FoodList result={result} />
        </div>
    )
}
