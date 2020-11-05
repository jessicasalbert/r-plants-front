import React, { Component } from 'react'
import NavStyle from './NavBarStyle'
import { NavLink } from 'react-router-dom'


export class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                Hello from the NavBar
            </NavStyle>
        )
    }
}

export default NavBar
