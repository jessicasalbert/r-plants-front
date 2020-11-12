import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

const LoginWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    z-index: 0;
    background-image: url("https://i.ibb.co/hCkRkjk/Card-40.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    ${'' /* background-size: 100vw; */}
    @media screen and (max-width: 926px) {
        background-size: 150vh;
    }
    
`

// const LoginWrapper = styled.div`
//     height: 100vh;
//     min-height: 500px;
//     background-image: url("https://i.ibb.co/hCkRkjk/Card-40.png");
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     background-size: cover;
//     background-color: #1d3557;
// `

const LoginForm = styled.form`
    p {
        font-size: 2rem;
        padding-bottom: 20px;
        color: rgba(57, 54, 38, 1);
    }
    box-shadow: 8px 8px 8px -6px rgba(0,0,0,.5);
    display: flex;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25rem;
    width: 25rem;
    border-radius: 25px;
    background-color: rgba(255,255,255,0.5);
    @media screen and (max-width: 768px) {
        height: 20rem;
        width: 20rem;
        h2 {
        padding-bottom: 15px;
        }
    }
`

const Or = styled.div`
    display: flex;
    flex-direction: inline;
`

const Break = styled.div`
    content: "";
    width: 100px;
    background-color: transparent;
    height: 1px;
    margin: auto;
    margin-top: 10px;
    border-top: 1px solid #000000;
    z-index: 1;
`

const SignUpLink = styled(Link)`
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    width: 260px;
    margin: 5%;
    color: #fff;
    font-size: 1.5rem;
    padding: 2%;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
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
    @media screen and (max-width: 768px) {
        width: 60%;
        padding: 2%;
        margin: 8%;
    }
`

const LoginButton = styled.button`
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    width: 275px;
    margin: 5%;
    text-align: left;
    color: #fff;
    font-size: 1.5rem;
    padding: 2%;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
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
    @media screen and (max-width: 768px) {
        width: 60%;
        padding: 2%;
        margin: 8%;
    }
`

const UserInput = styled.input`
    outline: none;
    border: none;
    border-radius: 6px;
    width: 66%;
    margin: 3%;
    padding: 2%;
    outline: none;
    @media screen and (max-width: 768px) {
        width: 60%;
        padding: 2%;
    }
`

export {LoginForm, LoginButton, UserInput, LoginWrapper, SignUpLink, Break, Or}