import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom'
import { Forms, Newsfeed, Splash } from './Containers'
import UserActions from './Redux/Actions/userActions'

const App = ({ user, persistUser }) => {
  useEffect(() => {
    let token = localStorage.getItem('token')
    if (token !== undefined && token) {
      persistUser(token)
    }
  }, [persistUser])

  const handleHomeRedirect = () => {
    if (user.user) {
      return <Redirect to='/feed' />
    } else {
      return <Splash />
    }
  }

  return (
    <>
      <Switch>
        <Route exact path='/' render={handleHomeRedirect} />
        <Route exact path='/login'>
          <Forms />
        </Route>
        <Route exact path='/feed'>
          <Newsfeed />
        </Route>
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
