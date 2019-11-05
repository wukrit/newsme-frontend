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

const editUser = dispatch => (body, token) => {
  console.log(body)
  console.log(token)
  fetch(`${apiUrl}/users/edit`, {
    method: 'PATCH',
    headers: {
      Authorization: token,
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(user => {
    dispatch({ type: 'SET_USER', payload: user })
    console.log(user)
  })
}

export default {
  login,
  persist,
  editUser
}
