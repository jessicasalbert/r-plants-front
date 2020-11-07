import styled from 'styled-components'

const LoginForm = styled.form`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    height: 25rem;
    width: 25rem;
    border-radius: 25px;
    background-color: rgba(255,255,255,0.5);
`

const LoginButton = styled.button`
    width: 33%;
    margin: 5%;
`

const UserInput = styled.input`
    width: 66%;
    margin: 5%;
`

export {LoginForm, LoginButton, UserInput}