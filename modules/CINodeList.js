import React from 'react'

class CINode extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class CINodeList extends React.Component {
  render(){
    return (
      this.props.nodes.map(function(node, index) {
        return <CINode key={'node-' + index}>{node}</CINode>
      })
    )
  }
}

export default CINodeList