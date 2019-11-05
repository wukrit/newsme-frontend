import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TopicActions from '../Redux/Actions/topicActions'

function Edit({
  userState,
  topicsState,
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
      <label className='label'>Edit Your Subscriptions</label>
      {renderTopics(userState.token)}
      <input className='button is-link' type='submit' value='Submit Changes' />
    </form>
  )

  const renderTopics = token => {
    console.log(topicsState)
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
          {userState.user ? renderForm() : null}
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
