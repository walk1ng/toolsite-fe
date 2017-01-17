import React from 'react'

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
        //this.loadDataFromServer(this.props.params.jksName)
    }

    componentWillReceiveProps(newProps) {
        //this.loadDataFromServer(newProps.params.jksName)
    }

    render() {
        /*return (
            <div>
                <CIJobList jobs={this.state.jobs} />
                <CINodeList nodes={this.state.nodes} />
            </div>
        )*/
        return (
            <div>
                <h1>jenkins item</h1>
            </div>
        )
    }
}

export default Jenkins