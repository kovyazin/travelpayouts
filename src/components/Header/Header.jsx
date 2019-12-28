/* Import libraries */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import action creators */
import { getHeader } from '../../actionCreators/header'
import { showSidebar, hideSidebar } from '../../actionCreators/sidebar'

/* Import styles */
import styles from './Header.module.scss'

const Header = ({
  getHeader,
  balance,
  nextPayout,
  currency,
  isShowSidebar,
  showSidebar,
  hideSidebar
}) => {
  useEffect(() => {
    getHeader()
  }, [getHeader])

  const toggleSidebar = () => {
    isShowSidebar ? hideSidebar() : showSidebar()
  }

  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <div className={styles.itemTitle}>Баланс</div>
        <div className={styles.itemSum}>
          {`${balance.toLocaleString()} ${currency === 'rub' ? '₽' : ''}`}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTitle}>К выплате</div>
        <div className={styles.itemSum}>
          {`${nextPayout.toLocaleString()} ${currency === 'rub' ? '₽' : ''}`}
        </div>
      </div>
      <button
        type="button"
        onClick={toggleSidebar}
        className={`${styles.hamburgerBtn} ${
          isShowSidebar ? styles.active : ''
        }`}
      >
        <span className={styles.hamburgerLine} />
      </button>
    </header>
  )
}

Header.defaultProps = {
  currency: null
}

Header.propTypes = {
  getHeader: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
  nextPayout: PropTypes.number.isRequired,
  currency: PropTypes.string,
  isShowSidebar: PropTypes.bool.isRequired,
  showSidebar: PropTypes.func.isRequired,
  hideSidebar: PropTypes.func.isRequired
}

const mapStateToProps = ({
  header: { balance, nextPayout, currency },
  sidebar: { isShowMobile: isShowSidebar }
}) => ({
  balance,
  nextPayout,
  currency,
  isShowSidebar
})

export default connect(mapStateToProps, {
  getHeader,
  showSidebar,
  hideSidebar
})(Header)
