import React from 'react'

class JenkinsForm extends React.Component {
    handleSubmit(event) {
        event.preventDefault()
        const name = this.refs.name.value
        const url = this.refs.url.value
        const user = this.refs.user.value
        const passwd = this.refs.passwd.value
        const mastervmname = this.refs.mastervmname.value
        const mastervmuser = this.refs.mastervmuser.value
        const mastervmpasswd = this.refs.mastervmpasswd.value
        const hvhost = this.refs.hvhost.value
        const description = this.refs.description.value
        const form = this.refs.form
        form.reset()

        const newJenkins = {
            name: name,
            url: url,
            user: user,
            passwd: passwd,
            mastervmname: mastervmname,
            mastervmuser: mastervmuser,
            mastervmpasswd: mastervmpasswd,
            hvhost: hvhost,
            description: description,
        }
        this.props.onSubmit(newJenkins)
    }

    render() {
        return (
            <div>
            <form onSubmit={e => this.handleSubmit(e)} ref="form">
                <label for="name">Jenkins Name:
                <input type="text" name="name" id="name" ref="name" placeholder="Jenkins Name" required/>
                </label> {' '}
                <br/>

                <label for="url">Jenkins URL:
                <input type="url" name="url" id="url" ref="url" placeholder="Jenkins URL" required/>
                </label> {' '}
                <br/>

                <label for="user">Login User:
                <input type="text" name="user" id="user" ref="user" placeholder="User for login jenkins site" required/>
                </label> {' '}
                <br/>

                <label for="passwd">Login Password:
                <input type="Password" name="passwd" id="passwd" ref="passwd" placeholder="Password for login jenkins site" required/>
                </label> {' '}
                <br/>

                <label for="mastervmname">Master VM Name:
                <input type="text" name="mastervmname" id="mastervmname" ref="mastervmname" placeholder="VM name for master" required/>
                </label> {' '}
                <br/>

                <label for="mastervmuser">VM User:
                <input type="text" name="mastervmuser" id="mastervmuser" ref="mastervmuser" placeholder="User for login master vm" required/>
                </label> {' '}
                <br/>

                <label for="mastervmpasswd">VM Password:
                <input type="password" name="mastervmpasswd" id="mastervmpasswd" ref="mastervmpasswd" placeholder="Password for login master vm" required/>
                </label> {' '}
                <br/>

                <label for="hvhost">Hyper-V Host:
                <input type="text" name="hvhost" id="hvhost" ref="hvhost" placeholder="Hyper-V Host" required/>
                </label> {' '}
                <br/>

                <label for="description">Description:
                <input type="text" name="description" id="description" ref="description" placeholder="Description" required/>
                </label> {' '}
                <br/>

                <button type="submit">Save</button>
            </form>
            </div>
        )
    }
}

export default JenkinsForm