import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { testimonials } from '../../../data/testimonials'
import TestimonialCard from "../testimonialCard/TestimonialCard"
import { EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import styles from './TestimonialSwiper.module.css'

const TestimonialSwiper = () => {

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      loop={true}
      modules={[EffectCards]}
    >
      <div>
        {testimonials.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          )
        })}
      </div>
    </Swiper>
  )
}

export default TestimonialSwiper