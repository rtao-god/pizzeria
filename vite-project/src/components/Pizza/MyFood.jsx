import React from 'react'
import cl from "./style.module.sass"
import Basket from '@UI/Basket/Basket'

const MyFood = ({ addFoodToBasket, food }) => {
  return (
    <div className={cl.cart}>
      <img src={'/photo/food/' + food.img + '-optimize.jpg'} alt='img cart food' />

      <div className={cl.cartContent}>
        <div className={cl.textWrapper}>
          <h3> {food.title} </h3>
          <p> {food.ingredients} </p>
          <button> Edit </button>
        </div>

        <div className={cl.params}>
          <input type='text' value="Traditional" readOnly />
          <input type='text' value="30cm" readOnly />
        </div>

        <div className={cl.footerWrapper}>
          <div className={cl.footer}>
            <p className={cl.priceFood}> {food.price} $ </p>
            <div onClick={() => addFoodToBasket(food)}>
              <Basket title={"To basket"} />
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MyFood





