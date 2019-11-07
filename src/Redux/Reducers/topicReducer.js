const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_TOPICS':
      return { ...state, topics: payload }
    case 'SET_SUBS':
      return { ...state, subs: payload }
    case 'CLEAR_SUBS':
      return { topics: state.topics }
    default:
      return state
  }
}
