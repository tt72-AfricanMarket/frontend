import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { axiosAuth } from '../../utils/axiosAuth'

import img4 from '../../images/pic04.jpeg'

const initialForm = {
    username: "",
    password: ""
}

const initialError = {
    error: "",
}

const LoginPage = () => {
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(initialError);

    const history = useHistory()

    const goToProfile = () => {
        history.push('/profile')
    }

    const goSignUp = () => {
        history.push('/signup')
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatchEvent()
    // }

    // const login = (e) => {
    //     e.preventDefault();
    //     axiosAuth()
    //         .post(``)
    //         .then((res) => {
    //             localStorage.setItem('token', JSON.stringify(res.data.payload))
    //         })
    //         .catch((err)=> {
    //             console.log(err)
    //         })
    // }

    return (
        <StyledLoginPage>
            <StyledLogin>
                <div className="sign-in-box">
                    <h1>Sign In</h1>
                    <form>
                        <input
                            name='username'
                            type='text'
                            placeholder='Username'
                        // value={ }
                        // onChnage={handleChange}
                        />
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                        // value={ }
                        // onChnage={handleChange}
                        />
                        <button>
                            Log in
                        </button>
                    </form>
                    <div className="questions">
                        <button onClick={goToProfile} className="forgot-password">Forgot your Password?</button>
                        <button onClick={goSignUp} className="-sign-up">Not a member yet?</button>
                    </div>
                </div>
            </StyledLogin>
        </StyledLoginPage>

        // <Page>
        //     <SignInBox>
        //         <SignInHeader>Sign In</SignInHeader>
        //         <input
        //             name='username'
        //             type='text'
        //             placeholder='Username'
        //         />
        //         <input
        //             name='password'
        //             type='password'
        //             placeholder='Password'
        //         />
        //         <SignIn onClick={goToProfile}>Sign In</SignIn>
        //         <Questions>
        //             <Forgot>Forgot your password?</Forgot>
        //             <SignUp onClick={goSignUp}>Not a member yet?</SignUp>
        //         </Questions>
        //     </SignInBox>
        // </Page>
    )
}

export default LoginPage;
const StyledLoginPage = styled.div`
    background-image: url(${img4});
    
`

const StyledLogin = styled.div`
    object-fit:cover;
    height: 100vh;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    

input{
    width: 80%;
}
.sign-in-box{

     width: 40%;
     border: 2px solid black;
     background-color:white;
     margin: auto;
}
.questions{
     display:flex;
     justify-content: space-around;
     
}
.questions h3{
    border: 1px solid black;
}
form{
    display: flex;
    flex-direction: column;
}
form button{
    width
}
`

// // Return div is always called page
// const Page = styled.div`
//     background-image: url(${img4});
//     object-fit:cover;
//     height: 100vh;
// `

// // Entirety of centered div
// const SignInBox = styled.div`
//     width: 50%;
//     border: 2px solid black;
//     background-color:white;
//     margin: auto;
// `

// // Header, no input
// const SignInHeader = styled.h1`
//     text-align:center;
// `
// // inputs
// const Username = styled.input`
//     width: 80%;
// `
// const Password = styled.input`
//     width: 80%;
// `

// const SignIn = styled.button``

// // Forgot password/ go to sign up
// const Questions = styled.div`
//     display:flex;
//     justify-content: space-around;
// `

// //unsure if we will have time to make a change password page?
// const Forgot = styled.p``

// const SignUp = styled.p``

