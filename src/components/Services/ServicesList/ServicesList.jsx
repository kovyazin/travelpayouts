/* Import libraries */
import React from 'react'

/* Import components */
import ServicesItem from './ServicesItem/ServicesItem'

/* Import styles */
import styles from './ServicesList.module.scss'

const ServicesList = () => {
  return (
    <div className={styles.servicesList}>
      <div className={styles.servicesItem}>
        <ServicesItem />
      </div>
      <div className={styles.servicesItem}>
        <ServicesItem />
      </div>
      <div className={styles.servicesItem}>
        <ServicesItem />
      </div>
      <div className={styles.servicesItem}>
        <ServicesItem />
      </div>
      <div className={styles.servicesItem}>
        <ServicesItem />
      </div>
      <div className={styles.servicesItem}>
        <ServicesItem />
      </div>
      <div className={styles.servicesItem}>
        <ServicesItem />
      </div>
      <div className={styles.servicesItem}>
        <ServicesItem />
      </div>
    </div>
  )
}

export default ServicesList
