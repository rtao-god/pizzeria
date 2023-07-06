import './Styles/App.sass'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import MainPage from './layoutPages/mainPage/MainPage'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MainPage />
      </div>
    </BrowserRouter>
  )
}

export default App