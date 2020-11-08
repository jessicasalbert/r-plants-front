import styled from 'styled-components'

const SignUpForm = styled.form`
    h2 {
        padding-bottom: 60px;
    }
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 7.5rem;
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
    border-radius: 4px;
    background: rgba(147, 141, 123, 1);
    color: #fff;
    width: 33%;
    margin: 5%;
    padding: 4%;
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
    @media screen and (max-width: 768px) {
        width: 60%;
        padding: 4%;
        margin: 5%;
    }
`

const UserInput = styled.input`
    width: 66%;
    margin: 2%;
    padding: 2%;
    outline: none;
    @media screen and (max-width: 768px) {
        width: 60%;
        padding: 2%;
    }
`

export {SignUpForm, SignUpButton, UserInput}