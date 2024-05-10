import React from "react"
import styles from './Benefits.module.css'
import { motion } from "framer-motion"
import { SelectedPage } from "types/types"
import { benefits } from "../../data/benefits"
import image from '../../assets/BenefitsPageGraphic.png'
import ActionButton from "components/shared/actionButton/ActionButton"
import TitleSection from "components/shared/titleSection/TitleSection"
import Layout from "components/shared/contentLayout/Layout"
import BenefitCard from "components/shared/benefitCard/BenefitCard"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: BenefitsProps) => {

  return (
    <section id="benefits" className={styles.benefits}>
      <Layout>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <TitleSection>MORE THAN JUST GYM.</TitleSection>
            <p className={styles.section_desc}> We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
          </motion.div>
          <motion.div className={styles.benefits_list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
          >
            {benefits.map((benefit) =>(
              <BenefitCard benefit={benefit} setSelectedPage={setSelectedPage} key={benefit.title}/>
            ))}
          </motion.div>

          <div className={styles.benefit_detail}>
            <img src={image} alt="benefit-gym" />
            <div className={styles.benefit_info}>
              <div className={styles.benefit_waves}>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <TitleSection>MILLIONS OF HAPPY MEMBERS GETTING{" "}<span className={styles.benefit_subtext}>FIT</span>.</TitleSection>
                </motion.div>
              </div>
              <motion.div className={styles.benefit_desc}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className={styles.text}> Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.</p>
                <p className={styles.text}>Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
              </motion.div>
              <div className={styles.benefit_btn}>
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </section>
  )
}

export default Benefits