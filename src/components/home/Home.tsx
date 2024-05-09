import React from "react"
import styles from './Home.module.css'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "types/types"
import ActionButton from "components/shared/actionButton/ActionButton"
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import RedBullSponsor from '../../assets/SponsorRedBull.png'
import ForbesSponsor from '../../assets/SponsorForbes.png'
import FortyneSponsor from '../../assets/SponsorFortune.png'
import { motion } from "framer-motion"
import Layout from "components/shared/contentLayout/Layout"

type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: HomeProps) => {

  return (
    <section id="home" className={styles.home}>
      <Layout>
        <motion.div className={styles.home_container}
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          <div className={styles.home_basis}>
            <motion.div className={styles.home_relative_box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className={styles.home_bg_text}>
                <h1 className={styles.main_title}>EVOGYM</h1>
                <h2 className={styles.subtitle}>evolutionary fitness.</h2>
              </div>
              <p className={styles.text}>Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.</p>
            </motion.div>
            <motion.div className={styles.btn_box}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}> Join Now</ActionButton>
              <AnchorLink className={styles.link} href={`#${SelectedPage.ContactUs}`} onClick={() => setSelectedPage(SelectedPage.ContactUs)}>
                Learn More
              </AnchorLink>
            </motion.div>
          </div>
          <div className={styles.img_box}>
            <img src={HomePageGraphic} alt="home-pageGraphis" />
          </div>
        </motion.div>
      </Layout>
      <div className={styles.sponsor_box}>
        <Layout>
          <div className={styles.sponsor_list}>
            <img src={ForbesSponsor} alt="forbes-sponsor" />
            <img src={RedBullSponsor} alt="redbull-sponsor" />
            <img src={FortyneSponsor} alt="fortune-sponsor" />
          </div>
        </Layout>
      </div>
    </section>
  )
}

export default Home