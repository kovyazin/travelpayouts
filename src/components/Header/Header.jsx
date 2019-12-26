/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <div className={styles.itemTitle}>Баланс</div>
        <div className={styles.itemSum}>213 920 ₽</div>
      </div>
      <div className={styles.item}>
        <div className={styles.itemTitle}>К выплате</div>
        <div className={styles.itemSum}>159 465 ₽</div>
      </div>
    </header>
  )
}

export default Header
