import React, { useContext, useEffect, useRef, useState } from 'react';
import cl from "./stylesModal.module.sass";
import "@assets/PF DIN/stylesheet.css";
import { useLocation } from 'react-router-dom';

import Header from "@mainPage/Header/Header";
import Navbar from "@mainPage/Navbar/Navbar";
import Footer from '@mainPage/Footer/Footer';
import Basket from '@UI/Basket/Basket';
import ModalPreviewToppings from './ModalPreviewToppings';

import { Context } from '@context';
import { allFoods } from '@components/Pizza/foods/food';

export default function ModalPreview() {
  const location = useLocation();
  const { basket, setBasket, activeModal, setActiveModal, countTotal, setCountTotal, addFoodToBasket } = useContext(Context);

  const toppingsTypeRef = useRef(null);
  const [selectedFood, setSelectedFood] = useState({});
  const [selectedToppingType, setSelectedToppingType] = useState('');
  const toppingsList = {
    meat: [
      { img: "212820", title: "Bacon", price: 99, count: 0 },
      // ... other meats
    ],
    vegetables: [
      { img: "212417", title: "Red onion", price: 79, count: 0 },
      // ... other vegetables
    ],
    cheeses: [
      { img: "212529", title: "Mozzarella cheese", price: 89, count: 0 },
    ],
    sauces: [
      { img: "212540", title: "Barbecue sauce", price: 69, count: 0 },
    ]
  };

  const cheeseFunc = () => {
    checkRef.current.style.display == "block"
      ? checkRef.current.style.display = "none"
      : checkRef.current.style.display = "block"
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const food = allFoods.find(food => "/preview/" + food.id === location.pathname);
    setSelectedFood(food);
  }, [location.pathname]);

  const handleToppingsClick = (e) => {
    const type = e.target.textContent.trim().toLowerCase();
    if (toppingsList[type]) {
      setSelectedToppingType(type);
    }
  }

  const renderToppings = (type) => {
    if (toppingsList[type]) {
      return toppingsList[type].map(topping => <ModalPreviewToppings toppingsEl={topping} />);
    }
    return null;
  }

  const [toppingsBool, setToppingsBool] = useState({
    meat: true, // 1. Set meat to true by default
    vegetables: false,
    cheeses: false,
    sauces: false,
  })

  const [isImageZoomed, setImageZoom] = useState(false); // 2. State for checking if the image is zoomed

  const handleImageClick = () => {
    setImageZoom(!isImageZoomed); // Toggle image zoom on click
  }

  const imgFoodStyle = isImageZoomed ? { transform: "scale(2)", transition: "transform 0.3s ease-in-out" } : {}; // Define style for zoom

  return (
    <>
      <div style={{ position: "fixed", top: "0", left: "0", zIndex: "1" }}>
        <Header />
        <Navbar
          basket={basket}
          setBasket={setBasket}
          active={activeModal}
          setActive={setActiveModal}
          countTotal={countTotal}
          setCountTotal={setCountTotal}
        />
      </div>
      <div className={cl.preview}>
        <img
          className={cl.imgFood}
          src={"/photo/food/" + selectedFood.img + "-optimize.jpg"}
          alt="food"
          onClick={handleImageClick} // 2. Add click handler
          style={imgFoodStyle} // Apply the style
        />
        <div className={cl.previewContent}>
          <h4> {selectedFood.title} </h4>
          <p> {selectedFood.ingredients} </p>
          <div style={{ display: 'flex', flexDirection: "column" }}>
            <div className={cl.dropdown}>
              <div className={cl.addToppings}>
                <p> Add more toppings </p>
                <span> {'>'} </span>
              </div>
              <div className={cl.dropdownContent}>
                <div className={cl.toppingsType} ref={toppingsTypeRef} onClick={handleToppingsClick}>
                  <h3> Meat </h3>
                  <h3> Vegetables </h3>
                  <h3> Cheeses </h3>
                  <h3> Sauces </h3>
                  <h3> Remove from composition </h3>
                </div>
                {renderToppings(selectedToppingType)}
              </div>
            </div>
            <span> Options </span>
          </div>
          <input type="text" tabIndex="0" value="30cm" aria-autocomplete="list" aria-label="Select size" readOnly />
          <input type="text" tabIndex="0" value="Traditional" aria-autocomplete="list" aria-label="Select size" readOnly />
          <div className={cl.cheese} onClick={cheeseFunc}>
            <input type="checkBox" />
            <span>
              <svg viewBox="0 0 14 10">
                <path fill="rgb(112, 164, 1)" d="..."></path>
              </svg>
            </span>
            <span> Double cheese </span>
          </div>
          <span onClick={() => addFoodToBasket(selectedFood)}>
            <Basket title={"To basket"} />
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}