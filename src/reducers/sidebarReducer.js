import { HIDE_SIDEBAR, SHOW_SIDEBAR } from '../constants/sidebar'

const initialState = {
  isShowMobile: false
}

const sidebarReducer = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        isShowMobile: true
      }
    case HIDE_SIDEBAR:
      return {
        ...state,
        isShowMobile: false
      }
    default:
      return state
  }
}

export default sidebarReducer
