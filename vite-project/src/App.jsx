import React, { useState } from 'react'
import './Styles/App.sass'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from '@components/Pizza/AppRouter'
import { Context } from './context'
import { allFoods } from '@components/Pizza/foods/food'

function App() {
  const [basket, setBasket] = useState([])
  const [countTotal, setCountTotal] = useState(basket.length)
  const [countState, setCountState] = useState(false)
  const [result, setResult] = useState(allFoods)
  const [activeModal, setActiveModal] = useState(false)
  let productAlreadyInCart = false

  const addFoodToBasket = food => {
    basket.forEach(el => {
      if (food.id == el.id) {
        productAlreadyInCart = true
        food.count++
      }
    })
    if (!productAlreadyInCart) {
      basket.push(food)
    }
    setCountTotal(countTotal + 1)
    setCountState(true)
  }

  return (
    <BrowserRouter>
      <Context.Provider value={{ allFoods, countTotal, setCountTotal, basket, setBasket, countState, setCountState, addFoodToBasket, result, setResult, activeModal, setActiveModal }}>
        <div className='App'>
          <AppRouter />
        </div>
      </Context.Provider>
    </BrowserRouter>
  )
}

export default App