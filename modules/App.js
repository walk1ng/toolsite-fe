import React from 'react'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Wei's Test Utilities</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li> {' '}
          <li><NavLink to="/jenkins">Jenkins</NavLink></li> {' '}
          <li><NavLink to="/hv">HyperV</NavLink></li> {' '}
          <li><NavLink to="/azure">Azure</NavLink></li> {' '}
          <li><NavLink to="/about">About</NavLink></li> {' '}
        </ul>
        {this.props.children}
      </div>
    )
  }
})
