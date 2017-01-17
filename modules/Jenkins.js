import React from 'react'
import NavLink from './NavLink'
import JenkinsForm from './JenkinsForm'

class Jenkins extends React.Component {
  constructor() {
    super()
    this.state = {
      allJenkins: [],
    }
  }

  loadDataFromServer() {
    $.ajax({
      url: "http://localhost:8000/jenkins",
      dataType: "json",
      success: d => {
				this.setState({
					allJenkins: d.data
				})
			},
			error: (xhr, status, err)  => {
				console.log('msg:' + err.toString());
			}
    })
  }

  componentDidMount() {
    this.loadDataFromServer()
  }

  render() {
    return (
      <div>
        <h3>Jenkins</h3>
        <div>
          <JenkinsForm />
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
}

export default Jenkins