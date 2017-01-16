import React from 'react'

class CINode extends React.Component {
  render(){
    return (
        <div>
            {this.props.nodeName}
        </div>
    )
  }
}

export default CINode