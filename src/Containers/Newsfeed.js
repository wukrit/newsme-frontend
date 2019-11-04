import React from 'react'
import { connect } from 'react-redux'
import { Feed } from '../Components'

function Newsfeed({ state }) {
  const date = () => {
    const today = new Date()
    return `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`
  }
  return (
    <div className='container is-widescreen'>
      <h2 className='title'>Newsfeed {date()}</h2>
      <p className='subtitle'>Here are the top headlines for today:</p>
      <Feed />
    </div>
  )
}

const mapStateToProps = state => ({ state: state.user })
const mapDispatchToProps = {}
export default connect(
  mapStateToProps,
  null
)(Newsfeed)
