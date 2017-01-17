import React from 'react'
import CIJobList from './CIJobList'
import CINodeList from './CINodeList'

class Jenkins extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            online: false,
            loginChkPass: false,
            jobs: [],
            nodes:[],
        }
    }

    loadDataFromServer(n) {
        var jksName = n
        console.log(n)
        $.ajax({
          url: "http://localhost:8000/jenkins/view/" + jksName,
          dataType: "json",
          success: d => {
            this.setState({
                name: d.data.name,
                jobs: d.data.jobs,
                nodes: d.data.nodes,
                online: d.data.online,
                loginChkPass: d.data.login_chkpass,
            })
          },
          error: (xhr, status, err)  => {
            console.log('msg:' + err.toString());
          }
        })
    }

    componentDidMount() {
        this.loadDataFromServer(this.props.params.jksName)
    }

    componentWillReceiveProps(newProps) {
        this.loadDataFromServer(newProps.params.jksName)
    }

    render() {
        return (
            <div>
                <CIJobList jobs={this.state.jobs} />
                <CINodeList nodes={this.state.nodes} />
            </div>
        )
    }
}

class JenkinsList extends React.Component {

    render() {
        return (
            <div>
                <ul>
                {
                    this.props.all.map(function(jenkins, index){
                        var toPath = "/jenkins/" + jenkins.name
                        return <li><NavLink to={toPath}>{jenkins.name}</NavLink></li>   
                    })
                }
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default JenkinsList