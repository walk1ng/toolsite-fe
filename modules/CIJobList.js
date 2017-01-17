import React from 'react'

class CIJob extends React.Component {

  render() {
    return (
      <div>
        {this.props.job}
      </div>
    )
  }
}


class CIJobList extends React.Component {
  render() {
    return (

      hh
        /*{
          this.props.jobs.map(function(job, index){
            return <CIJob job={job} key={'job-' + index} />
          })
        }*/
    )
  }
}

export default CIJobList