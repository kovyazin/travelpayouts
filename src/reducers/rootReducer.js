import { combineReducers } from 'redux'
import servicesReducer from './servicesReducer'
import headerReducer from './headerReducer'

const rootReducer = combineReducers({
  services: servicesReducer,
  header: headerReducer
})
export default rootReducer
