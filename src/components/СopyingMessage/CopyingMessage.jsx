/* Import libraries */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import action creators */
import { removeShowMessage } from '../../actionCreators/services'

/* Import styles */
import styles from './CopyingMessage.module.scss'

const CopyingMessage = ({ removeShowMessage, message }) => {
  useEffect(() => {
    const timer = setTimeout(removeShowMessage, 2000)
    return () => clearTimeout(timer)
  }, [])

  return <div className={styles.copyingMessage}>{message}</div>
}

CopyingMessage.propTypes = {
  removeShowMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

const mapStateToProps = ({ services: { copyingMessageText } }) => ({
  message: copyingMessageText
})

export default connect(mapStateToProps, { removeShowMessage })(CopyingMessage)
