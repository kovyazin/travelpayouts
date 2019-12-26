/* Import libraries */
import React from 'react'

/* Import components */
import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'

/* Import styles */
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App
