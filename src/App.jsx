import React, { useState } from 'react';
import { HashRouter as Router } from 'react-router-dom'; 
import './css/global/App.sass';
import AppRouter from '@components/food/AppRouter/AppRouter';
import { Context } from './context';
import { allFoods } from '@components/food/foodArray';

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
    <Router> 
      <Context.Provider value={{ allFoods, countTotal, setCountTotal, basket, setBasket, countState, setCountState, addFoodToBasket, result, setResult, activeModal, setActiveModal }}>
        <div className='App'>
          <AppRouter />
        </div>
      </Context.Provider>
    </Router>
  );
}

export default App