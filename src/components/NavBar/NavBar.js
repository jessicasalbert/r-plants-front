import React, { Component } from 'react'
import {NavStyle, HomeButton} from './NavBarStyle'
import { NavLink } from 'react-router-dom'


export class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <NavLink to="/"><HomeButton>Home</HomeButton></NavLink>
                <NavLink to="/plants">Shop</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </NavStyle>
        )
    }
}

export default NavBar
