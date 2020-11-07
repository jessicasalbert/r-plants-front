import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        name: ""
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
            <form onSubmit={this.submitHandler}>
                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <input type="submit" value="Log In" />
            </form>
        )
    }
}
