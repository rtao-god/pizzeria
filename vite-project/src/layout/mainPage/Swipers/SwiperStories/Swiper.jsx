import React from 'react'
import { Virtual, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './Swiper.module.css'
import './button.css'
import 'swiper/css'
import 'swiper/css/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function SwiperStories() {
    const images = [
        { id: 1, path: 'secretPromoCode' },
        { id: 2, path: 'adPizzas' },
        { id: 3, path: 'contacts' },
        { id: 4, path: 'superDiscount' },
        { id: 5, path: 'legendaryTaste' },
        { id: 6, path: 'points' },
        { id: 7, path: 'discount' },
        { id: 8, path: 'safety' },
        { id: 9, path: 'icePizza' },
        { id: 10, path: 'vegetarians' },
    ]

    const slides = images.map(el =>
        <img key={el.id} src={'assets/photo/swiperStories/' + el.path + '.jpg'} alt={el.path + '-Swiper'} />
    )

    return (
        <span className={cl.mySwiperStories}>
            <span className={"swiper-button-stories swiper-button-prev-stories"}>
                <FontAwesomeIcon style={{ width: "12px", height: "12px", padding: "10px" }} icon={faChevronLeft} />
            </span>
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
                {slides.map(slideContent => (
                    <SwiperSlide key={slideContent.key}>
                        <a href='#'>
                            {slideContent}
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <span className={"swiper-button-next-stories swiper-button-stories"}>
                <FontAwesomeIcon style={{ width: "12px", height: "12px", padding: "10px" }} icon={faChevronRight} />
            </span>
        </span>
    )
}