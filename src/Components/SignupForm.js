import React from 'react'
import { connect } from 'react-redux'

function SignupForm({ state, dispatch }) {
  const handleFocus = event => {
    event.target.classList.toggle('is-primary')
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({ type: 'SET_EMAIL', payload: event.target.email.value })
  }

  const handleInput = event => {
    dispatch({ type: 'SET_EMAIL', payload: event.target.value })
  }

  return (
    <div className='columns is-desktop'>
      <div className='column is-one-third is-offset-one-third is-desktop'>
        <form className='control' onSubmit={event => handleSubmit(event)}>
          <input
            className='input'
            type='email'
            name='email'
            placeholder='Email'
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={event => handleInput(event)}
            value={state.draft}
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
