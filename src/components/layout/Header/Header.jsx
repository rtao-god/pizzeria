import { useState } from 'react'
import cl from './Header.module.sass'
import '@/assets/fonts/beermoney/beermoney.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faGift, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import AuthModal from '@/modals/AuthModal/AuthModal'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [modalAuth, setModalAuth] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={`${cl.header} ${showMenu ? cl.showMenu : ''}`}>
      <div className={cl.headerLeft}>
        <NavLink to="/main">
          <img src="/photo/icons/logo.png" alt="logo" />
        </NavLink>
        <div className={cl.hamburger} onClick={() => setShowMenu(!showMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={cl.headerTop}>
          <div className={cl.container}>
            <a href="#">
              <FontAwesomeIcon icon={faLocationDot} />
              <span> Moscow </span>
            </a>
          </div>
          <div className={cl.container}>
            <a href="#">
              <span> Delivery area </span>
            </a>
          </div>
          <div className={cl.container}>
            <a href="#">
              {' '}
              <FontAwesomeIcon icon={faPhone} />
              <span> Order by phone </span>
            </a>
          </div>
        </div>
      </div>
      <div className={cl.headerRight}>
        <div className={cl.container}>
          <a href="#">
            <FontAwesomeIcon style={{ color: 'rgb(112, 164, 1)' }} icon={faGift} />
            <span> Points </span>
          </a>
        </div>
        <div className={cl.container} onClick={() => setModalAuth(true)}>
          <a>
            <FontAwesomeIcon style={{ color: 'rgb(112, 164, 1)' }} icon={faArrowRightToBracket} />
            <span> Sign in </span>
          </a>
        </div>
        {modalAuth ? <AuthModal modalAuth={modalAuth} setModalAuth={setModalAuth} /> : <div> </div>}
      </div>
    </div>
  )
}
