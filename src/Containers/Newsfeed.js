import React from 'react'
import { connect } from 'react-redux'
import { Feed, NavBar } from '../Components'
import '../Styles/Newsfeed.css'

function Newsfeed({ state }) {
  const date = () => {
    const today = new Date()
    return `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`
  }
  return (
    <>
      <NavBar />
      <div className='column is-10 is-offset-1 is-widescreen'>
        <h2 className='title'>
          {state.user.name}'s Newsfeed {date()}
        </h2>
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
