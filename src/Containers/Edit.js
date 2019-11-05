import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import TopicActions from '../Redux/Actions/topicActions'
import UserActions from '../Redux/Actions/userActions'
import { NavBar } from '../Components'

function Edit({
  userState,
  topicState,
  dispatch,
  getTopics,
  getSubscriptions,
  editUser
}) {
  useEffect(() => {
    getTopics()
    getSubscriptions(userState.token)
  }, [userState])

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
      if (form.elements[i].type == 'checkbox' && form.elements[i].checked) {
        editBody.subs.push(form.elements[i].name)
      }
    }
    editUser(editBody, userState.token)
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
            <input type='checkbox' name={topic.title} />
            {topic.title}
          </label>
          <br />
        </Fragment>
      )
    })
  }

  return (
    <>
      <NavBar />
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
  getSubscriptions: dispatch(TopicActions.getSubscriptions),
  editUser: dispatch(UserActions.editUser)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
