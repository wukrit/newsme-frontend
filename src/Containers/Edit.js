import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import TopicActions from '../Redux/Actions/topicActions'

function Edit({
  userState,
  topicState,
  dispatch,
  getTopics,
  getSubscriptions
}) {
  useEffect(() => {
    getTopics()
    getSubscriptions(userState.token)
  }, [userState])

  const renderForm = () => (
    <form className='control'>
      <label className='label'>Name:</label>
      <input
        className='input'
        name='name'
        type='text'
        defaultValue={userState.user.name}
      />
      <label className='label'>Email:</label>
      <input
        className='input'
        name='email'
        type='email'
        defaultValue={userState.user.email}
      />
      <label className='label'>Password:</label>
      <input className='input' name='password' type='password' />
      <label className='label'>Edit Your Subscriptions:</label>
      {topicState.topics ? renderTopics() : null}
      <br />
      <input className='button is-link' type='submit' value='Submit Changes' />
    </form>
  )

  const renderTopics = () => {
    return topicState.topics.map(topic => {
      return (
        <Fragment key={`${topic.id}-label`}>
          <label className='checkbox'>
            <input type='checkbox' />
            {topic.title}
          </label>
          <br />
        </Fragment>
      )
    })
  }

  return (
    <>
      <nav className='navbar'></nav>
      <div className='container is-widescreen'>
        <h2 className='title'>
          Hey, {userState.user ? userState.user.name : null}
        </h2>
        <p className='subtitle'>Edit Your Settings</p>
        <div className='column is-half'>
          {userState.user ? (
            renderForm()
          ) : (
            <progress className='progress is-medium is-link' max='100'>
              45%
            </progress>
          )}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  userState: state.user,
  topicState: state.topics
})
const mapDispatchToProps = dispatch => ({
  dispatch,
  getTopics: dispatch(TopicActions.getAllTopics),
  getSubscriptions: dispatch(TopicActions.getSubscriptions)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
