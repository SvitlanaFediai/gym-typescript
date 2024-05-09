import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll";
import styles from './Link.module.css'
import { SelectedPage } from "types/types";

type LinkProps = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Link = ({page, selectedPage, setSelectedPage}: LinkProps) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage
  
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? styles.link_active : styles.link}`} href={`#${lowerCasePage}`} onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  )
}

export default Link