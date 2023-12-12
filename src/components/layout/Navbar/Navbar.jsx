import React from 'react';
import cl from './Navbar.module.sass';
import BasketOverviewModal from '@modals/BasketOverviewModal/BasketOverviewModal';
import BasketButton from '@common/controls/BasketButton/BasketButton';

const Navbar = ({ basket, countTotal, setCountTotal, active, setActive }) => {
  const navigationLinks = ['PIZZA', 'BURGERS', 'STOCK', 'WINGS', 'SNACKS', 'DESSERT', 'DRINKS', 'ICE PIZZA'].map((link, index) => (
    <a key={index}>{link}</a>
  ));

  return (
    <div className={cl.navbar}>
      <div>
        {navigationLinks}
      </div>

      <div className={cl.basketButton} onClick={() => setActive(true)}>
        <BasketButton countTotal={countTotal} title='BASKET' />
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
  );
};

export default Navbar;
