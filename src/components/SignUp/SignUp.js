import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { SignUpForm, UserInput, SignUpButton } from './SignUpStyle'

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
            <SignUpForm onSubmit={this.submitHandler}>
                <h2>Welcome to RPlants !</h2>
                <UserInput type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                <UserInput type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                <UserInput type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} />
                <UserInput type="text" name="name" placeholder="Full Name" value={this.state.name} onChange={this.changeHandler} />
                <SignUpButton type="submit" value="Sign Up" >Sign Up</SignUpButton>
            </SignUpForm>
        )
    }
}

export default withRouter(SignUp)