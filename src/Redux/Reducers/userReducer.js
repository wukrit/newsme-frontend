const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      localStorage.setItem("token", payload.token)
      return { ...payload }
    case 'CLEAR_USER':
      localStorage.clear()
      alert("You have been logged out.")
      return {}
    default:
      return state
  }
}
