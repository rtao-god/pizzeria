import React, { useState } from 'react'

import { Virtual, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import cl from './Swiper.module.css'
import './button.css'

import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function SwiperStories() {

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
            <img src={'assets/photo/swiperStories/' + el.path + '.jpg'} alt={el.path + '-Swiper'} />
    )

    return (
        <div className={cl.mySwiperStories}>
            <div className="swiper-button-stories swiper-button-prev-stories">
                <FontAwesomeIcon style={{ width: "12px", height: "12px", padding: "10px" }} icon={faChevronLeft} />
            </div>
            <Swiper
                modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                navigation={{
                    nextEl: ".swiper-button-next-stories",
                    prevEl: ".swiper-button-prev-stories",
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
            <div className="swiper-button-stories swiper-button-next-stories">
                <FontAwesomeIcon style={{ width: "12px", height: "12px", padding: "10px" }} icon={faChevronRight} />
            </div>
        </div>
    )
}