import React from 'react'
import { connect } from 'react-redux'

function Edit({ state, dispatch }) {
  return (
    <>
      <nav className='navbar'></nav>
      <div className='container is-widescreen'>
        <h2 className='title'>Hey, {state.user ? state.user.name : null}</h2>
        <p className='subtitle'>Edit Your Settings</p>
      </div>
    </>
  )
}

const mapStateToProps = state => ({ state: state.user })
const mapDispatchToProps = dispatch => ({
  dispatch
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit)
