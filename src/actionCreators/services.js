import {
  REMOVE_COPY_MESSAGE,
  SET_BONUSES_DATA,
  SHOW_COPY_MESSAGE
} from '../constants/services'
import { getBonusesData } from '../api/api'

export const setBonuses = bonuses => ({
  type: SET_BONUSES_DATA,
  payload: { bonuses }
})
export const getBonuses = () => dispatch => {
  getBonusesData().then(bonuses => {
    dispatch(setBonuses(bonuses))
  })
}
export const showCopyMessage = msg => ({
  type: SHOW_COPY_MESSAGE,
  payload: { msg }
})
export const removeShowMessage = () => ({
  type: REMOVE_COPY_MESSAGE
})
