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
      dispatch({ type: 'SIGNUP' })
      dispatch({ type: 'SET_USER', payload: user })
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
  fetch(`${apiUrl}/users/edit`, {
    method: 'PATCH',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(user => {
      dispatch({ type: 'SET_USER', payload: user })
      alert('Your settings have been updated')
    })
}

const deleteUser = dispatch => token => {
  fetch(`${apiUrl}/users/delete`, {
    headers: {
      Authorization: token
    }
  })
  dispatch({ type: 'CLEAR_USER' })
}

const logout = () => dispatch => {
  dispatch({ type: 'CLEAR_USER' })
  dispatch({ type: 'CLEAR_SUBS' })
}

export default {
  login,
  persist,
  editUser,
  deleteUser,
  logout
}
