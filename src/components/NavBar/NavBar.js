import React, { Component } from 'react'
import {NavStyle, HomeButton, CartButton} from './NavBarStyle'
import { NavLink } from 'react-router-dom'


export class NavBar extends Component {
    render() {
        return (
            <NavStyle>
                <NavLink to="/"><HomeButton>Home</HomeButton></NavLink>
                <NavLink to="/plants"><HomeButton>Shop</HomeButton></NavLink>
                <NavLink to="/signup"><HomeButton>Sign Up</HomeButton></NavLink>
                <NavLink to="/login"><HomeButton>Login</HomeButton></NavLink>
                
                <>
                    {this.props.user ? 
                    <NavLink to="/profile"><HomeButton>Profile</HomeButton></NavLink>
                    :
                    null}
                </>

                <NavLink to="/cart"><CartButton>Cart({this.props.cart.length})</CartButton></NavLink>
            </NavStyle>
        )
    }
}

export default NavBar
