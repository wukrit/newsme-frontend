import React from 'react'
import { connect } from 'react-redux'

function Newsfeed({ user }) {
  return <div></div>
}

const mapStateToProps = state => ({ state: state.user })
const mapDispatchToProps = {}
export default connect(
  mapStateToProps,
  null
)(Newsfeed)
