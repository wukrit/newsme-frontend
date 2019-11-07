import React from 'react'
import { connect } from 'react-redux'
import TopicCheckBox from './TopicCheckBox'
import '../Styles/TopicForm.css'

function TopicForm({ topicState, breaks, newUser, visible }) {
  const subbedTopics = topicState.subs
    ? topicState.subs.map(sub => sub.topic_id)
    : undefined

  return topicState.topics.map(topic => {
    return (
      <TopicCheckBox
        key={topic.id}
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
