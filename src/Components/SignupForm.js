import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import SignupActions from '../Redux/Actions/signupActions'
import TopicActions from '../Redux/Actions/topicActions'
import { TopicForm } from '../Components'

function SignupForm({ state, dispatch, signup, topicState, getTopics }) {
  useEffect(() => {
    getTopics()
  }, [getTopics])

  const handleFocus = event => {
    event.target.classList.toggle('is-primary')
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (state.step < 4) {
      dispatch({ type: 'NEXT_STEP' })
    } else {
      const { email, name, password } = state
      signup({ email, name, password })
    }
  }

  const handleInput = (event, input) => {
    dispatch({ type: `SET_${input}`, payload: event.target.value })
  }

  const handleSteps = num => {
    let visible = ''
    if (num === 1) {
      visible = 'email'
    } else if (num === 2) {
      visible = 'text'
    } else if (num === 3) {
      visible = 'password'
    } else if (num === 4) {
      visible = 'checkbox'
    }
    return num === state.step ? visible : 'hidden'
  }

  return (
    <div className='columns is-desktop'>
      <div className='column is-one-third is-offset-one-third is-desktop'>
        <form className='control' onSubmit={event => handleSubmit(event)}>
          <input
            className='input'
            type={handleSteps(1)}
            name='email'
            placeholder='Enter Your Email'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'EMAIL')}
            value={state.email}
          />
          <input
            className='input'
            type={handleSteps(2)}
            name='name'
            placeholder='Enter Your First Name'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'NAME')}
            value={state.name}
          />
          <input
            className='input'
            type={handleSteps(3)}
            name='password'
            placeholder='Enter a Secure Password'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'PASSWORD')}
            value={state.password}
          />
          {topicState.topics ? <TopicForm newUser={true} visible={handleSteps(4)} /> : null}
          <div className='column is-2 is-offset-4 is-desktop'>
            <input
              className='button is-link'
              type='submit'
              value={state.step === 3 ? 'Create Account' : 'Continue'}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ state: state.signup, topicState: state.topics })
const mapDispatchToProps = dispatch => ({
  dispatch,
  signup: dispatch(SignupActions.signup),
  getTopics: dispatch(TopicActions.getAllTopics)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
