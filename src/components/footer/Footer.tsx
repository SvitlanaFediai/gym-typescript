import React from "react"
import styles from './Footer.module.css'
import Layout from "components/shared/contentLayout/Layout"
import Logo from "../../assets/Logo.png"

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <Layout>
        <div className={styles.footer_box}>
          <div className={styles.footer_logo}>
            <img src={Logo} alt="logo" />
            <p className={styles.footer_text}>
              Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
              purus et arcu massa dictum condimentum. Augue scelerisque iaculis
              orci ut habitant laoreet. Iaculis tristique.
            </p>
            <p>© Evogym All Rights Reserved.</p>
          </div>
          <div className={styles.footer_links}>
            <h4 className={styles.footer_subtitle}>Links</h4>
            <p className={styles.footer_text}>Massa orci senectus</p>
            <p className={styles.footer_text}>Et gravida id et etiam</p>
            <p>Ullamcorper vivamus</p>
          </div>
          <div className={styles.footer_contact}>
            <h4 className={styles.footer_subtitle}>Contact Us</h4>
            <p className={styles.footer_text}>Tempus metus mattis risus volutpat egestas.</p>
            <p>(064)425-6825</p>
          </div>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer