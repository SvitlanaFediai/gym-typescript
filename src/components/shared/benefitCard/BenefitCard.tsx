import React from 'react'
import styles from './BenefitCard.module.css'
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import { BenefitType } from '../../../types/types'
import { SelectedPage } from "types/types"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

type BenefitProps = {
  benefit: BenefitType
  setSelectedPage: (value: SelectedPage) => void
}

const BenefitCard = ({ benefit, setSelectedPage }: BenefitProps) => {
  return (
    <motion.div className={styles.benefit_card}
      variants={childVariant}
    >
      <div className={styles.benefit_icon_box}>
        <div className={styles.benefit_icon}>{benefit.icon}</div>
      </div>
      <div className={styles.benefit_info}>
        <h4 className={styles.benefit_title}>{benefit.title}</h4>
        <p className={styles.benefit_desc}>{benefit.description}</p>
      </div>
      <div className={styles.benefit_overlay}>
        <AnchorLink onClick={() => setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}><ArrowRightIcon className={styles.benefit_icon}/></AnchorLink>
      </div>
    </motion.div>
  )
}

export default BenefitCard