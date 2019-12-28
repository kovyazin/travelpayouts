/* Import libraries */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import styles */
import styles from './Sidebar.module.scss'

/* Import assets */
import logo from './logo.svg'

const Sidebar = ({ isShowMobile }) => {
  return (
    <div className={`${styles.sidebar} ${isShowMobile ? styles.active : ''}`}>
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

Sidebar.propTypes = {
  isShowMobile: PropTypes.bool.isRequired
}

const mapStateToProps = ({ sidebar: { isShowMobile } }) => ({
  isShowMobile
})

export default connect(mapStateToProps)(Sidebar)
