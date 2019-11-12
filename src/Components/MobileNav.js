import React, { useRef } from 'react'
import UserActions from '../Redux/Actions/userActions'
import SignupActions from '../Redux/Actions/signupActions'
import { connect } from 'react-redux'
import '../Styles/MobileNav.css'

function MobileNav({ state, login, setLoginEmail, setLoginPassword }) {
  const menuRef = useRef(null)

  const handleToggleMenu = () => {
    menuRef.current.classList.toggle('open')
  }

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
    event.target.reset()
    return false
  }

  return (
    <>
      <div className='mobile-menu is-hidden-desktop' onClick={handleToggleMenu}>
        <i className='fas fa-bars fa-2x burger'></i>
      </div>
      <div ref={menuRef} className='sidenav'>
        <li onClick={handleToggleMenu}><i className="fas fa-times closebtn"></i></li>
        <form
              className='field is-horizontal mobile'
              onSubmit={event => handleSubmit(event)}
            >
              <input
                className='input is-large'
                name='email'
                type='email'
                placeholder='Email'
                onChange={event => handleEmailChange(event)}
                value={state.loginEmail}
              />
              <input
                className='input is-large'
                name='password'
                type='password'
                placeholder='Password'
                onChange={event => handlePasswordChange(event)}
                value={state.loginPassword}
              />
              <input
                className='button is-large is-link'
                type='submit'
                value='Login'
              />
            </form>
      </div>
    </>
  )
}

const mapStateToProps = state => ({ state: state.signup, user: state.user })

const mapDispatchToProps = {
  login: UserActions.login,
  setLoginEmail: SignupActions.setLoginEmail,
  setLoginPassword: SignupActions.setLoginPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav)
