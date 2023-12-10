import React from 'react';
import cl from './BasketButton.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

export default function BasketButton({ title, stick, countTotal, onClick }) {
    return (
        <button className={cl.basketButton} onClick={onClick}>
            <FontAwesomeIcon icon={faBasketShopping} className={cl.icon} />
            <p className={cl.title}>{title}</p>
            { countTotal > 0 && <BasketDetails stick={stick} countTotal={countTotal} /> }
        </button>
    );
}

function BasketDetails({ stick, countTotal }) {
    return (
        <div className={cl.details}>
            <span className={cl.stick}>{stick}</span>
            <span className={cl.countTotal}>{countTotal}</span>
        </div>
    );
}
