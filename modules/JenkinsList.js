import React from 'react'
import CIJobList from './CIJobList'
import CINodeList from './CINodeList'
import NavLink from './NavLink'

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
                {this.props.childrend}
            </div>
        )
    }
}

export default JenkinsList