import React from 'react'
import Basket from '@UI/Basket/Basket'
import "@mainSass/main.sass"

const MyFood = ({ addFoodToBasket, food }) => {
  return (
    <div className="cart">
      <img src={'src/assets/photo/food/' + food.img + '-optimize.jpg'} alt='img cart food' />

      <div className='cartContent'>

        <div className='textWrapper'>
          <h3> {food.title} </h3>
          <p> {food.ingredients} </p>
          <button> Edit </button>
        </div>

        <div className='params'>
          <input type='text' value="Traditional" readOnly />
          <input type='text' value="30cm" readOnly />
        </div>

        <div className='footerWrapper'>
          <div className='footer'>
            <p className='priceFood'> {food.price} $ </p>
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





