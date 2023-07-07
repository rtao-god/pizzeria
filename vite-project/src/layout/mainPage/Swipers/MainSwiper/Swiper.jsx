import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './Swiper.module.css'
import './button.css'
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function MainSwiper() {
    const images = [
        { id: 1, path: 'application' },
        { id: 2, path: 'availablePizzas' },
        { id: 3, path: 'discount' },
        { id: 4, path: 'profitableDays' },
    ]

    const slides = images.map(el =>
        <img key={el.id} src={'/src/assets/photo/food/' + el.path + '.jpg'} alt={el.path + '-Swiper'} />
    )

    return (
        <div className={cl.swiperWrapper}>
            <Swiper
                className={cl.myMainSwiper}
                modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                slidesPerView={1}
                pagination={{
                    el: ".swiper-pagination-big",
                    clickable: true,
                    hide: true,
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
            <div className={"swiper-pagination-big"}></div>
        </div>
    )
}