import { apiUrl } from '../../config'

const fetchFeed = (token) => dispatch => {
  fetch(`${apiUrl}/users/feed`, {
    headers: {
      "Authorization": token
    }
  })
    .then(response => response.json())
    .then(feed => console.log(feed))
}

export default {
  fetchFeed
}
