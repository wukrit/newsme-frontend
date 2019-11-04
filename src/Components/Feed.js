import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { apiUrl } from '../config'

function Feed({ state }) {
  useEffect(() => {
    fetch(`${apiUrl}/users/feed`, {
      headers: {
        "Authorization": state.token
      }
    })
      .then(response => response.json())
      .then(console.log)
  }, [state])
  return <div></div>
}

const mapStateToProps = state => ({ state: state.user })
const mapDispatchToProps = {}
export default connect(
  mapStateToProps,
  null
)(Feed)
