import React, { Component } from 'react'
import {LoginForm, LoginButton, UserInput} from './LoginStyle'

export default class Login extends Component {
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
            <LoginForm onSubmit={this.submitHandler}>
            <h2>Please log in to your account.</h2>
                <UserInput type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler}></UserInput>
                <UserInput type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler}></UserInput>
                <LoginButton type="submit" value="Log In">Log In</LoginButton>
            </LoginForm>
        )
    }
}
