import styled from 'styled-components'

const SignUpWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    z-index: 0;
    background-image: url("https://i.ibb.co/HPZSSSB/Card-40.webp");
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 926px) {
        background-size: 150vh;
    }
`

const SignUpForm = styled.form`
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

const SignUpButton = styled.button`
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    width: 70%;
    margin: 5%;
    color: #fff;
    text-align: left;
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
    margin: 2%;
    padding: 2%;
    outline: none;
    @media screen and (max-width: 768px) {
        width: 60%;
        padding: 2%;
    }
`

export {SignUpForm, SignUpButton, UserInput, SignUpWrapper }