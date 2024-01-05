import { useContext } from 'react'
import styles from './FoodItem.module.sass'
import Basket from '@/common/controls/BasketButton/BasketButton'
import { useNavigate } from 'react-router-dom'
import { Context } from '@all/context'

const FoodItem = ({ food }) => {
    const navigate = useNavigate()
    const { addFoodToBasket } = useContext(Context)

    return (
        <div className={styles.foodItem}>
            <button className={styles.foodItemPreviewButton} onClick={() => navigate(`/preview/${food.id}`)}>
                <img src={`/photo/food/${food.img}-optimize.jpg`} alt="img cardfood" className={styles.foodItemImage} />
            </button>

            <div className={styles.foodItemContent}>
                <div className={styles.foodItemText}>
                    <h3 className={styles.foodItemTitle}> {food.title} </h3>
                    <p className={styles.foodItemIngredients}> {food.ingredients} </p>
                </div>

                <div className={styles.foodItemParams}>
                    <input type="text" value="Traditional" readOnly className={styles.foodItemParamInput} />
                    <input type="text" value="30cm" readOnly className={styles.foodItemParamInput} />
                </div>

                <div className={styles.foodItemFooterWrapper}>
                    <div className={styles.foodItemFooter}>
                        <p className={styles.foodItemPrice}> {food.price} $ </p>
                        <div onClick={() => addFoodToBasket(food)} className={styles.foodItemAddToCart}>
                            <Basket title={'Add to cart'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
