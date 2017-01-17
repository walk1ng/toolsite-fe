import React from 'react'
import NavLink from './NavLink'
import JenkinsForm from './JenkinsForm'
import JenkinsList from './JenkinsList'

class JenkinsBox extends React.Component {
  constructor() {
    super()
    this.state = {
      allJenkins: [
        {name: 'testjenkins1'},
        {name: 'testjenkins2'}
      ],
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

  submitNewJenkins(jenkins) {
    const allJenkins = this.state.allJenkins
    const newAllJenkins = allJenkins.concat([jenkins])
    this.setState({allJenkins: newAllJenkins})

    $.ajax({
      url: "http://localhost:8000/jenkins/add",
      dataType: 'json',
      type: 'POST',
      data: jenkins,
      success: jenkinses => {
          this.setState({allJenkins: jenkinses})
      },
      error: (xhr, status, err) => {
          console.log(err.toString());
          this.setState({allJenkins: allJenkins});
      }
    })
  }

  render() {
    return (
      <div>
        <h3>Jenkins</h3>
        <div>
          <JenkinsForm onSubmit={(jenkins) => this.submitNewJenkins(jenkins)} />
          <JenkinsList all={this.state.allJenkins} />
        </div>
      </div>
    )
  }
}

export default JenkinsBox