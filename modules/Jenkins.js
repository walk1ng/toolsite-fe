import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  getInitialState() {
    return {
      // mock
      allJenkins: [
        {
          name: 'j1',
          url: 'http://testurl1',
        },
        {
          name: 'j2',
          url: 'http://testurl2',
        }
      ],
    }
  },

  handleSubmit(event) {
    event.preventDefault()
    const jksName = event.target.elements[0].value
    const jksUrl = event.target.elements[1].value
    var allJenkins = this.state.allJenkins
    var newJenkins = {
      name: jksName,
      url: jksUrl,
    }
    allJenkins.push(newJenkins)
    this.setState({allJenkins: allJenkins})
    console.log(jksName + ' : ' + jksUrl)
  },

  render() {
    return (
      <div>
        <h3>Jenkins</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label for="jksName">Name:
              <input type="text" name="jksName" id="jksName" placeholder="Jenkins Name" required/>
            </label> {' '}
            <label for="jksUrl">URL:
              <input type="url" name="jksUrl" id="jksUrl" placeholder="Jenkins URL" required/>
            </label> {' '}
            <button type="submit">Save</button>
          </form>
        </div>
        <div>
          <ul>
          {
            this.state.allJenkins.map(function(jenkinsItem){
              var toPath = "/jenkins/" + jenkinsItem.name
              return <li><NavLink to={toPath}>{jenkinsItem.name}</NavLink></li>   
            })
          }
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
})
