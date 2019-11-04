import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import { Forms, Newsfeed, Splash } from './Containers'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Splash />
        </Route>
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

export default App
