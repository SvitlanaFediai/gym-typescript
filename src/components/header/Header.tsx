import React, { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import styles from './Header.module.css'
import Logo from '../../assets/Logo.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import Link from "components/shared/link/Link"
import { SelectedPage } from "types/types"
import ActionButton from "components/shared/actionButton/ActionButton"
import Layout from "components/shared/contentLayout/Layout"

type HeaderProps = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Header = ({ isTopOfPage, selectedPage, setSelectedPage }: HeaderProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

  return (
    <header className={`${styles.nav_bar_wrapper} ${isTopOfPage ? '' : styles.navBar_bg}`}>
      <Layout>
        <div className={styles.nav_bar}>
          <div className={styles.logo}>
              <AnchorLink href="#"> 
                <img src={Logo} alt="" />
              </AnchorLink>
          </div>
          <nav className={`${styles.menu} ${isMenuToggled ? '' : styles.active}`}>
            <div className={styles.menu_links}>
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
            <div className={styles.login}>
              <button type="button" className={styles.login_btn}>Sign In</button>
              <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
            </div>
          </nav>
          <div className={styles.mobile_menu}>
            {
              isMenuToggled ?
              <button className={styles.mobile_btn} onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className={styles.icon} />
              </button>
              :
              <button className={styles.close_btn} onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className={styles.close_icon} />
              </button>
            }
          </div>
        </div>
      </Layout>
    </header>
  )
}

export default Header