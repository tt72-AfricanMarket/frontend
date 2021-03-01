import React from "react";
import styled, { keyframes } from 'styled-components'
import {useHistory} from 'react-router-dom'
import 'fontsource-roboto';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../images/banner.jpg'




const useStyles = makeStyles((theme) => ({
   
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    
  }));

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

// Return div is always called page
const Page = styled.div`
font-family:'Roboto',sans-serif;`

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
    width: 80%;
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
`
const LastName = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #e5c027;
`
const Email = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #458962;
`
const Password = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
    border: 4px dotted #125592;
`

// containers for options about marketplace and seller/buyer
const OptionCont = styled.div`
    width: 40%;

`

const OptionName = styled.p``

// dropdown menu with locations
const MarketLocation = styled.select`
    width: 30%;
`

// radios for type of user - seller, buyer, or both
const UserType = styled.input``
const UserLabel = styled.label``

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

&:hover {
    color:white;
    background-color: grey;
}

`

export default function SignupPage() {

    const classes = useStyles();

    const history = useHistory()

    const goToProfile = () => {
        history.push('/profile')
    }

    return (
        <Page>
            <HeaderImg src={banner}/>
            <SignUpBox>
            <AvatarContainer>
                <Avatar className={classes.avatar}>
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
                                Select
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