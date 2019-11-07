import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import '../Styles/TopicForm.css'
import TopicCheckBox from './TopicCheckBox'

function TopicForm({ topicState, breaks, newUser, visible }) {
  const subbedTopics = topicState.subs
    ? topicState.subs.map(sub => sub.topic_id)
    : undefined

  return topicState.topics.map(topic => {
    return (
      <TopicCheckBox
        topic={topic}
        breaks={breaks}
        newUser={newUser}
        subbedTopics={subbedTopics}
        visible={visible}
      />
    )
  })
}

const mapStateToProps = state => ({
  topicState: state.topics
})
export default connect(
  mapStateToProps,
  null
)(TopicForm)
