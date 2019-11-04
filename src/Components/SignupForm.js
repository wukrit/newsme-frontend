import React from 'react'
import { connect } from 'react-redux'
import SignupActions from '../Redux/Actions/signupActions'

function SignupForm({ state, dispatch, signup }) {
  const handleFocus = event => {
    event.target.classList.toggle('is-primary')
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (state.step < 3) {
      dispatch({ type: 'NEXT_STEP' })
    } else {
      // debugger
      const { email, name, password } = state
      console.log(email, name, password)
      console.log(signup)
      signup({email, name, password})
    }
  }

  const handleInput = (event, input) => {
    dispatch({ type: `SET_${input}`, payload: event.target.value })
  }

  const handleSteps = num => {
    let visible = ''
    switch (num) {
      case 1:
        visible = 'email'
        break
      case 2:
        visible = 'text'
        break
      case 3:
        visible = 'password'
        break
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

const mapStateToProps = state => ({ state: state.signup })
const mapDispatchToProps = dispatch => ({
  dispatch,
  signup: dispatch(SignupActions.signup)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
