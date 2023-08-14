import React, { useContext } from 'react'
import cl from "./style.module.sass"
import Basket from '@UI/Basket/Basket'
import { useNavigate } from "react-router-dom"
import { Context } from '../../context'

const MyFood = ({ food }) => {
  const navigate = useNavigate()
  const context = useContext(Context)
  
  return (
    <div className={cl.cart}>
      <button onClick={() => navigate(`/preview/${food.id}`)}>
        <img src={'/photo/food/' + food.img + '-optimize.jpg'} alt='img cart food' />
      </button>

      <div className={cl.cartContent}>
        <div className={cl.textWrapper}>
          <h3> {food.title} </h3>
          <p> {food.ingredients} </p>
        </div>

        <div className={cl.params}>
          <input type='text' value="Traditional" readOnly />
          <input type='text' value="30cm" readOnly />
        </div>

        <div className={cl.footerWrapper}>
          <div className={cl.footer}>
            <p className={cl.priceFood}> {food.price} $ </p>
            <div onClick={() => context.addFoodToBasket(food)}>
              <Basket title={"To basket"} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyFood





