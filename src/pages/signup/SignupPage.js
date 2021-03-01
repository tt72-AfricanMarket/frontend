import React from "react";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import banner from '../../images/banner.jpg'

// Return div is always called page
const Page = styled.div``

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
`
const LastName = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
`
const Email = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
`
const Password = styled.input`
    width: 40%;
    margin: 1rem;
    padding: .5rem;
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

const SignUpButton = styled.button``

const SignupPage = () => {

    const history = useHistory()

    const goToProfile = () => {
        history.push('/profile')
    }

    return (
        <Page>
            <HeaderImg src={banner}/>

            <SignUpBox>
                <SignUp>sign up form</SignUp>

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

                <SignUpButton onClick={goToProfile}>sign up!</SignUpButton>
                
            </SignUpBox>
        </Page>
    )
}

export default SignupPage;