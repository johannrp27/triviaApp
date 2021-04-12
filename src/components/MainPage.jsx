import React from 'react'
import Welcome from './Welcome/Welcome'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Question from './Question/Question'
import Results from './Results/Results'
import './MainPage.scss'
import Page404 from './404/Page404'

const MainPage = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/question/:id" component={Question}/>
        <Route exact path="/results" component={Results}/>
        <Route exact path="/404" component={Page404}/>
        <Redirect to="/404"/>
      </Switch>
    </Router>
  )
}

export default MainPage
