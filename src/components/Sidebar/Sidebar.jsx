/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './Sidebar.module.scss'

/* Import assets */
import logo from './logo.svg'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <span className={styles.navCircle} />
        </div>
        <div className={styles.navItem}>
          <span className={styles.navCircle} />
        </div>
        <div className={styles.navItem}>
          <span className={styles.navCircle} />
        </div>
        <div className={styles.navItem}>
          <span className={styles.navCircle} />
        </div>
        <div className={styles.navItem}>
          <span className={styles.navCircle} />
        </div>
        <div className={styles.navItem}>
          <span className={styles.navCircle} />
        </div>
        <div className={styles.navItem}>
          <span className={styles.navCircle} />
        </div>
        <div className={styles.navItem}>
          <span className={styles.navCircle} />
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
