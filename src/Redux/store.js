import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer, signupReducer, feedReducer } from './reducerExporter'

const reducers = combineReducers({
  user: userReducer,
  signup: signupReducer,
  feed: feedReducer
})

export default createStore(reducers, applyMiddleware(thunk))
