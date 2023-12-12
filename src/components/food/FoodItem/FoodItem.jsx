import React, { useContext } from 'react'
import cl from './FoodItem.module.sass'
import Basket from '@common/controls/BasketButton/BasketButton'
import { useNavigate } from 'react-router-dom'
import { Context } from '@context'

const FoodItem = ({ food }) => {
  const navigate = useNavigate()
  const { addFoodToBasket } = useContext(Context)

  return (
    <div className={cl.foodItem}>
      <button className={cl.foodItemPreviewButton} onClick={() => navigate(`/preview/${food.id}`)}>
        <img src={`/photo/food/${food.img}-optimize.jpg`} alt="img cardfood" className={cl.foodItemImage} />
      </button>

      <div className={cl.foodItemContent}>
        <div className={cl.foodItemText}>
          <h3 className={cl.foodItemTitle}> {food.title} </h3>
          <p className={cl.foodItemIngredients}> {food.ingredients} </p>
        </div>

        <div className={cl.foodItemParams}>
          <input type="text" value="Traditional" readOnly className={cl.foodItemParamInput} />
          <input type="text" value="30cm" readOnly className={cl.foodItemParamInput} />
        </div>

        <div className={cl.foodItemFooterWrapper}>
          <div className={cl.foodItemFooter}>
            <p className={cl.foodItemPrice}> {food.price} $ </p>
            <div onClick={() => addFoodToBasket(food)} className={cl.foodItemAddToCart}>
              <Basket title={'Add to cart'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
