import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './Swiper.module.css'
import './button.css'

import 'swiper/css'
import 'swiper/css/virtual';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function BigSwiper() {

    const [images, setImages] = useState([
        { path: 'application' },
        { path: 'availablePizzas' },
        { path: 'discount' },
        { path: 'profitableDays' },
    ])

    const slides = images.map(
        (el) =>
            <img src={'assets/photo/food/' + el.path + '.jpg'} alt={el.path + '-Swiper'} />
    )

    return (
        <div className={cl.swiperWrapper}>
            <Swiper
                className={cl.myBigSwiper}
                modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                slidesPerView={1}
                pagination={{
                    el: ".swiper-pagination-big",
                    clickable: true,
                    hide: true,
                }}
            >

                {slides.map((slideContent) => (
                    <SwiperSlide>
                        <a href='#'>
                            {slideContent}
                        </a>
                    </SwiperSlide>
                ))}
                <div className={cl["swiper-pagination-big"]}></div>
            </Swiper>
        </div>
    )
}