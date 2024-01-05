import { useState } from 'react'
import styles from './Header.module.sass'
import '@/assets/fonts/beermoney/beermoney.css'
import AuthModal from '@/modals/AuthModal/AuthModal'
import LogoIcon from '@/common/icons/LogoIcon'
import LocationIcon from '@/common/icons/LocationIcon'
import PhoneIcon from '@/common/icons/PhoneIcon'
import BasketIcon from '@/common/icons/BasketIcon'
import SignInIcon from '@/common/icons/SignInIcon'

export default function Header() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <header className={`${styles.header} ${isMenuVisible ? styles.headerMenuVisible : ''}`}>
            <div className={styles.headerContent}>
                <div className={styles.headerLeftSection}>
                    <a href="#" className={styles.headerLogoLink}>
                        <LogoIcon className={styles.headerLogoIcon} />
                    </a>

                    <button className={styles.headerLocationButton}>
                        <LocationIcon className={styles.headerIcon} />
                        <span> Moscow </span>
                    </button>

                    <div className={styles.headerDeliveryAreaText}> Delivery Area </div>

                    <button className={styles.headerPhoneOrderButton}>
                        <PhoneIcon className={styles.headerIcon} />
                        <span> Order by phone </span>
                    </button>
                </div>

                <div className={styles.headerRightSection}>
                    <button className={styles.headerPointsButton}>
                        <BasketIcon className={`${styles.headerIcon} ${styles.headerIconGreen}`} />
                        <span> Points </span>
                    </button>

                    <button className={styles.headerSignInButton} onClick={() => setIsAuthModalOpen(true)}>
                        <SignInIcon className={`${styles.headerIcon} ${styles.headerIconGreen}`} />
                        <span> Sign in </span>
                    </button>
                </div>
            </div>

            {isAuthModalOpen && <AuthModal isOpen={isAuthModalOpen} setIsOpen={setIsAuthModalOpen} />}
        </header>
    )
}

{
    /* <div className={`${styles.header} ${showMenu ? styles.showMenu : ''}`}>
      <div className={styles.headerLeft}>
        <NavLink to="/main" className={styles.navLinkToMain}>
          <LogoIcon />
        </NavLink>
        <div className={styles.hamburger} onClick={() => setShowMenu(!showMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.headerTop}>
          <div className={styles.container}>
            <a href="#">
              <LocationIcon className={styles.headerIcons} />
              <span> Moscow </span>
            </a>
          </div>
          <div className={styles.container}>
            <a href="#">
              <span> Delivery area </span>
            </a>
          </div>
          <div className={styles.container}>
            <a href="#">
              <PhoneIcon className={styles.headerIcons} />
              <span> Order by phone </span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.container}>
          <a href="#">
            <BasketIcon className={styles.headerIcons} />
            <span> Points </span>
          </a>
        </div>
        <div className={styles.container} onClick={() => setModalAuth(true)}>
          <a>
            <SignInIcon className={`${styles.headerIcons} ${styles.headerIconsGreen}`} />
            <span> Sign in </span>
          </a>
        </div>
        {modalAuth ? <AuthModal modalAuth={modalAuth} setModalAuth={setModalAuth} /> : <div> </div>}
      </div>
    </div> */
}
