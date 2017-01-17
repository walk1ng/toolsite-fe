import React from 'react'
import NavLink from './NavLink'
import JenkinsForm from './JenkinsForm'
import JenkinsList from './JenkinsList'

class JenkinsBox extends React.Component {
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
          <JenkinsList all={this.state.allJenkins} />
        </div>
        
      </div>
    )
  }
}

export default JenkinsBox