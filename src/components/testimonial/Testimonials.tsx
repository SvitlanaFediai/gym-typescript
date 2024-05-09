import React from "react"
import styles from './Testimonials.module.css'
import { SelectedPage } from "types/types"
import { motion } from "framer-motion"
import Layout from "components/shared/contentLayout/Layout"
import TitleSection from "components/shared/titleSection/TitleSection"
import TestimonialSwiper from "components/shared/testimonialSwiper/TestimonialSwiper"
import BMI from "components/shared/BMI/BMI"

type TestimonialsProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const Testimonials = ({ setSelectedPage }: TestimonialsProps) => {

  return (
    <section id="testimonials" className={styles.testimonials}>
      <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        >
        <Layout>
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
          >
            <div className={styles.testimonials_box}>
              <motion.div
                className={styles.testimonials_desc}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <TitleSection>TESTIMONIALS</TitleSection>
                <p className={styles.section_desc}>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
              </motion.div>
              <motion.div className={styles.swiper_container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <TestimonialSwiper />
              </motion.div>
            </div>
          </motion.div>
        </Layout>
        <div className={styles.bmi}>
          <Layout>
            <BMI />
          </Layout>
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials