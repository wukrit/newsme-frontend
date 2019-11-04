import React from 'react'
import { connect } from 'react-redux'
import { stat } from 'fs'

function SignupForm({ state, dispatch }) {
  const handleFocus = event => {
    event.target.classList.toggle('is-primary')
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({ type: 'SET_EMAIL', payload: event.target.email.value })
  }

  const handleInput = (event, input) => {
    dispatch({ type: `SET_${input}`, payload: event.target.value })
  }

  return (
    <div className='columns is-desktop'>
      <div className='column is-one-third is-offset-one-third is-desktop'>
        <form className='control' onSubmit={event => handleSubmit(event)}>
          <input
            className='input'
            type='email'
            name='email'
            placeholder='Enter Your Email'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'EMAIL')}
            value={state.email}
          />
          <input
            className='input'
            type='text'
            name='name'
            placeholder='Enter Your First Name'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'NAME')}
            value={state.name}
          />
          <input
            className='input'
            type='password'
            name='password'
            placeholder='Enter a Secure Password'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event, 'PASSWORD')}
            value={state.password}
          />
          <div className='column is-2 is-offset-4 is-desktop'>
            <input className='button is-link' type='submit' value='Continue' />
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ state: state.signup })

export default connect(
  mapStateToProps,
  null
)(SignupForm)
