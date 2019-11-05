import { apiUrl } from '../config'

const getAllTopics = dispatch => () => {
  fetch(`${apiUrl}/topics`)
    .then(response => response.json())
    .then(topics => console.log(topics))
}

const getSubscriptions = dispatch => token => {
  fetch(`${apiUrl}/users/subscriptions`, {
    headers: {
      Authorization: token
    }
  })
    .then(response => response.json())
    .then(subscriptions => console.log(subscriptions))
}

export default {
  getAllTopics,
  getSubscriptions
}
