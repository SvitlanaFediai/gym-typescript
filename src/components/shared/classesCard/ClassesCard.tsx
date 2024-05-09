import React from 'react'
import styles from './ClassesCard.module.css'
import { ClassType } from '../../../types/types'

type ClassesProps = {
  item: ClassType
}

const ClassesCard = ({ item }: ClassesProps) => {
  return (
    <div className={styles.class_card}>
      <div className={styles.class_info}>
        <p className={styles.class_name}>{item.name}</p>
        <p className={styles.class_desc}>{item.description}</p>
      </div>
      <img src={item.image} alt={item.name} />
    </div>
  )
}

export default ClassesCard