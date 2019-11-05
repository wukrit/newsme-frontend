import { apiUrl } from '../../config'

const getAllTopics = dispatch => () => {
  fetch(`${apiUrl}/topics`)
    .then(response => response.json())
    .then(topics => dispatch({type: 'SET_TOPICS', payload: topics}))
}

const getSubscriptions = dispatch => token => {
  fetch(`${apiUrl}/users/subscriptions`, {
    headers: {
      Authorization: token
    }
  })
    .then(response => response.json())
    .then(subscriptions => dispatch({type: 'SET_SUBS', payload: subscriptions}))
}

export default {
  getAllTopics,
  getSubscriptions
}
