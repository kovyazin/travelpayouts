/* Import libraries */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import components */
import Sidebar from '../Sidebar/Sidebar'
import Main from '../Main/Main'

/* Import action creators */
import { getBonuses } from '../../actionCreators/services'

/* Import styles */
import styles from './App.module.scss'

const App = ({ getBonuses }) => {
  useEffect(() => {
    getBonuses()
  }, [getBonuses])

  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  )
}

App.propTypes = {
  getBonuses: PropTypes.func.isRequired
}

export default connect(() => ({}), { getBonuses })(App)
