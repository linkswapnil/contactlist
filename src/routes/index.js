import React from 'react'
import Layout from '../components/layout/index'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Layout} />
      </Switch>
    </Router>
  )
}

export default Routes
