import React from 'react'
import CIJob from './CIJob'
import CINode from './CINode'
 
export default React.createClass({
    getInitialState() {
        return {
            data: {
                name: this.props.params.jksName,
                jobs: [],
                nodes: [],
            },
        }
    },

    componentDidMount() {
        // mock here 
        // ajax to fetch initial data here
        console.log('call componentDidMount()')
        var mock_data = this.state.data
        mock_data.jobs = [this.props.params.jksName+'job1',this.props.params.jksName+'job2']
        mock_data.nodes = [this.props.params.jksName+'node1',this.props.params.jksName+'node2']
        this.setState({
            data: mock_data,
        })
    },

    componentWillReceiveProps(newProps) {
        // mock here
        // ajax to fetch data here
        // handle switch of jenkins view

        console.log('call componentWillReceiveProps()')
        var mock_data = this.state.data
        var selectedJksName = newProps.params.jksName
        console.log(selectedJksName)
        mock_data.name = selectedJksName
        console.log(mock_data.name)
        mock_data.jobs = [selectedJksName+'job1',selectedJksName+'job2']
        console.log(mock_data.jobs)
        mock_data.nodes = [selectedJksName+'node1',selectedJksName+'node2']    
        console.log(mock_data.nodes)
        this.setState({
            data: mock_data,
        })
    },

    render() {
        return (
            <div>
                {this.props.params.jksName}
                <br/>
                {
                    this.state.data.jobs.map(function(job){
                        return <CIJob jobName={job} />
                    })
                }
                <br/>
                {
                    this.state.data.nodes.map(function(node){
                        return <CINode nodeName={node} />
                    })
                }
            </div>
        )
    }
})

