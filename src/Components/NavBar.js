import React from 'react'
import { connect } from 'react-redux'

function NavBar() {
  return <nav className='navbar'></nav>
}

const mapStateToProps = state => ({ userState: state.user })

export default connect(mapStateToProps, null)(NavBar)
