import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom'
import { Edit, Newsfeed, Splash } from './Containers'
import UserActions from './Redux/Actions/userActions'

const App = ({ user, persistUser }) => {
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token !== undefined && token) {
      persistUser(token)
    }
  }, [persistUser])

  const handleHomeRedirect = () => {
    return user.user ? <Redirect to='/feed' /> : <Splash />
  }

  const handleFeedRedirect = () => {
    return !user.user ? <Redirect to='/' /> : <Newsfeed />
  }

  const handleEditRedirect = () => {
    return !user.user ? <Redirect to='/' /> : <Edit />
  }

  return (
    <>
      <Switch>
        <Route exact path='/' render={handleHomeRedirect} />
        <Route exact path='/edit' render={handleEditRedirect} />
        <Route exact path='/feed' render={handleFeedRedirect} />
      </Switch>
    </>
  )
}

const mapStateToProps = state => ({ user: state.user })
const mapDispatchToProps = {
  persistUser: UserActions.persist
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
