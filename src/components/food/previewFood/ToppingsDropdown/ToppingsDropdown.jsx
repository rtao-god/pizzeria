import PreviewFoodToppings from '../PreviewFoodToppings/PreviewFoodToppings';
import cl from './ToppingsDropdown.module.sass'
import ChevronIcon from '@/commonIcons/ChevronIcon.tsx'

export default function ToppingsDropdown({ toppingsList, selectedToppingType, setSelectedToppingType, handleAddToppingsClick, showToppingsList  }) {
    return (
        <div className={cl.dropdown}>
            <div className={cl.addToppings} onClick={handleAddToppingsClick}>
                <p> Add more toppings </p>
                <ChevronIcon
                    style={{
                        transform: showToppingsList ? 'rotate(0deg)' : 'rotate(-180deg)',
                        width: '0.7em',
                        transition: 'all 0.3s ease 0s',
                    }}
                    className={cl.icon}
                />
            </div>
            
            <div className={cl.dropdownContent}>
                <div className={cl.toppingsType}>
                    {Object.keys(toppingsList).map(type => (
                        <h3
                            key={type}
                            onClick={() => setSelectedToppingType(type)}
                            className={selectedToppingType === type ? cl.toppingSelected : ''}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </h3>
                    ))}
                </div>
                {toppingsList[selectedToppingType].map(topping => (
                    <PreviewFoodToppings key={topping.title} toppingsEl={topping} />
                ))}
            </div>
        </div>
    );
};