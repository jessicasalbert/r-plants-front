import React, { Component } from 'react'
import {NavStyle, HomeButton, CartButton, NavContainer, MenuButton} from './NavBarStyle'
import { NavLink } from 'react-router-dom'


export class NavBar extends Component {

    render() {
        return (
                <>
                    {this.props.user 
                    ? 
                    <NavStyle>
                    <NavContainer>
                    <NavLink to="/"><HomeButton>Home</HomeButton></NavLink>
                    <NavLink to="/plants"><MenuButton>Shop</MenuButton></NavLink>
                    <NavLink to="/profile"><MenuButton>Profile</MenuButton></NavLink>
                    <MenuButton onClick={this.props.logoutHandler}>Logout</MenuButton>
                    <NavLink to="/cart"><CartButton>Cart({this.props.cart.length})</CartButton></NavLink>
                    </NavContainer>
                    </NavStyle>
                    :
                    <NavStyle>
                    <NavContainer>
                    <NavLink to="/"><HomeButton>Home</HomeButton></NavLink>
                    <NavLink to="/plants"><HomeButton>Shop</HomeButton></NavLink>
                    <NavLink to="/signup"><HomeButton>Sign Up</HomeButton></NavLink>
                    <NavLink to="/login"><HomeButton>Login</HomeButton></NavLink>
                    <NavLink to="/cart"><CartButton>Cart({this.props.cart.length})</CartButton></NavLink>
                    </NavContainer>
                    </NavStyle>
                    }
                </>
        )
    }
}

export default NavBar
