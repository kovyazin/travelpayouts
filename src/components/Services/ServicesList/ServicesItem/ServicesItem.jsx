/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './ServicesItem.module.scss'

const ServicesItem = () => {
  return (
    <div className={styles.servicesItem}>
      <div className={styles.info}>
        <div className={styles.title}>Nethouse</div>
        <div className={styles.description}>Описание</div>
      </div>
      <div className={styles.promoCode}>
        <div className={styles.promoCodeTitle}>промокод</div>
        <div className={styles.promoCodeField}>Travelpayouts</div>
      </div>
      <button type="button" className={styles.btn}>
        Получить бонус
      </button>
    </div>
  )
}

export default ServicesItem
