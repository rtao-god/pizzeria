import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './Swiper.module.sass'
import './button.css'
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function MainSwiper() {
  const images = [
    { path: 'application' },
    { path: 'availablePizzas' },
    { path: 'discount' },
    { path: 'profitableDays' },
  ]

  const slides = images.map((el, index) => (
    <img key={index} src={'/photo/mainSwiper/' + el.path + '.jpg'} alt={el.path + '-Swiper'} />
  ))

  return (
    <div className={cl.wrapper}>
      <div className={cl.swiperWrapper}>
        <Swiper
          className={cl.myMainSwiper}
          modules={[Virtual, Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          slidesPerView={1}
          pagination={{
            el: '.swiper-pagination-big',
            clickable: true,
            hide: true,
          }}
        >
          {slides.map(slideContent => (
            <SwiperSlide key={slideContent.key}>
              <a href="#">{slideContent}</a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={'swiper-pagination-big'}></div>
      </div>
    </div>
  )
}
