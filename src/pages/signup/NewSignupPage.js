import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useHistory } from 'react-router-dom';
import 'fontsource-roboto';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from '@material-ui/core/Avatar';
import banner from '../../images/banner.jpg';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

//default form values
const iniForm = {
    username: '',
    email: '',
    password: '',
    role: 'buyer'
}

export default function NewSignupPage() {
    const [form, setForm] = useState(iniForm) //holds form entries

    const classes = useStyles();// used for lockpad icon

    const history = useHistory()// allows for movement to profile page upon form submit


    const handleChange = (e) => {//updates form entries when user makes inputs
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const signup = (e) => {  //sends new user to backend database and moves page to /profile
        e.preventDefault();
        const endpointUrl = `https://african-marketplace-tt72.herokuapp.com/${form.role === "seller" ? "signup-seller" : "signup-buyer"}`;
        axios
            .post(endpointUrl, form)
            .then((res) => {
                localStorage.setItem("token", res.data.access_token);
                history.push("/profile")
            })
            .catch((err) => {
                console.log(err)
                history.push("/profile") // simply for demo. remove after demo!!!
            })
    };

    return (
        <Page>
            <HeaderImg src={banner} />
            <SignUpBox>
                <AvatarContainer>
                    <Avatar className={classes.avatar}> {/* lockpad icon*/}
                        <LockOutlinedIcon />
                    </Avatar>
                </AvatarContainer>
                <SignUp>sign up</SignUp>
                <SignUpForm >

                    <Username
                        name='username'  // for event.target.name, assists handler function
                        type='text'
                        placeholder='username'
                        onChange={handleChange}
                        value={form.username}
                        maxLength='40'
                        minLength='3'
                    />
                   
                    <Email
                        name='primaryemail'
                        type='email'
                        placeholder='email address'
                        onChange={handleChange}
                        value={form.primaryemail}
                        maxLength='40'
                    />

                    <Password
                        name='password'
                        type='password'
                        placeholder='password'
                        onChange={handleChange}
                        value={form.password}
                        pattern='[0-9a-zA-Z]{6,15}'

                    />

                    <OptionCont onChange={handleChange} value={form.role}>
                        <OptionName>I am a:</OptionName>
                        <UserType
                            name='role'
                            type='radio'
                            id='seller'
                            value='seller'
                        />
                        <UserLabel
                            for='seller'
                        >
                            seller
                        </UserLabel>
                        <UserType
                            name='role'
                            type='radio'
                            id='buyer'
                            value='buyer'
                        />
                        <UserLabel
                            for='buyer'
                        >
                            buyer
                        </UserLabel>
                    </OptionCont>                   
                </SignUpForm>
                <ButtonContainer>
                    <SignUpButton onClick={signup}>sign up!</SignUpButton>
                </ButtonContainer>               
            </SignUpBox>
        </Page>
    )
}

// below this line is page styling

const useStyles = makeStyles((theme) => ({//used with lockpad icon
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

const kf = keyframes`//allows for fade in
  100% {
    opacity: 1;
  }
`

// entire page styling
const Page = styled.div`
font-family:'Roboto',sans-serif;
`

// banner
const HeaderImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 38vh;
    object-position: 50% 90%;

    @media screen and (max-width: 800px) {
        height: 10rem;
    }
`

//entirety of sign up form
const SignUpBox = styled.div`
    border: 2px solid black;
    width: 60%;
    margin: 2rem auto;
    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;

    @media screen and (max-width: 1200px){
        height: 40%;
    }

    @media screen and (max-width: 800px) {
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`

//avatar container
const AvatarContainer = styled.div`
display: flex;
justify-content: center;
`

//sign up header
const SignUp = styled.h1`
    text-align:center;
`

// contains all inputs
const SignUpForm = styled.form`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;  
`

//username
const Username = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #c35b48;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`

//email
const Email = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #458962;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`

//password
const Password = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #125592;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`

// container for seller/buyer
const OptionCont = styled.div`
    width: 41%;
    margin: 0 1rem;
    padding: .5rem;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        height: 20%;
        width: 40%;
    }
`

// radio button text styling
const OptionName = styled.p`
`

// radios for type of user - seller, buyer, or both
const UserType = styled.input`
//hides actual radio buttons
opacity: 0;
position: fixed;
width:0;

:checked + label {
    // upon selection, background and border color change
    background-color:#c35b48;
    border-color: #2b2926;
}
`

//radio button styling
const UserLabel = styled.label`

background-color: #ddd;
padding: 10px 20px;
margin: 2px;
border: 2px solid #444;
border-radius: 4px;
`
//sign up button container
const ButtonContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 2rem;
`

//sign up button styling
const SignUpButton = styled.button`
    display:inline-block;
    padding:0.35em 1.2em;
    border:0.1em solid #FFFFFF;
    margin:0 0.3em 0.3em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:black;
    text-align:center;
    transition: all 0.2s;
    font-size:1rem;

&:hover {
    color:white;
    background-color: grey;
    transition: 1s;
}
`