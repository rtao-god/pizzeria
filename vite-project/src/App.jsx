import react from 'react'
import './App.sass'
import Header from "./components/HeaderMainPage/Header/Header"
import Navbar from "./components/HeaderMainPage/Navbar/Navbar"
import SwiperCircle from "./components/HeaderMainPage/Swiper/SwiperCircle/Swiper"
import SwiperArrow from "./components/HeaderMainPage/Swiper/SwiperArrow/Swiper"

import Footer from './components/HeaderMainPage/Footer/Footer'
import Cookies from './components/HeaderMainPage/Cookies/Cookies'

function App() {
  return (
    <>
      <div className='App'>
        <div style={{ position: "absolute", left: "0" }}>
          <Header />
          <Navbar />
        </div>
        <SwiperCircle />
        <SwiperArrow />
        <div className='backgroundWrapper'>----</div>
        <Cookies />
      </div>
    </>
  )
}

export default App