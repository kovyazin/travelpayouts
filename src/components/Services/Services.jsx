/* Import libraries */
import React from 'react'

/* Import components */
import ServicesList from './ServicesList/ServicesList'
import Filter from '../Filter/Filter'

/* Import styles */
import styles from './Services.module.scss'

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.title}>Сервисы</div>
      <div className={styles.filter}>
        <Filter />
      </div>
      <ServicesList />
    </div>
  )
}

export default Services
