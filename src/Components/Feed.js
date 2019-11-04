import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import feedActions from '../Redux/Actions/feedActions'

function Feed({ state, fetchFeed }) {
  useEffect(() => {
    fetchFeed(state.token)
  }, [state])

  // const renderTopics = feed => {
  //   for (array in feed) {
  //     <Topic articles={array} />
  //   }
  // }

  return <div></div>
}

const mapStateToProps = state => ({ state: state.user })
const mapDispatchToProps = {
  fetchFeed: feedActions.fetchFeed
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)
