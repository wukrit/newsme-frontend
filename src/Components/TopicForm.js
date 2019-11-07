import React, { Fragment } from 'react'
import { connect } from 'react-redux'

function TopicForm({ topicState, breaks, newUser, visible }) {
  if (newUser) {
    return topicState.topics.map(topic => {
      return (
        <Fragment key={`${topic.id}-label`}>
          <label className={visible}>
            <input type={visible} name={topic.title} />
            {topic.title}
          </label>
          {breaks ? <br /> : null}
        </Fragment>
      )
    })
  } else {
    const subbed_topics = topicState.subs.map(sub => sub.topic_id)
    return topicState.topics.map(topic => {
      return subbed_topics.includes(topic.id) ? (
        <Fragment key={`${topic.id}-label`}>
          <label className='checkbox'>
            <input type='checkbox' name={topic.title} defaultChecked />
            {topic.title}
          </label>
          {breaks ? <br /> : null}
        </Fragment>
      ) : (
        <Fragment key={`${topic.id}-label`}>
          <label className='checkbox'>
            <input type='checkbox' name={topic.title} />
            {topic.title}
          </label>
          {breaks ? <br /> : null}
        </Fragment>
      )
    })
  }
}

const mapStateToProps = state => ({
  topicState: state.topics
})
export default connect(
  mapStateToProps,
  null
)(TopicForm)
