import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

function NavBar({userState, dispatch}) {
  const handleLogOut = () => {
    dispatch({type: 'CLEAR_USER'})
    dispatch({type: 'CLEAR_SUBS'})
  }

  return (
    <nav className='navbar is-link'>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <NavLink className='navbar-item' to='/feed'>
            Newsfeed
          </NavLink>
          <NavLink className='navbar-item' to='/edit'>
            Edit Profile
          </NavLink>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            Logged in as: {userState.user.email}
          </div>
          <div className='navbar-item'>
            <button className='button is-danger' onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({ userState: state.user })

export default connect(
  mapStateToProps,
  null
)(NavBar)
