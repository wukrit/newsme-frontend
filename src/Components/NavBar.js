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
        <div className='navbar-brand'>
        <NavLink className='navbar-item' to='/feed'>
          <span className='title brand'> <i class="fas fa-newspaper"></i> NewsMe</span>
        </NavLink>
        </div>
        <div className='navbar-end'>
          <NavLink className='navbar-item' to='/edit'>
            <span><i class="fas fa-user fa-lg"></i>  {userState.user.email}</span>
          </NavLink>
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
