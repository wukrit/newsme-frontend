const initialState = {
  topics: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'SET_FEED':
    return { ...payload }

  default:
    return state
  }
}
