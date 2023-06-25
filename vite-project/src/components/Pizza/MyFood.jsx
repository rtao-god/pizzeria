import React from 'react'
import Basket from '@UI/Basket/Basket'
import "@mainSass/main.sass"

const MyFood = ({ addFoodInBasket, food }) => {
  return (
    <div className="cart">
      <img src={'assets/photo/food/' + food.img + '-optimize.jpg'} alt='img cart food' />

      <div className='cartContent'>

        <div className='textWrapper'>
          <h3> {food.title} </h3>
          <p> {food.ingredients} </p>
          <button> Edit </button>
        </div>

        <div className='params'>
          <input type='text' value="Traditional" />
          <input type='text' value="30cm" />
        </div>

        <div className='footerWrapper'>
          <div className='footer'>
            <p className='priceFood'> {food.price} $ </p>
            <button onClick={() => addFoodInBasket(food)}>
              <Basket title={"To basket"} />
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default MyFood





