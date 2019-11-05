import React from 'react'
import { connect } from 'react-redux'
import TopicActions from '../Redux/Actions/topicActions'

function Edit({ state, dispatch }) {
  const renderForm = () => (
    <form className='control'>
      <label className='label'>Name:</label>
      <input className='input' name='name' type='text' defaultValue={state.user.name} />
      <label className='label'>Email:</label>
      <input className='input' name='email' type='email' defaultValue={state.user.email} />
      <label className='label'>Password:</label>
      <input className='input' name='password' type='password' />
      <label className='label'>Edit Your Subscriptions</label>
      {renderTopics(state.user.id)}
      <input className='button is-link' type='submit' value='Submit Changes' />
    </form>
  )

  const renderTopics = (userId) => {
    return null
  }

  return (
    <>
      <nav className='navbar'></nav>
      <div className='container is-widescreen'>
        <h2 className='title'>Hey, {state.user ? state.user.name : null}</h2>
        <p className='subtitle'>Edit Your Settings</p>
        <div className='column is-half'>{state.user ? renderForm() : null}</div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({ state: state.user })
const mapDispatchToProps = dispatch => ({
  dispatch,
  getTopics: dispatch(TopicActions.getAllTopics),
  getSubscriptions: dispatch(TopicActions.getSubscriptions)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
