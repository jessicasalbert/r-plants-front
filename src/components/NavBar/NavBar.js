import React, { Component } from 'react'
import {NavStyle, HomeButton, CartButton} from './NavBarStyle'
import { NavLink } from 'react-router-dom'


export class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <NavLink to="/"><HomeButton>Home</HomeButton></NavLink>
                <NavLink to="/plants"><HomeButton>Shop</HomeButton></NavLink>
                <NavLink to="/cart"><CartButton>Cart({this.props.cart.length})</CartButton></NavLink>
            </NavStyle>
        )
    }
}

export default NavBar
