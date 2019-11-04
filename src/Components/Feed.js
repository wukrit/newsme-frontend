import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import feedActions from '../Redux/Actions/feedActions'
import { Topic } from '../Components'

function Feed({ userState, feedState, fetchFeed }) {
  useEffect(() => {
    fetchFeed(userState.token)
  }, [userState, fetchFeed])

  const renderTopics = () => {
    if (feedState !== {}) {
      let topicsArr = []
      for (let [key, value] of Object.entries(feedState)) {
        topicsArr.push(<Topic title={key} articles={value} />)
      }
      return topicsArr
    }
  }

  return <div>{renderTopics()}</div>
}

const mapStateToProps = state => ({
  userState: state.user,
  feedState: state.feed
})
const mapDispatchToProps = {
  fetchFeed: feedActions.fetchFeed
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)
