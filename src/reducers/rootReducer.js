import { combineReducers } from 'redux'
import servicesReducer from './servicesReducer'
import headerReducer from './headerReducer'
import sidebarReducer from './sidebarReducer'

const rootReducer = combineReducers({
  services: servicesReducer,
  header: headerReducer,
  sidebar: sidebarReducer
})
export default rootReducer
