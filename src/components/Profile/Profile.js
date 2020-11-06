import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Profile extends Component {
    render() {
        return (
            <>

            {this.props.user ? 
            <>
                hello {this.props.user.name}
            </>
            :
            <Redirect to="/login"/>}
            
            </>
        )}
}

export default Profile
