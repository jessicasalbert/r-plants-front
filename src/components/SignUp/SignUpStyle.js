import styled from 'styled-components'

const SignUpForm = styled.form`
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

const SignUpButton = styled.button`
    width: 33%;
    margin: 3%;
`

const UserInput = styled.input`
    width: 66%;
    margin: 3%;
`

export {SignUpForm, SignUpButton, UserInput}