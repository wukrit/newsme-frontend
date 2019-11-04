const initialState = {
  email: '',
  password: '',
  name: '',
  step: 1
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_EMAIL':
      return { ...state, email: payload }
    case 'SET_PASSWORD':
      return { ...state, password: payload }
    case 'SET_NAME':
      return { ...state, name: payload }
    case 'NEXT_STEP':
      return { ...state, step: state.step + 1}
    case 'SIGNUP':
      return { email: '', password: '', name: '', step: 1 }
    default:
      return state
  }
}
