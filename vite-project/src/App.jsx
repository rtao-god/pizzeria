import react, { useState } from 'react'
import './Styles/App.sass'
import MainPage from './layoutPages/mainPage/MainPage'

function App() {
  return (
    <>
      <div className='App'>
        <MainPage />
      </div>
    </>
  )
}

export default App