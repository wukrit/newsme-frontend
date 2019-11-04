const initialState = {
  topics: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'SET_TOPICS':
    return { ...state, ...payload }

  default:
    return state
  }
}
