import React from "react";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import img4 from '../../images/pic04.jpeg'

// Return div is always called page
const Page = styled.div`
    background-image: url(${img4});
    object-fit:cover;
    height: 100vh;
`

// Entirety of centered div
const SignInBox = styled.div`
    width: 50%;
    border: 2px solid black;
    background-color:white;
    margin: auto;
`

// Header, no input
const SignInHeader = styled.h1`
    text-align:center;
`
// inputs
const Username = styled.input`
    width: 80%;
`
const Password = styled.input`
    width: 80%;
`

const SignIn = styled.button``

// Forgot password/ go to sign up
const Questions = styled.div`
    display:flex;
    justify-content: space-around;
`

//unsure if we will have time to make a change password page?
const Forgot = styled.p``

const SignUp = styled.p``

const LoginPage = () => {

    const history = useHistory()

    const goToProfile = () => {
        history.push('/profile')
    }

    const goSignUp = () => {
        history.push('/signup')
    }

    return (
        <Page>
            <SignInBox>
                
                <SignInHeader>Sign In</SignInHeader>
                
                <Username
                    name='username'
                    type='text'
                    placeholder='Username'
                />
                
                <Password
                    name='password'
                    type='password'
                    placeholder='Password'
                />

                <SignIn onClick={goToProfile}>Sign In</SignIn>

                <Questions>

                    <Forgot>Forgot your password?</Forgot>

                    <SignUp onClick={goSignUp}>Not a member yet?</SignUp>
                
                </Questions>
            </SignInBox>
        </Page>
    )
}

export default LoginPage;