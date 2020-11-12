import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Heading = styled.h1`
    color: rgba(255, 255, 255, 0.7);
    font-size: 15vw;
    opacity: 1;
    margin-left: 13vw;
    margin-bottom: 2vh;
`

const TotalButtonWrapper = styled.div`
    max-width: 80vw;
    height: auto;
    display: flex;
    justify-content: flex-start;
    @media screen and (max-width: 1020px) {
        max-height: 10vh;
        justify-content: center;
        }
        @media screen and (max-width: 720px) {
            margin-left: 5vw;
            max-height: 40px;
        }
`

const CartWrapper = styled.div`
    color: rgba(57, 54, 38, 1);
    h4 {
        color:rgba(57, 54, 38, 1);
        padding-top: 1vh;
        padding-left: 5vw;
        padding-bottom: 2vh;
        font-size: 4rem;
        font-weight: normal;
    }
    position: relative;
    top: 0;
    bottom: 0;
    ${'' /* height: 100vh; */}
    z-index: 0;
    background-image: url("https://i.ibb.co/BVLGr4Z/Final-40.png");
    background-attachment: fixed;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 700px) {
        background-size: 100vh;
        }
    }
`

const CartStyle = styled.section`
    min-height: 100vh;
    color:rgba(57, 54, 38, 1);
`

const EmptyCart = styled.p`
    font-size: 2rem;
    padding-left: 5vw;
    padding-top: 1vw;
    min-height: 100vh;
    color:rgba(57, 54, 38, 1);
`

const Total = styled.p`
    color:rgba(57, 54, 38, 1);
    font-size: 2rem;
    position: flex-end;
    align-self: right;
    margin-left: 15vw;
    @media screen and (max-width: 926px) {
        font-size: 1.5rem;
    }
`

const CheckoutLink = styled(Link)`
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    padding: 11px 40px;
    color: #fff;
    outline: none;
    position: relative;
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
    margin-left: 5vw;
    @media screen and (max-width: 926px) {
        margin-left: 10vw;
        padding: 10px;
    }
    @media screen and (max-width: 768px) {
        margin-left: 5vw;
        padding: 10px;
    }

`

const SignUpLink = styled(Link)`
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    padding: 11px 40px;
    color: #fff;
    outline: none;
    position: relative;
    align-self: flex-start;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    white-space: nowrap;
    margin-left: 2vw;
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
    @media screen and (max-width: 926px) {
        margin-left: 1vw;
        margin-right: 15vw;
        padding: 10px;
    }
    @media screen and (max-width: 786px) {
        margin-left: 2vw;
        margin-right: 2vw;
        padding: 10px;
    }
`

export {CartWrapper, CartStyle, EmptyCart, Total, CheckoutLink, SignUpLink, Heading, TotalButtonWrapper}

