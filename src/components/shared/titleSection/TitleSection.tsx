import React from '@babel/template'
import styles from './TitleSection.module.css'

type TitleProps = {
  children: React.ReactNode
}

const TitleSection = ({ children }: TitleProps) => {
  return (
    <h2 className={styles.section_title}>{children}</h2>
  )
}

export default TitleSection