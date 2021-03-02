import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../../utils/axiosWithAuth'

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

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatchEvent()
    // }

    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post(`/users/user`)
            .then((res) => {
                localStorage.setItem('token', JSON.stringify(res.data.payload))
                history.push('/profile')
            })
            .catch((err) => {
                setError({ error: "Username or Password not valid." });
            })
    }


    return (
        <StyledLoginPage>
            <StyledLogin>
                <div className="sign-in-box">
                    <h1>Sign In</h1>
                    <form onSubmit={login}>
                        <input
                            name='username'
                            type='text'
                            placeholder='Username'
                            value={form.username}
                            onChange={handleChange}
                        />
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={form.password}
                            onChange={handleChange}
                        />
                        <button>
                            Sign In
                        </button>
                        <p style={{ color: `red`, fontSize: "12px" }}>{error.error}</p>
                    </form>
                    <div className="questions">
                        <h5 onClick={goToProfile} className="forgot-password">Forgot your Password?</h5>
                        <h5 onClick={goSignUp} className="-sign-up">Not a member yet?</h5>
                    </div>
                </div>
            </StyledLogin>
        </StyledLoginPage>
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

h1{
    color: black;
    display:flex;
    justify-content: center;
    margin-bottom: 15%;
}

.sign-in-box{
    -webkit-box-shadow: 20px 16px 20px 10px #121F35; 
    box-shadow: 20px 16px 20px 10px #121F35;

     width: 40%;
     border: 2px solid black;
     background-color:white;
     margin: auto;
     border-radius: 5px;
     padding: 100px 50px;
}
input{
    margin-top: 9px;
    width: 85%;
    padding: 13px 22px;
    margin: 10px 5px;
    /* box-sizing: border-box;   */
}
.questions{
     display:flex;
     justify-content: space-around;
     margin-top: 9px;
}
.questions h3{
    /* border: 1px solid black; */
    border-radius: 50%;
    
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
form button{
    width: 40%;
    background-color: black;
    color:white;

    font-size: 1.1rem;
    border-radius: 4px;
    margin-top: 5px;
    padding: 10px;
    margin: 5px 5px;
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

