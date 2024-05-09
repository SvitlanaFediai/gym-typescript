import React from "react"
import styles from './Contact.module.css'
import { SelectedPage } from "types/types"
import ContactUs from '../../assets/ContactUsPageGraphic.png'
import { motion } from "framer-motion"
import Layout from "components/shared/contentLayout/Layout"
import TitleSection from "components/shared/titleSection/TitleSection"
import ContactForm from "components/shared/contactForm/ContactForm"

type ContactProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const Contact = ({ setSelectedPage }: ContactProps) => {

  return (
    <section id="contactus" className={styles.contact}>
      <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        >
        <Layout>
          <motion.div
            className={styles.contact_header}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <TitleSection><span className={styles.title_span}>JOIN NOW</span> TO GET IN SHAPE</TitleSection>
            <p className={styles.section_desc}>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
          </motion.div>
          <div className={styles.contact_form}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            > 
              <ContactForm />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className={styles.contact_img}>
                <img src={ContactUs} alt="contact-us" />
              </div>
            </motion.div>
          </div>
        </Layout>
      </motion.div>
    </section>
  )
}

export default Contact