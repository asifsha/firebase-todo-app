import { createStore, combineReducers, applyMiddleware } from 'redux';


import reducers from './reducers'
import middleware from './middleware'

export default createStore(
  combineReducers({
    ...reducers  
  }),
  applyMiddleware(...middleware)
)