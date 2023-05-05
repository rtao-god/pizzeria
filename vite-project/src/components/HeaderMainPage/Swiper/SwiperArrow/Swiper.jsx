import React, { useState } from 'react'

import { Virtual, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from './Swiper.module.css'
import './buttonArrow.css'

import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default function SwiperArrow() {

    const [images, setImages] = useState([
        { path: 'secretPromoCode' },
        { path: 'adPizzas' },
        { path: 'contacts' },
        { path: 'superDiscount' },
        { path: 'legendaryTaste' },
        { path: 'points' },
        { path: 'discount' },
        { path: 'safety' },
        { path: 'icePizza' },
        { path: 'vegetarians' },

    ])

    const slides = images.map(
        (el) =>
            <img src={'photo/swiperArrow/' + el.path + '.jpg'} alt={el.path + '-Swiper'} />
    )

    return (
        <div className={cl.mySwiperArrow}>
            <div className="swiper-button-arrow swiper-button-prev-arrow">
                <FontAwesomeIcon style={{ width: "12px", height: "12px", padding: "10px" }} icon={faChevronLeft} />
            </div>
            <Swiper
                modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                navigation={{
                    nextEl: ".swiper-button-next-arrow",
                    prevEl: ".swiper-button-prev-arrow",
                    disabledClass: "swiper-button-disabled"
                }}
            >
                {slides.map((slideContent) => (
                    <SwiperSlide>
                        <a href='#'>
                            {slideContent}
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-button-arrow swiper-button-next-arrow">
                <FontAwesomeIcon style={{ width: "12px", height: "12px", padding: "10px" }} icon={faChevronRight} />
            </div>
        </div>
    )
}