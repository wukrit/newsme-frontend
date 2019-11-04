import React from 'react'
import UserActions from '../Redux/Actions/userActions'
import SignupActions from '../Redux/Actions/signupActions'
import { connect } from 'react-redux'

function HeroNav({ state, login, setEmail, setPassword }) {
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const userObj = {
      email: state.email,
      password: state.password
    }
    login(userObj)
    event.target.reset()
    return false
  }

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
              onSubmit={event => handleSubmit(event)}
            >
              <input
                className='input is-small'
                name='email'
                type='email'
                placeholder='Email'
                onChange={event => handleEmailChange(event)}
                value={state.email_draft}
              />
              <input
                className='input is-small'
                name='password'
                type='password'
                placeholder='Password'
                onChange={event => handlePasswordChange(event)}
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

const mapStateToProps = state => ({ state: state.signup, user: state.user })

const mapDispatchToProps = {
  login: UserActions.login,
  setEmail: SignupActions.setEmail,
  setPassword: SignupActions.setPassword
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroNav)
