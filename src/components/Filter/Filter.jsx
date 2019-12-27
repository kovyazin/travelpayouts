/* Import libraries */
import React from 'react'
import PropTypes from 'prop-types'

/* Import styles */
import styles from './Filter.module.scss'

const Filter = ({
  filterValue,
  setFilterValue,
  setFilteredBonuses,
  bonuses
}) => {
  const handleChangeInput = e => {
    setFilterValue(e.currentTarget.value)
    setFilteredBonuses(
      bonuses.filter(({ title }) =>
        title.toLowerCase().includes(e.currentTarget.value.toLowerCase())
      )
    )
  }

  const handleResetButton = () => {
    setFilterValue('')
    setFilteredBonuses(bonuses)
  }

  return (
    <div className={styles.filter}>
      <div className={styles.inputWrapper}>
        <span className={styles.title}>фильтр</span>
        <input
          type="text"
          className={styles.input}
          value={filterValue}
          onChange={handleChangeInput}
        />
      </div>
      <button type="button" className={styles.btn} onClick={handleResetButton}>
        Сбросить
      </button>
    </div>
  )
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  setFilterValue: PropTypes.func.isRequired,
  setFilteredBonuses: PropTypes.func.isRequired,
  bonuses: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Filter
