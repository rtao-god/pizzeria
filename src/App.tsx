import { FC, useState } from 'react'
import './App.css'
import ConvertCurrencies from './components/ExchangeRatesForm'
import DisplayPizzas from './components/Pizza/DisplayPizzas'
import Pizza from './components/Pizza/Pizza'
import AddPizzaForm from './components/Pizza/addPizzaForm'

const App: FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza])
  }

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) =>
      pizza.id === newPizza.id ? newPizza : pizza
    ))
  }

  const deletePizza = (id: number) => {
    const newPizzasList = pizzasList.filter(pizza => pizza.id !== id)
    setPizzasList(newPizzasList)
  }

  const [ruble, setRuble] = useState<number>(5000)
  const [dollar, setDollar] = useState<number>(200)
  const [result, setResult] = useState<number>(81.55)

  const dollarToRuble = () => {
    return setResult( ruble / result )
  }

  R01720

  return (
    <div className='app'>
      <div className='wrap'>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza} />
        <span> {dollar} $ </span>
        <span> {ruble} ₽  </span>
        <span> {result} </span>
        <button onClick={dollarToRuble}> press me </button>
        <ConvertCurrencies />
      </div>
    </div>
  )
}

export default App
