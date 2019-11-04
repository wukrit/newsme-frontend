import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer, signupReducer } from './reducerExporter'

const reducers = combineReducers({
  user: userReducer,
  signup: signupReducer
})

export default createStore(reducers, applyMiddleware(thunk))
