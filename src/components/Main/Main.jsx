/* Import libraries */
import React from 'react'

/* Import components */
import Header from '../Header/Header'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'

/* Import styles */
import styles from './Main.module.scss'

const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Services />
      <Footer />
    </div>
  )
}

export default Main
