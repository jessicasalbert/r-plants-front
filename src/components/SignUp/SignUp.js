import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        username: "",
        password: ""
    }

    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <form>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}
