import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './Reducers/userReducer'

const reducers = combineReducers({
    user: userReducer
})

export default createStore(reducers, applyMiddleware(thunk))
