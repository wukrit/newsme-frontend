import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import TopicActions from '../Redux/Actions/topicActions'
import UserActions from '../Redux/Actions/userActions'
import { NavBar, TopicForm } from '../Components'

function Edit({
  userState,
  topicState,
  getTopics,
  getSubscriptions,
  editUser,
  deleteUser
}) {
  useEffect(() => {
    getTopics()
    getSubscriptions(userState.token)
  }, [userState, getTopics, getSubscriptions])

  const handleEditForm = event => {
    event.preventDefault()
    const form = event.target
    const editBody = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      subs: []
    }
    for (let i = 0; i < form.elements.length; i++) {
      if (form.elements[i].type === 'checkbox') {
        editBody.subs.push([form.elements[i].name, form.elements[i].checked])
      }
    }
    editUser(editBody, userState.token)
  }

  const handleDeleteUser = () => {
      deleteUser(userState.token)
  }

  const renderForm = () => (
    <form className='control' onSubmit={event => handleEditForm(event)}>
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
      {topicState.topics && topicState.subs ? <TopicForm breaks="true" /> : null}
      <br />
      <input className='button is-link' type='submit' value='Submit Changes' />
      <br />
      <br />
      <button className='button is-danger' onClick={handleDeleteUser}>
        Delete Account
      </button>
    </form>
  )

  return (
    <>
      <div className='container is-widescreen'>
        <NavBar />
        <h2 className='title'>
          Hey, {userState.user ? userState.user.name : null}
        </h2>
        <p className='subtitle'>Edit Your Settings</p>
        <div className='column is-half'>
          {userState.user ? (
            renderForm()
          ) : (
            <progress className='progress is-medium is-link' max='100'>
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
  getSubscriptions: dispatch(TopicActions.getSubscriptions),
  editUser: dispatch(UserActions.editUser),
  deleteUser: dispatch(UserActions.deleteUser)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
