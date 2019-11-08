import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import SignupActions from '../Redux/Actions/signupActions'
import TopicActions from '../Redux/Actions/topicActions'
import { TopicForm } from '../Components'
import '../Styles/SignupForm.css'
import { stat } from 'fs'

function SignupForm({ state, dispatch, signup, topicState, getTopics }) {
  useEffect(() => {
    getTopics()
  }, [getTopics])

  const inputRef = useRef(null)
  const labelRef = useRef(null)

  const handleFocus = event => {
    event.target.classList.toggle('is-primary')
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (state.step < 4) {
      labelRef.current.classList.remove('fadeIn')
      inputRef.current.classList.remove('fadeIn')
      labelRef.current.classList.add('fadeOut')
      inputRef.current.classList.add('fadeOut')
      setTimeout(() => {
        labelRef.current.classList.remove('fadeOut')
        inputRef.current.classList.remove('fadeOut')
        dispatch({ type: 'NEXT_STEP' })
      }, 500)
    } else {
      const subs = []
      const form = event.target
      for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].type === 'checkbox') {
          subs.push([form.elements[i].name, form.elements[i].checked])
        }
      }
      const { email, name, password } = state
      signup({ email, name, password, subs })
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
          <label
            className={
              handleSteps(1) !== 'hidden' ? 'animated label' : 'hidden'
            }
            ref={handleSteps(1) !== 'hidden' ? labelRef : undefined}
          >
            Email
          </label>
          <input
            className='input animated'
            ref={handleSteps(1) !== 'hidden' ? inputRef : undefined}
            type={handleSteps(1)}
            name='email'
            placeholder='Enter Your Email'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'EMAIL')}
            value={state.email}
          />
          <label
            className={
              handleSteps(2) !== 'hidden'
                ? 'label animated fadeIn label-color-white'
                : 'hidden'
            }
            ref={handleSteps(2) !== 'hidden' ? labelRef : undefined}
          >
            Name
          </label>
          <input
            className={`input ${
              handleSteps(2) !== 'hidden' ? 'animated fadeIn' : null
            }`}
            ref={handleSteps(2) !== 'hidden' ? inputRef : undefined}
            type={handleSteps(2)}
            name='name'
            placeholder='Enter Your First Name'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'NAME')}
            value={state.name}
          />
          <label
            className={
              handleSteps(3) !== 'hidden'
                ? 'label animated fadeIn label-color-white'
                : 'hidden'
            }
            ref={handleSteps(3) !== 'hidden' ? labelRef : undefined}
          >
            Password
          </label>
          <input
            className={`input ${
              handleSteps(3) !== 'hidden' ? 'animated fadeIn' : null
            }`}
            ref={handleSteps(3) !== 'hidden' ? inputRef : undefined}
            type={handleSteps(3)}
            name='password'
            placeholder='Enter a Secure Password'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'PASSWORD')}
            value={state.password}
          />
          <label
            className={
              handleSteps(4) !== 'hidden'
                ? 'label animated fadeIn label-color-white'
                : 'hidden'
            }
            ref={handleSteps(4) !== 'hidden' ? labelRef : undefined}
          >
            Topics
          </label>
          <div
            className={handleSteps(4) !== 'hidden' ? 'animated fadeIn' : null}
          >
            {topicState.topics ? (
              <TopicForm newUser={true} visible={handleSteps(4)} />
            ) : null}
          </div>
          <div className='column is-2 is-offset-4 is-desktop'>
            <input
              className='button is-link'
              type='submit'
              value={state.step === 3 ? 'Create Account' : 'Continue'}
            />
          </div>
          <progress
            className={
              state.step > 1 ? 'progress is-primary animated fadeIn' : 'hidden'
            }
            value={state.step - 1}
            max='4'
          />
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  state: state.signup,
  topicState: state.topics
})
const mapDispatchToProps = dispatch => ({
  dispatch,
  signup: dispatch(SignupActions.signup),
  getTopics: dispatch(TopicActions.getAllTopics)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
