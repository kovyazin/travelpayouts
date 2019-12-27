/* Import libraries */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

/* Import components */
import BonusesItem from './BonusesItem/BonusesItem'
import CopyingMessage from '../../СopyingMessage/CopyingMessage'

/* Import styles */
import styles from './BonusesList.module.scss'

const BonusesList = ({ filteredBonuses, isShowCopy }) => {
  return (
    <div>
      {filteredBonuses.map(({ title, link, description, promocode }) => (
        <div className={styles.bonusesItem} key={title}>
          <BonusesItem
            title={title}
            link={link}
            description={description}
            promocode={promocode}
          />
        </div>
      ))}
      <TransitionGroup>
        {isShowCopy && (
          <CSSTransition classNames="fade" timeout={200}>
            <CopyingMessage />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

BonusesList.propTypes = {
  filteredBonuses: PropTypes.arrayOf(PropTypes.object).isRequired,
  isShowCopy: PropTypes.bool.isRequired
}

const mapStateToProps = ({ services: { isShowCopy } }) => ({
  isShowCopy
})

export default connect(mapStateToProps)(BonusesList)
