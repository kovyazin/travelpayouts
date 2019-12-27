/* Import libraries */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import action creators */
import { getHeader } from '../../actionCreators/header'

/* Import styles */
import styles from './Header.module.scss'

const Header = ({ getHeader, balance, nextPayout, currency }) => {
  useEffect(() => {
    getHeader()
  }, [getHeader])

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
  currency: PropTypes.string
}

const mapStateToProps = ({ header: { balance, nextPayout, currency } }) => ({
  balance,
  nextPayout,
  currency
})

export default connect(mapStateToProps, { getHeader })(Header)
