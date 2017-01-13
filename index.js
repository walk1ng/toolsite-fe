import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
import Azure from './modules/Azure'
import Hv from './modules/Hv'
import Jenkins from './modules/Jenkins'
import JenkinsItem from './modules/JenkinsItem'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/jenkins" component={Jenkins}>
        <Route path="/jenkins/:jksName" component={JenkinsItem}/>
      </Route>
      <Route path="/hv" component={Hv}></Route>
      <Route path="/azure" component={Azure}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
