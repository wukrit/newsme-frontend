import { apiUrl } from '../../config'

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
    })
}

export default {
  login,
  persist
}
