/* Import libraries */
import React from 'react'

/* Import styles */
import styles from './Filter.module.scss'

const Filter = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.inputWrapper}>
        <span className={styles.title}>фильтр</span>
        <input type="text" className={styles.input} />
      </div>
      <button type="button" className={styles.btn}>
        Сбросить
      </button>
    </div>
  )
}

export default Filter
