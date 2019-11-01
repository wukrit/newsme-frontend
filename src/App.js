import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import { Forms, Newsfeed, Splash } from './Containers'

const App = () => {
  return <div class='main-container'>
    <Nav />

    <Switch>
      <Route exact path="/">
        <Splash />
      </Route>
      <Route exact path="/login">
        <Forms />
      </Route>
      <Route exact path="/feed">
        <Newsfeed />
      </Route>
    </Switch>

  </div>
}

export default App
