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
        // mock
        // ajax to fetch data
        var mock_data = this.state.data
        mock_data.jobs = [this.props.params.jksName+'job1',this.props.params.jksName+'job2']
        mock_data.nodes = [this.props.params.jksName+'node1',this.props.params.jksName+'node2']
        if (this.isMounted()){
            this.setState({
                data: mock_data,
            })
        }
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

