import React from 'react'
import { connect } from 'react-redux'
import { Feed } from '../Components'

function Newsfeed({ state }) {
  const date = () => {
    const today = new Date()
    return `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`
  }
  return (
    <>
      <nav className='navbar'></nav>
      <div className='container is-widescreen'>
        <h2 className='title'>Newsfeed {date()}</h2>
        <p className='subtitle'>Here are the top headlines from yesterday:</p>
        <Feed />
      </div>
    </>
  )
}

const mapStateToProps = state => ({ state: state.user })
export default connect(
  mapStateToProps,
  null
)(Newsfeed)
