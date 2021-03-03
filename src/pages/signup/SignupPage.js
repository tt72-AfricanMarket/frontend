import React, { useState } from "react";
import styled, { keyframes } from 'styled-components'
import {useHistory} from 'react-router-dom'
import 'fontsource-roboto';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../images/banner.jpg';
import axios from 'axios';


const initialForm = {
    username: '',
    primaryemail: '',
    password: '',
    role: 'buyer'
}

export default function SignupPage() {
    const [form, setForm] = useState(initialForm)


    const classes = useStyles();// used for lockpad icon

    const history = useHistory()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const signup = (e) => {  
		e.preventDefault();
        const endpointUrl = `https://african-marketplace-tt72.herokuapp.com/${form.role === "seller" ? "signup-seller" : "signup-buyer"}`;
		axios
			.post(endpointUrl, form)
			.then((res) => {
                console.log(res.data);
				localStorage.setItem("token", res.data.access_token);
				history.push("/profile")
                // window.location.href = '/profile';
			})
            .catch((err) => {
                console.log(err)
            })
	};

    return (
        <Page>
            <HeaderImg src={banner}/>
            <SignUpBox>
                
                    <AvatarContainer>
                        <Avatar className={classes.avatar}> {/* lockpad icon*/}
                        <LockOutlinedIcon />
                    </Avatar>
                </AvatarContainer>
                <SignUp>sign up</SignUp>
               
                <SignUpForm >

                    <Username
                        name='username'
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
                <SignUpButton onClick={signup}disabled={!form.username || !form.primaryemail || !form.password || !form.role}>sign up!</SignUpButton>
                </ButtonContainer>
            </SignUpBox>
        </Page>
    )
}

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

// Return div is always called page
const Page = styled.div`
font-family:'Roboto',sans-serif;
`


// banner
const HeaderImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 38vh;
    object-position: 50% 90%;
`

//entirety of sign up form
const SignUpBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    width: 60%;
    height: 25rem;
    margin: 2rem auto;
    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;
    
    
`
const SignUp = styled.h1`
    text-align:center;
`

// contains all inputs
const SignUpForm = styled.form`
    display:flex;
    height: 50%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`
const Username = styled.input`
    width: 40%;
    height: 10%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #c35b48;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`

const Email = styled.input`
    width: 40%;
    height: 10%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #458962;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`
const Password = styled.input`
    width: 40%;
    height: 10%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #125592;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`

// containers for options about marketplace and seller/buyer
const OptionCont = styled.div`
    width: 41%;
    margin: 0 1rem;
    padding: .5rem;
    

`

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
const UserLabel = styled.label` //radio button styling

background-color: #ddd;
padding: 10px 20px;
margin: 2px;
border: 2px solid #444;
border-radius: 4px;

`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 2rem;
`
const AvatarContainer = styled.div`
display: flex;
justify-content: center;
`

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