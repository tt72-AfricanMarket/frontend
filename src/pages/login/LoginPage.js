import React from "react";
import styled from 'styled-components'

import img4 from '../../images/pic04.jpeg'

const Page = styled.div`
    background-image: url(${img4});
    object-fit:cover;
    height: 100vh;
`

const SignInBox = styled.div`
    width: 50%;
    border: 2px solid black;
    background-color:white;
    margin: auto;
`

const SignInHeader = styled.h1`
    text-align:center;
`

const Username = styled.input`
    width: 80%;
`

const Password = styled.input`
    width: 80%;
`

const SignIn = styled.button``

const Questions = styled.div`
    display:flex;
    justify-content: space-around;
`

const Forgot = styled.p``
const SignUp = styled.p``

const LoginPage = () => {

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

                <SignIn>Sign In</SignIn>

                <Questions>

                    <Forgot>Forgot your password?</Forgot>

                    <SignUp>Not a member yet?</SignUp>
                
                </Questions>
            </SignInBox>
        </Page>
    )
}

export default LoginPage;