import React from "react";
import styled, { keyframes } from 'styled-components'
import {useHistory} from 'react-router-dom'
import 'fontsource-roboto';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../images/banner.jpg'




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
    height: 50vh;
    object-position: 50% 90%;
`

//entirety of sign up form
const SignUpBox = styled.div`
    border: 2px solid black;
    width: 60%;
    margin: 2rem auto;
    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;
    
    
`
const SignUp = styled.h1`
    text-align:center;
`

// contains all inputs
const SignUpForm = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const FirstName = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #c35b48;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`
const LastName = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #e5c027;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`
const Email = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #458962;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`
const Password = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #125592;
    &:focus {// removes ugly box when clicking on input 
        outline-width: 0;
    }
`

// containers for options about marketplace and seller/buyer
const OptionCont = styled.div`
    width: 40%;
    

`

const OptionName = styled.p`
`

// dropdown menu with locations
const MarketLocation = styled.select`
    width: 40%;
    display: block;
	font-size: 0.9rem;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	appearance: none; // hides actual drop down arrow
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;

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

export default function SignupPage() {

    const classes = useStyles();// used for lockpad icon

    const history = useHistory()

    const goToProfile = () => {
        history.push('/profile')
    }

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
               
                <SignUpForm>

                    <FirstName
                        name='first_name'
                        type='text'
                        placeholder='first name'
                    />

                    <LastName
                        name='last_name'
                        type='text'
                        placeholder='last name'
                    />

                    <Email
                        name='email'
                        type='email'
                        placeholder='email address'
                    />

                    <Password
                        name='password'
                        type='password'
                        placeholder='password'
                    />

                    <OptionCont>
                        <OptionName>Main marketplace:</OptionName>
                    

                        <MarketLocation
                            name="market_location"
                        >
                            <option value="Select">
                                Select Location
                            </option>
                            <option value="Burundi">
                                Burundi
                            </option>
                            <option value="Kenya">
                                Kenya
                            </option>
                            <option value="Rwanda">
                                Rwanda
                            </option>
                            <option value="South Sudan">
                                South Sudan
                            </option>
                            <option value="Tanzania">
                                Tanzania
                            </option>
                            <option value="Uganda">
                                Uganda
                            </option>
                        </MarketLocation>

                    </OptionCont>

                    <OptionCont>
                        <OptionName>I am a:</OptionName>
                        <UserType
                            name='user_type'
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
                            name='user_type'
                            type='radio'
                            id='buyer'
                            value='buyer'
                        />
                        <UserLabel
                            for='buyer'
                        >
                            buyer
                        </UserLabel>
                        <UserType
                            name='user_type'
                            type='radio'
                            id='both'
                            value='both'
                        />
                        <UserLabel
                            for='both'
                        >
                            both
                        </UserLabel>
                            
                    </OptionCont>

                </SignUpForm>
                <ButtonContainer>
                <SignUpButton onClick={goToProfile}>sign up!</SignUpButton>
                </ButtonContainer>
            </SignUpBox>
        </Page>
    )
}