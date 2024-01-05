import styles from './Navbar.module.sass'
import BasketOverviewModal from '@/modals/BasketOverviewModal/BasketOverviewModal'
import BasketButton from '@/common/controls/BasketButton/BasketButton'

const Navbar = ({ basket, countTotal, setCountTotal, active, setActive }) => {
    const navigationLinks = ['PIZZA', 'BURGERS', 'STOCK', 'WINGS', 'SNACKS', 'DESSERT', 'DRINKS'].map((link, index) => (
        <a key={index}>{link}</a>
    ))

    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContent}>
                <div className={styles.navigationLinks}> {navigationLinks} </div>

                <div className={styles.basketButton} onClick={() => setActive(true)}>
                    <BasketButton countTotal={countTotal} title="BASKET" />
                </div>
            </div>

            {active && (
                <BasketOverviewModal
                    countTotal={countTotal}
                    setCountTotal={setCountTotal}
                    basket={basket}
                    active={active}
                    setActive={setActive}
                />
            )}
        </div>
    )
}

export default Navbar
