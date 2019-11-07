import React, { Fragment } from 'react'

function TopicCheckBox({ topic, breaks, newUser, subbedTopics, visible }) {
  return (
    <Fragment key={`${topic.id}-label`}>
      <label className={newUser ? visible : 'checkbox'}>
        <input
          type={newUser ? visible : 'checkbox'}
          name={topic.title}
          defaultChecked={
            subbedTopics && subbedTopics.includes(topic.id) ? true : undefined
          }
        />
        {topic.title}
      </label>
      {breaks ? <br /> : null}
    </Fragment>
  )
}

export default TopicCheckBox
