import React from "react"
import styles from './TestimonialCard.module.css'
import { TestimonialType } from "types/types"

type TestimonialProps = {
  item: TestimonialType
}

const TestimonialCard = ({ item }: TestimonialProps) => {

  return (
    <div className={styles.testimonial_card}>
      <div className={styles.slide_img}>
        <img src={item.image} alt={item.name} />
      </div>
      <div>
        <h4 className={styles.testimonial_name}>{item.name}</h4>
        <p className={styles.testimonial_comment}>{item.comment}</p>
      </div>
    </div>
  )
}

export default TestimonialCard