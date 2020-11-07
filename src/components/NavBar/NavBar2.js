import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavElements';

class Navbar2 extends React.Component {
    render() {
        return (
        <>
            {this.props.user 
            ? 
            <Nav>
                <NavLink to="/">Home</NavLink>
                <Bars />
                <NavMenu>
                <NavLink to="/plants">Shop</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/cart">Cart({this.props.cart.length > 0 ? <b> {this.props.cart.length} </b> : 0})</NavLink>
                </NavMenu>
                <NavBtn>
                <NavBtnLink to="/" onClick={this.props.logoutHandler}>Sign Out</NavBtnLink>
                </NavBtn>
            </Nav>
                :
            <Nav>
                <NavLink to="/">Home</NavLink>
                <Bars />
                <NavMenu>
                <NavLink to="/plants">Shop</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                {/* <NavLink to="/login">Login</NavLink> */}
                <NavLink to="/cart">Cart({this.props.cart.length > 0 ? <b> {this.props.cart.length} </b> : 0})</NavLink>
                </NavMenu>
                <NavBtn>
                <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
            }
            </>
        )
    }
};

export default Navbar2;
