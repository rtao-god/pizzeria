import { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import cl from './ModalFoodSwiper.module.sass'
import { allFoods } from '@/food/foodArray'
import 'swiper/css'
import Basket from '@/common/controls/BasketButton/BasketButton'
import { Context } from '@all/context'

export default function ModalFoodSwiper() {
  const context = useContext(Context)

  const allFood = allFoods.map(el => {
    if (el.rec == true) {
      return (
        <div key={el.id} className={cl.cart}>
          <img src={'/photo/food/' + el.img + '-optimize.jpg'} alt="recFood" />
          <div className={cl.cartContent}>
            <h3> Roman Pizza Margherita </h3> <br />
            <p className={cl.priceCart}> 576$ </p> <br />
            <div onClick={() => context.addFoodToBasket(el)} className={cl.footerCart}>
              <Basket title={'Add to cart'} />
            </div>
          </div>
        </div>
      )
    }
  })

  return (
    <div className={cl.modalFoodSwiper}>
      <p> WE RECOMMEND ADDING </p> <br />
      <Swiper loop={true} spaceBetween={10} slidesPerView={2.5}>
        {allFood.map(el => {
          if (el !== undefined) {
            return <SwiperSlide key={el.key}>{el}</SwiperSlide>
          }
        })}
      </Swiper>
    </div>
  )
}
