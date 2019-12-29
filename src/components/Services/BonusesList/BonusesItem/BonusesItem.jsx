/* Import libraries */
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'

/* Import action creators */
import { showCopyMessage } from '../../../../actionCreators/services'

/* Import styles */
import styles from './BonusesItem.module.scss'

const BonusesItem = ({
  title,
  description,
  link,
  promocode,
  showCopyMessage
}) => {
  const onCopyPromocode = (text, result) => {
    if (result && text) showCopyMessage('Промокод скопирован!')
    if (!result && text) showCopyMessage('Не удалось скопировать промокод!')
  }

  return (
    <div className={styles.bonusesItem}>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.promoCode}>
        <div className={styles.promoCodeTitle}>промокод</div>
        <CopyToClipboard text={promocode} onCopy={onCopyPromocode}>
          <div className={styles.promoCodeField}>
            {promocode || 'Промокод отсутствует'}
          </div>
        </CopyToClipboard>
      </div>
      <a
        href={link}
        className={styles.btn}
        target="_blank"
        rel="noopener noreferrer"
      >
        Получить бонус
      </a>
    </div>
  )
}

BonusesItem.defaultProps = {
  title: 'Название отсутствует',
  description: 'Описание отсутствует',
  link: null,
  promocode: null
}

BonusesItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  promocode: PropTypes.string,
  showCopyMessage: PropTypes.func.isRequired
}

export default connect(() => ({}), { showCopyMessage })(BonusesItem)
