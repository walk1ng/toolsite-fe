import React from 'react'

export default React.createClass({
    getInitialState() {
        return {
            name: this.props.jobName
        }
    },

    componentDidMount() {
        if (this.isMounted()){
            this.setState({
                name: this.props.jobName
            })
        }
    },

    render(){
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
})