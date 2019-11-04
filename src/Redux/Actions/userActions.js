import { apiUrl } from '../../config'

const signup = userObj => dispatch => {
  fetch(`${apiUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  })
    .then(response => response.json())
    .then(user => {
      // SET_USER doesnt do anything yet
      dispatch({ type: 'SET_USER', payload: user })
      dispatch({ type: 'SIGNUP' })
      console.log(user)
    })
}

const login = userObj => dispatch => {
  fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  })
    .then(response => response.json())
    .then(user => {
      dispatch({ type: 'SET_USER', payload: user })
      console.log(user)
    })
}

const persist = token => dispatch => {
  fetch(`${apiUrl}/login`, {
    headers: {
      Authorization: token
    }
  })
    .then(response => response.json())
    .then(user => {
      dispatch({ type: 'SET_USER', payload: user })
      console.log(user)
    })
}

export default {
  signup,
  login,
  persist
}
