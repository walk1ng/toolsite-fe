import React from 'react'
import CIJobList from './CIJobList'
import CINodeList from './CINodeList'
import NavLink from './NavLink'

class JenkinsList extends React.Component {
  constructor() {
    super()
    this.state = {
              
    }
  }

  render() {
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>URL</th>
          <th>HV Host</th>
          <th>CI User</th>
          <th>CI Pwd</th>
          <th>VM User</th>
          <th>VM Pwd</th>
          <th>Online</th>
          <th>CI Login Check</th>
          <th>Control Panel</th>
        </tr>
        this.props.all.map(function(jenkins){
          <tr>
            <td>{jenkins.name}</td>
            <td>{jenkins.url}</td>
            <td>{jenkins.hvhost}</td>
            <td>{jenkins.user}</td>
            <td>{jenkins.passwd}</td>
            <td>{jenkins.mastervmuser}</td>
            <td>{jenkins.mastervmpasswd}</td>
            <td>{jenkins.online}</td>
            <td>{jenkins.loginchk}</td>
            <td><button type="button">view</button></td>
          </tr>
        })
      </table>
    )
  }
}

export default JenkinsList