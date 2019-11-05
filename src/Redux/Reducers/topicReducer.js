const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TOPICS':
      return { ...state, ...payload }
    case 'SET_SUBS':
      return { ...state, ...payload }
    default:
      return state
  }
}
