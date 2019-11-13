import React, { useRef } from 'react'
import UserActions from '../Redux/Actions/userActions'
import SignupActions from '../Redux/Actions/signupActions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../Styles/MobileNav.css'

function MobileNav({ userState, state, login, setLoginEmail, setLoginPassword, logout }) {
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

  const handleLogOut = () => {
    logout()
  }

  const renderLoginForm = () => {
    return (
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
    )
  }

  const renderLoggedInUser = () => {
    return (
      <>
        <h2 className='title'>Currently Logged in as:</h2>
        <Link className='navbar-item' to='/edit'>
          <span>
            <i className='fas fa-user fa-lg'></i> {userState.user !== undefined ? userState.user.email : null}
          </span>
        </Link>
        <button className='button is-danger' onClick={handleLogOut}>
          Log Out
        </button>
      </>
    )
  }

  return (
    <>
      <div className='mobile-menu is-hidden-desktop' onClick={handleToggleMenu}>
        <i className='fas fa-bars fa-2x burger'></i>
      </div>
      <div ref={menuRef} className='sidenav'>
        <li onClick={handleToggleMenu}>
          <i className='fas fa-times closebtn'></i>
        </li>
        {userState.user === undefined ? renderLoginForm() : renderLoggedInUser()}
      </div>
    </>
  )
}

const mapStateToProps = state => ({ state: state.signup, userState: state.user })

const mapDispatchToProps = {
  logout: UserActions.logout,
  login: UserActions.login,
  setLoginEmail: SignupActions.setLoginEmail,
  setLoginPassword: SignupActions.setLoginPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav)
