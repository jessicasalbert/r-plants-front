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
                <NavLogo onClick={this.closeMenu} to="/"><b><img alt="rPlants" src="https://i.ibb.co/6n2V1vN/navbar.png"/>r P l a n t s</b></NavLogo>
                <MenuIcon onClick={this.clickHandler}>
                    {this.state.clicked ? <Times /> : <Bars />}
                </MenuIcon>
                {this.state.clicked ? 
                    <NavMenu className="active">
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants"><b>Shop</b></NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/profile"><b>Profile</b></NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenuLogOut} to="/"><b>Log Out</b></NavLink></NavItem>
                    <NavItem><NavLinkMobile onClick={this.closeMenu} to="/cart"><b>Cart</b>({this.props.cart.length > 0 ? <b className="cart">{this.itemCount()}</b> : 0})</NavLinkMobile></NavItem>
                    </NavMenu>
                :
                    <NavMenu>
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants"><b>Shop</b></NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/profile"><b>Profile</b></NavLink></NavItem>
                    {/* <NavItem><NavLink onClick={this.closeMenu, this.props.logoutHandler} to="/">Log Out</NavLink></NavItem> */}
                    <NavItem><NavLink onClick={this.closeMenu} to="/cart"><b>Cart</b>({this.props.cart.length > 0 ? <b className="cart"> {this.itemCount()} </b> : 0})</NavLink></NavItem>
                    </NavMenu>
                }
                <NavBtn>
                    <NavBtnLink to="/" onClick={this.props.logoutHandler}><b>Sign Out</b></NavBtnLink>
                </NavBtn>
            </Nav>
                :
            <Nav>
                <NavLogo onClick={this.closeMenu} to="/"><img alt="rPlants" src="https://i.ibb.co/6n2V1vN/navbar.png"/><b>r P l a n t s</b></NavLogo>
                <MenuIcon onClick={this.clickHandler}>
                    {this.state.clicked ? <Times /> : <Bars />}
                </MenuIcon>
                {this.state.clicked ? 
                    <NavMenu className="active">
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants"><b>Shop</b></NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/login"><b>Log In</b></NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/signup"><b>Sign Up</b></NavLink></NavItem>
                    <NavItem><NavLinkMobile onClick={this.closeMenu} to="/cart"><b>Cart</b>({this.props.cart.length > 0 ? <b className="cart">{this.itemCount()}</b> : 0})</NavLinkMobile></NavItem>
                    </NavMenu>
                : 
                    <NavMenu>
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants"><b>Shop</b></NavLink></NavItem>
                    {/* <NavItem><NavLink onClick={this.closeMenu} to="/login">Log In</NavLink></NavItem> */}
                    <NavItem><NavLink onClick={this.closeMenu} to="/signup"><b>Sign Up</b></NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/cart"><b>Cart</b>({this.props.cart.length > 0 ? <b className="cart"> {this.itemCount()}  </b> : 0})</NavLink></NavItem>
                    </NavMenu>
                }
                <NavBtn>
                    <NavBtnLink to='/login'><b>Sign In</b></NavBtnLink>
                </NavBtn>
            </Nav>
            }
            </>
        )
    }
};

export default Navbar