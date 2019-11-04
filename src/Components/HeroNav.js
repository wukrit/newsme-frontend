import React from 'react'
import Actions from '../Redux/Actions/signupActions'
import { connect } from 'react-redux'

const handleEmailChange = (event, setEmail) => {
  setEmail(event.target.value)
}

const handlePasswordChange = (event, setPassword) => {
  setPassword(event.target.value)
}

const handleSubmit = (event, state, signup) => {
  event.preventDefault()
  const userObj = {
    email: state.email,
    password: state.password
  }
  signup(userObj)
  event.target.reset()
}

function HeroNav({ state, signup, setEmail, setPassword }) {
  return (
    <div className='hero-head'>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <span className='title'>NewsMe</span>
          </div>
          <div className='navbar-end is-hidden-touch'>
            <form
              className='field is-horizontal'
              onSubmit={event => handleSubmit(event, state, signup)}
            >
              <input
                className='input is-small'
                name='email'
                type='email'
                placeholder='Email'
                onChange={event => handleEmailChange(event, setEmail)}
                value={state.email_draft}
              />
              <input
                className='input is-small'
                name='password'
                type='password'
                placeholder='Password'
                onChange={event => handlePasswordChange(event, setPassword)}
                value={state.password_draft}
              />
              <input
                className='button is-small is-link'
                type='submit'
                value='Login'
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({ state: state.signup })

const mapDispatchToProps = {
  signup: Actions.signup,
  setEmail: Actions.setEmail,
  setPassword: Actions.setPassword
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroNav)
