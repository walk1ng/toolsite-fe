import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Home from './modules/Home'
import Azure from './modules/Azure'
import Hv from './modules/Hv'
import JenkinsBox from './modules/JenkinsBox'
import Jenkins from './modules/Jenkins'
import Admin from './modules/Admin'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/jenkins" component={JenkinsBox}/>
      <Route path="/hv" component={Hv}/>
      <Route path="/azure" component={Azure}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
