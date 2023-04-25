import react from 'react'
import './App.css'
import Header from "./components/HeaderMainPage/Header/Header"
import Navbar from "./components/HeaderMainPage/Navbar/Navbar"
import Swiper from './components/HeaderMainPage/Swiper/Swiper'

function App() {

  return (
    <>
      <div>
        <Header />
        <Navbar />
        <Swiper />
      </div>
    </>
  )
}

export default App
