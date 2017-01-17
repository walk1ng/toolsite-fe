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
import JenkinsBox from './modules/JenkinsBox'
import Jenkins from './modules/Jenkins'
import Test from './modules/test'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/jenkins" component={JenkinsBox}>
        <Route path="/jenkins/:jksName" component={Test}/>
      </Route>
      <Route path="/hv" component={Hv}></Route>
      <Route path="/azure" component={Azure}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
