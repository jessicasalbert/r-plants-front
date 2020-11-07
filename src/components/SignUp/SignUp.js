import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class SignUp extends Component {
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
                <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} />
                <input type="text" name="name" placeholder="Full Name" value={this.state.name} onChange={this.changeHandler} />
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}
