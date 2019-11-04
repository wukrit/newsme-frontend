const initialState = {
  email: '',
  password: '',
  name: ''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_EMAIL':
      return { ...state, email: payload }
    case 'SET_PASSWORD':
      return { ...state, password: payload }
    case 'SET_NAME':
      return { ...state, name: payload }
    case 'SIGNUP':
      return { email: '', password: '', name: '' }
    default:
      return state
  }
}
