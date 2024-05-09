import React from "react"
import styles from './Classes.module.css'
import { motion } from "framer-motion"
import { SelectedPage } from "types/types"
import { classes } from "data/classes"
import TitleSection from "components/shared/titleSection/TitleSection"
import Layout from "components/shared/contentLayout/Layout"
import ClassesCard from "components/shared/classesCard/ClassesCard"

type ClassesProps = {
  setSelectedPage: (value: SelectedPage) => void
}

const Classes = ({ setSelectedPage }: ClassesProps) => {

  return (
    <section id="ourclasses" className={styles.classes}>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
        <Layout>
          <motion.div
            className={styles.classes_desc}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <TitleSection>OUR CLASSES</TitleSection>
            <p className={styles.section_desc}>Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
          </motion.div>
        </Layout>
        <div className={styles.classes_carousel}>
          <div className={styles.classes_list}>
            {classes.map((item, index) => (
              <ClassesCard item={item} key={index}/>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Classes