import { SET_HEADER } from '../constants/header'
import { getHeaderData } from '../api/api'

export const setHeader = header => ({
  type: SET_HEADER,
  payload: { ...header }
})

export const getHeader = () => dispatch => {
  getHeaderData().then(header => {
    dispatch(setHeader(header))
  })
}
