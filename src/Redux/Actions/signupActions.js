import { apiUrl } from '../../config'

const setEmail = payload => ({
  type: 'SET_EMAIL',
  payload
})

const setLoginEmail = payload => ({
  type: 'SET_LOGIN_EMAIL',
  payload
})

const setLoginPassword = payload => ({
  type: 'SET_LOGIN_PASSWORD',
  payload
})

const setPassword = payload => ({
  type: 'SET_PASSWORD',
  payload
})

const signup = dispatch => userObj => {
  fetch(`${apiUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObj)
  })
    .then(response => response.json())
    .then(user => {
      dispatch({ type: 'SET_USER', payload: user })
      dispatch({ type: 'SIGNUP' })
      console.log(user)
    })
}

export default {
  setEmail,
  setLoginEmail,
  setPassword,
  setLoginPassword,
  signup,
}
