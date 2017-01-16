import React from 'react'
import CIJob from './CIJob'
import CINode from './CINode'

class JenkinsItem extends React.Component {
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
                {this.props.params.jksName}
                <br/>
                {
                    this.state.jobs.map(function(job){
                        return <CIJob jobName={job} />
                    })
                }
                <br/>
                {
                    this.state.nodes.map(function(node){
                        return <CINode nodeName={node} />
                    })
                }
            </div>
        )
    }
    
}

export default JenkinsItem