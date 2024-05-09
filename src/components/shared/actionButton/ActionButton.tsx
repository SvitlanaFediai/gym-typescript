import React, { Children } from "react"
import styles from './ActionButton.module.css'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "types/types"

type ActionButtonProps = {
  children: React.ReactNode
  setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: ActionButtonProps) => {
  
  return (
    <AnchorLink className={styles.action_btn} href={`#${SelectedPage.ContactUs}`} onClick={() => setSelectedPage(SelectedPage.ContactUs)}>{children} </AnchorLink>
  )
}

export default ActionButton