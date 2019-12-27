import { SET_HEADER } from '../constants/header'

const initialState = {
  balance: 0,
  nextPayout: 0,
  currency: null
}

const headerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HEADER:
      return {
        ...state,
        balance: payload.balance,
        nextPayout: payload.next_payout,
        currency: payload.currency
      }
    default:
      return state
  }
}

export default headerReducer
