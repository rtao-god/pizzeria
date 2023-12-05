import React, { useEffect, useState } from 'react'
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
        { path: 'lgaEYy2LRHmv4jhMIHMA622JDsgfbDcFKmY0YCHs' },
        { path: 'QztOKIZrb2egbPgpGRVpy3YvdfL937lChV7aDJMm' },
        { path: 'GdPhJuTNJlj0FXuMbw3brw56m3WFphvqCjlfrzwV' },
        { path: 'STA6batBmx4i9VsOx63d7ojyXvaAvqzU9AA7AQRp' },
        { path: 'YDOqhJViYiiqL52DgENTN6axMFlIm7IuoG4M5nLo' },
        { path: 'YfNdfLy4KIvAFTydyoeznSvzkz5q9Oqt2FcA84K3' },
        { path: 'I4QwwXPwdo1DEWxWjKos9krnQO5tdpIAPuRNdnZs' },
        { path: 'VsUAusHoqhF79lPQoqHe4ViG0rQxODTi4ZHVyb4K' },
    ]

    const slides = images.map((el, index) =>
        <img key={index} src={'/photo/swiperStories/' + el.path + '-optimize.jpg'} alt={el.path + '-Swiper Stories'} />
    )

    return (
        <span className={cl.mySwiperStories}>
            <span className={"swiper-button-stories swiper-button-prev-stories"}>
                <FontAwesomeIcon style={{ width: "12px", height: "12px", padding: "10px" }} icon={faChevronLeft} />
            </span>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                initialSlide={2}
                spaceBetween={12}
                slidesPerView={3.5}
                centeredSlides={true}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next-stories",
                    prevEl: ".swiper-button-prev-stories",
                    disabledClass: "swiper-button-disabled"
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    320: {
                        slidesPerView: 2
                    },
                    620: {
                        slidesPerView: 2.5
                    },
                    1000: {
                        slidesPerView: 3.5
                    }
                }}
            >
                {slides.map(slideContent => (
                    <SwiperSlide key={slideContent.key}>
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>

            <span className={"swiper-button-next-stories swiper-button-stories"}>
                <FontAwesomeIcon style={{ width: "12px", height: "12px", padding: "10px" }} icon={faChevronRight} />
            </span>
        </span>
    )
}