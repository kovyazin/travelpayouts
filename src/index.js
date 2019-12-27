/* Import libraries */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

/* Import components */
import App from './components/App/App'

/* Import store */
import store from './store/store'

/* Import styles */
import './index.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
