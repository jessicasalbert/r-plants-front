import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo, NavLinkMobile, MenuIcon, Times, NavItem } from './NavStyle';

class Navbar extends React.Component {
    state = {
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
        return (
        <>
            {this.props.user 
            ? 
            <Nav>
                <NavLogo onClick={this.closeMenu} to="/"><img alt="rPlants logo" src="https://i.ibb.co/LgQ2LHK/icon.webp"/><img alt="rPlants" src="https://i.ibb.co/Bs6LN5h/Rplants.webp"/></NavLogo>
                <MenuIcon onClick={this.clickHandler}>
                    {this.state.clicked ? <Times /> : <Bars />}
                </MenuIcon>
                {this.state.clicked ? 
                    <NavMenu className="active">
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants">store</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/profile">profile</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenuLogOut} to="/">sign out</NavLink></NavItem>
                    <NavItem><NavLinkMobile onClick={this.closeMenu} to="/cart">cart({this.props.cart.length > 0 ? <b className="cart">{this.itemCount()}</b> : 0})</NavLinkMobile></NavItem>
                    </NavMenu>
                :
                    <NavMenu>
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants">store</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/profile">profile</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/cart">cart({this.props.cart.length > 0 ? <b className="cart"> {this.itemCount()}</b>  : 0})</NavLink></NavItem>
                    </NavMenu>
                }
                <NavBtn>
                    <NavBtnLink to="/" onClick={this.props.logoutHandler}>sign out</NavBtnLink>
                </NavBtn>
            </Nav>
                :
            <Nav>
                <NavLogo onClick={this.closeMenu} to="/"><img alt="rPlants logo" src="https://i.ibb.co/LgQ2LHK/icon.webp"/><img alt="rPlants" src="https://i.ibb.co/Bs6LN5h/Rplants.webp"/></NavLogo>
                <MenuIcon onClick={this.clickHandler}>
                    {this.state.clicked ? <Times /> : <Bars />}
                </MenuIcon>
                {this.state.clicked ? 
                    <NavMenu className="active">
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants">store</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/login">log in</NavLink></NavItem>
                    <NavItem><NavLinkMobile onClick={this.closeMenu} to="/cart">cart({this.props.cart.length > 0 ? <b className="cart">{this.itemCount()}</b> : 0})</NavLinkMobile></NavItem>
                    </NavMenu>
                : 
                    <NavMenu>
                    <NavItem><NavLink onClick={this.closeMenu} to="/plants">store</NavLink></NavItem>
                    <NavItem><NavLink onClick={this.closeMenu} to="/cart">cart({this.props.cart.length > 0 ? <b className="cart"> {this.itemCount()}</b>  : 0})</NavLink></NavItem>
                    </NavMenu>
                }
                <NavBtn>
                    <NavBtnLink to='/login'>sign in</NavBtnLink>
                </NavBtn>
            </Nav>
            }
            </>
        )
    }
};

export default Navbar