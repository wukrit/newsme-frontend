import React, { useRef, useEffect } from 'react'
import UserActions from '../Redux/Actions/userActions'
import SignupActions from '../Redux/Actions/signupActions'
import { connect } from 'react-redux'
import { MobileNav } from '../Components'

function HeroNav({ user, state, login, setLoginEmail, setLoginPassword }) {
  const loginRef = useRef(null)

  const triggerError = str => {
    loginRef.current.setCustomValidity(str)
    loginRef.current.reportValidity()
    loginRef.current.setCustomValidity('')
  }
  useEffect(() => {
    if (user.errors) {
      triggerError('Invalid username & password combination')
    }
  }, [user])

  const handleEmailChange = event => {
    setLoginEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    setLoginPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const userObj = {
      email: state.loginEmail,
      password: state.loginPassword
    }
    login(userObj)
    if (user.errors) {
      triggerError('Invalid username & password combination')
    }
    event.target.reset()
    return false
  }

  return (
    <div className='hero-head'>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-brand'>
            <a href='/'>
              <span className='title is-blue'>
                {' '}
                <i className='fas fa-newspaper'></i> NewsMe
              </span>
            </a>
            <MobileNav />
          </div>
          <div className='navbar-end is-hidden-touch'>
            <form
              className='field is-horizontal'
              onSubmit={event => handleSubmit(event)}
            >
              <input
                ref={loginRef}
                className='input is-small'
                name='email'
                type='email'
                placeholder='Email'
                onChange={event => handleEmailChange(event)}
                value={state.loginEmail}
              />
              <input
                className='input is-small'
                name='password'
                type='password'
                placeholder='Password'
                onChange={event => handlePasswordChange(event)}
                value={state.loginPassword}
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
  setLoginEmail: SignupActions.setLoginEmail,
  setLoginPassword: SignupActions.setLoginPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroNav)
