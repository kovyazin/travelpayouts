import {
  REMOVE_COPY_MESSAGE,
  SET_BONUSES_DATA,
  SHOW_COPY_MESSAGE
} from '../constants/services'

const initialState = {
  bonuses: [],
  isShowCopy: false,
  copyingMessageText: ''
}

const servicesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BONUSES_DATA:
      return {
        ...state,
        bonuses: payload.bonuses
      }
    case SHOW_COPY_MESSAGE:
      return {
        ...state,
        isShowCopy: true,
        copyingMessageText: payload.msg
      }
    case REMOVE_COPY_MESSAGE:
      return {
        ...state,
        isShowCopy: false,
        copyingMessageText: ''
      }
    default:
      return state
  }
}

export default servicesReducer
