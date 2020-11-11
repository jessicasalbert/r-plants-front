import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { SignUpForm, UserInput, SignUpButton, SignUpWrapper } from './SignUpStyle'

class SignUp extends Component {
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
            <SignUpWrapper>
                <SignUpForm onSubmit={this.submitHandler}>
                    <p>Welcome to rPlants</p>
                    <UserInput type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} />
                    <UserInput type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
                    <UserInput type="text" name="email" placeholder="email" value={this.state.email} onChange={this.changeHandler} />
                    <UserInput type="text" name="name" placeholder="full name" value={this.state.name} onChange={this.changeHandler} />
                    <SignUpButton type="submit" value="sign up" >sign up</SignUpButton>
                </SignUpForm>
            </SignUpWrapper>
        )
    }
}

export default withRouter(SignUp)