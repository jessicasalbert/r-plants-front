import React, { Component } from 'react'
import {LoginForm, LoginButton, UserInput, LoginWrapper, SignUpLink, Break, Or} from './LoginStyle'

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
            <LoginWrapper>
            <LoginForm onSubmit={this.submitHandler}>
            <p>Please sign in</p>
                <UserInput type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler}></UserInput>
                <UserInput type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler}></UserInput>
                <LoginButton type="submit" value="Log In">sign in</LoginButton>
                <Or><Break></Break>&nbsp;&nbsp;or&nbsp;&nbsp;<Break></Break></Or>
                <SignUpLink to="/signup" value="Log In">sign up</SignUpLink>
            </LoginForm>
            </LoginWrapper>
        )
    }
}
