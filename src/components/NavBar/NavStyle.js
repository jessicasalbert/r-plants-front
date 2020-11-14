import FaBars from '@meronex/icons/fa/FaBars';
import FaTimes from '@meronex/icons/fa/FaTimes';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    background-color: rgba(149, 176, 113, 0.7);
    height: 40px;
    display: flex;
    top: 0;
    justify-content: flex-end;
    padding: 0.5rem;
    padding-right: 150px;
    z-index: 10;
    position: sticky;
`

export const NavLogo = styled(Link)`
    img {
        height: 40px;
    }
    white-space: nowrap;
    color: rgba(57, 54, 38, 1);
    position: absolute;
    left: 0;
    margin-top: 2px;
    margin-left: 15px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
        margin-top: 10px;
        top: 0;
        left: 0;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    b.cart {
        color: red;
    }
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: rgba(57, 54, 38, 1);
    }
    &:hover {
        b.cart {
        color: red;
        }
        background-color: rgba(100, 114, 97, 1);
        border-radius: 4px;
        transition: all 0.2s ease-out;
    }
    @media screen and (max-width: 768px) {
        b.cart {
        color: red;
        }
        text-align: center;
        padding: 1.5rem;
        width: 100%;
        display: table;

        &:hover {
            b.cart {
        color: red;
        }
            background: rgba(181, 181, 161, 1);
            border-radius: 0;
        }
    }
`

export const NavLinkMobile = styled(Link)`
    display: none;
    @media screen and (max-width: 768px) {
        box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
        display: block;
        text-align: center;
        padding: 1.2rem;
        margin: 2rem auto;
        border-radius: 4px;
        width: 80%;
        background: rgba(147, 141, 123, 1);
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        &:active {
            letter-spacing: 0.5px;
            -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
            box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        }
        &:hover {
            background: rgba(181, 181, 161, 1);
            color: rgba(57, 54, 38, 1);
            transition: 250ms;
        }
    }
`

export const MenuIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: rgba(57, 54, 38, 1);
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.4rem;
        cursor: pointer;
    }
`

export const Times = styled(FaTimes)`
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        color: rgba(57, 54, 38, 1);
        font-size: 1.4rem;
    }
`

export const NavMenu = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-left: 2rem;
    @media screen and (max-width: 768px) {
        display: none;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 56px;
        right: -120%;
        opacity: 1;
        transition: all 0.5s ease;

        &.active {
            display: flex;
            background: rgba(100, 114, 97, 0.9);
            right: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
        }
    }
`

export const NavItem = styled.li`
    b.cart {
        color: red;
    }
    display: flex;
    align-items: center;
    height: 40px;
    @media screen and (max-width: 768px) {
        b.cart {
        color: red;
        }
        height: 60px;
    }
`

export const NavBtn = styled.nav`
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    display: flex;
    align-items: center;
    position: absolute;
    right: 15px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    padding: 11px 40px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    white-space: nowrap;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(181, 181, 161, 1);
        color: rgba(57, 54, 38, 1);
    }
    &:active {
        letter-spacing: 0.5px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    }
`

// export const DropdownWrapper = styled.ul`
//     li {
//         background: #1888ff;
//         cursor: pointer;
//     }
//     li:hover {
//         background: #5cabff;
//     }
//     clicked {
//         display: none;
//     }
//         background: red;
//         width: 200px;
//         position: absolute;
//         top: 80px;
//         list-style: none;
//         text-align: start;
//     `

// export const DropLink = styled(Link)`
//         display: block;
//         height: 100%;
//         width: 100%;
//         text-decoration: none;
//         color: #fff;
//         padding: 16px;
//     `