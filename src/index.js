import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'
import reducer from './features/event/redux'
import 'bulma/css/bulma.css'
import './index.css'
import Register from './features/event/Register'
import registerServiceWorker from './registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [promiseMiddleware(), logger] // more middleware
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

ReactDOM.render(
  <Provider store={store}>
    <Register />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
