import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './Swiper.module.css'
import 'swiper/css'
import 'swiper/css/virtual';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function SwiperArrow() {

    const [images, setImages] = useState([
        { path: 'application' },
        { path: 'availablePizzas' },
        { path: 'discount' },
        { path: 'profitableDays' },

    ])

    const slides = images.map(
        (el) =>
            <img src={'photo/swiperCircle/' + el.path + '.jpg'} alt={el.path + '-Swiper'} />
    )

    return (
        <div>
            <Swiper
                className={cl.mySwiperCircle}
                modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                slidesPerView={1}
                style={{ position: "absolute"}}
            >
                {slides.map((slideContent) => (
                    <SwiperSlide>
                        <a href='#'>
                            {slideContent}
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}