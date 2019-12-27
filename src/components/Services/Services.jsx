/* Import libraries */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Import components */
import BonusesList from './BonusesList/BonusesList'
import Filter from '../Filter/Filter'

/* Import styles */
import styles from './Services.module.scss'

const Services = ({ bonuses }) => {
  const [filterValue, setFilterValue] = useState('')
  const [filteredBonuses, setFilteredBonuses] = useState(bonuses)

  useEffect(() => setFilteredBonuses(bonuses), [bonuses])

  return (
    <div className={styles.services}>
      <div className={styles.title}>Сервисы</div>
      <div className={styles.filter}>
        <Filter
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          setFilteredBonuses={setFilteredBonuses}
          bonuses={bonuses}
        />
      </div>
      <BonusesList filteredBonuses={filteredBonuses} />
    </div>
  )
}

Services.propTypes = {
  bonuses: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({ services: { bonuses } }) => ({
  bonuses
})

export default connect(mapStateToProps)(Services)
