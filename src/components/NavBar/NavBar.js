import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo, NavLinkMobile, MenuIcon, Times, NavItem } from './NavStyle';

class Navbar extends React.Component {
    state = {
        dropdown: false,
        clicked: false
    }

    clickHandler = () => {
        this.setState(()=>({clicked: !this.state.clicked}))
    }

    closeMenu = () => {
        this.setState(()=>({clicked: false}))
    }

    closeMenuLogOut = (e) => {
        this.setState(()=>({clicked: false}))
        this.props.logoutHandler(e)
    }

    onMouseEnter = () => {
        if (window.innerWidth < 960) {
            this.setState(()=>({dropdown: false}))
        } else {
            this.setState(()=>({dropdown: true}))
        }
    };

    onMouseLeave = () => {
        if (window.innerWidth < 960) {
            this.setState(()=>({dropdown: false}))
        } else {
            this.setState(()=>({dropdown: true}))
        }
    }

    itemCount = () => {
        let items = 0;
        for (const item of this.props.cart) {
            items += parseInt(item.quantity)
        }
        return items
    }


    render() {
        console.log(this.state)
        return (
        <>
            {this.props.user 
            ? 
            <Nav>
                <NavLogo onClick={this.closeMenu} to="/">Home</NavLogo>
                <MenuIcon onClick={this.clickHandler}>
                    {this.state.clicked ? <Times /> : <Bars />}
                </MenuIcon>
                {this.state.clicked ? 
                    <NavMenu className="active">
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants">Shop</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/profile">Profile</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenuLogOut} to="/">Log Out</NavLink></NavItem>
                    <NavItem><NavLinkMobile onClick={this.closeMenu} to="/cart">Checkout({this.props.cart.length > 0 ? <b> {this.itemCount()} </b> : 0})</NavLinkMobile></NavItem>
                    </NavMenu>
                :
                    <NavMenu>
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants">Shop</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/profile">Profile</NavLink></NavItem>
                    {/* <NavItem><NavLink onClick={this.closeMenu, this.props.logoutHandler} to="/">Log Out</NavLink></NavItem> */}
                    <NavItem><NavLink onClick={this.closeMenu} to="/cart">Cart({this.props.cart.length > 0 ? <b> {this.itemCount()} </b> : 0})</NavLink></NavItem>
                    </NavMenu>
                }
                <NavBtn>
                    <NavBtnLink to="/" onClick={this.props.logoutHandler}>Sign Out</NavBtnLink>
                </NavBtn>
            </Nav>
                :
            <Nav>
                <NavLogo onClick={this.closeMenu} to="/">Home</NavLogo>
                <MenuIcon onClick={this.clickHandler}>
                    {this.state.clicked ? <Times /> : <Bars />}
                </MenuIcon>
                {this.state.clicked ? 
                    <NavMenu className="active">
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants">Shop</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/login">Log In</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/signup">Sign Up</NavLink></NavItem>
                    <NavItem><NavLinkMobile onClick={this.closeMenu} to="/cart">Checkout({this.props.cart.length > 0 ? <b> {this.itemCount()}  </b> : 0})</NavLinkMobile></NavItem>
                    </NavMenu>
                : 
                    <NavMenu>
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants">Shop</NavLink></NavItem>
                    {/* <NavItem><NavLink onClick={this.closeMenu} to="/login">Log In</NavLink></NavItem> */}
                    <NavItem><NavLink onClick={this.closeMenu} to="/signup">Sign Up</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/cart">Cart({this.props.cart.length > 0 ? <b> {this.itemCount()}  </b> : 0})</NavLink></NavItem>
                    </NavMenu>
                }
                <NavBtn>
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
            }
            </>
        )
    }
};

export default Navbar