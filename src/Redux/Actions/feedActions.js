import { apiUrl } from '../../config'

const fetchFeed = (token) => dispatch => {
  fetch(`${apiUrl}/users/feed`, {
    headers: {
      "Authorization": token
    }
  })
    .then(response => response.json())
    .then(feed => dispatch({type: 'SET_FEED', payload: feed}))
}

export default {
  fetchFeed
}
