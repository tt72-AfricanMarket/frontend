import React from "react"
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import banner from '../../images/banner.jpg'
import Total from '../marketplace/Total';
import Cart from '../marketplace/Cart';




// #c35b48,#e5c027,#458962,#2b2926,#125592 colors

// Return div is always called page
const Page = styled.div`
    margin:0;
    padding:0;
    background: #726f5c;
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    
`
const Title = styled.h1`
    
    font-size:5rem;
    font-family:josefin;
    color:#c35b48;
    text-shadow:2px 2px black;
    text-align:center;
    margin-top:1%;
    text-decoration: underline;
    transition: all .2s ease-in;
        @media screen and (max-width: 800px){
            font-size:4rem;
        }

    
`


// Header banner, log in button needs to be in here
const Header = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:flex-end;
    
`
const HeaderImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 18vh;
    border:1px black solid;
    
`
const Buttons = styled.div`
    
    display:flex;
    flex-flow: row;
    justify-content: space-between;
    align
    margin-top: 1%;
    width: 400px;
    // border: 1px black solid;
        
        @media screen and (max-width: 1200px){
            display:flex;
            flex-direction:row;
            width:100%;
            justify-content:space-around;
        
    }
    
    
    
`

const CheckoutButton = styled.button`
    font-family:arial;
    border:1px black solid;
    border-radius:10px;
    background: #c35b48;
    color: white;
    margin-top: 1%;
    margin-left: 36%;
    margin-bottom: 1%;
    width:120px;
    height: 35px;
    cursor: pointer;
    transition: all .2s ease-in;
        :hover {
            transform:scale(1.1);
            box-shadow:1px 1px black;

        }
        
    
`
const LoginButton = styled.button`
    font-family:arial;
    border:1px black solid;
    border-radius:10px;
    background: #c35b48;
    color: white;
    margin:1%;
    width:120px;
    height: 35px;
    cursor: pointer;
    transition: all .2s ease-in;
        :hover {
            transform:scale(1.1);
            box-shadow:1px 1px black;

        }
        
    
`
const SignUp = styled.button`
    font-family:arial;
    border:1px black solid;
    border-radius:10px;
    background: #c35b48;
    color: white;
    margin:1%;
    padding: .5rem;
    width:120px;
    height: 35px;
    cursor: pointer;
    transition: all .2s ease-;
        :hover {
            transform:scale(1.1);
            box-shadow:1px 1px black;
        }
    
`
const ViewMarketplace = styled.button`
    font-size:.8rem;
    font-family:arial;
    border:1px black solid;
    border-radius:10px;
    background: #c35b48;
    color: white;
    margin:1%;
    float:right;
    width:120px;
    height: 35px;
    transition: all .2s ease-in;
    cursor: pointer;
        :hover {
            transform:scale(1.1);
            box-shadow:1px 1px black;
            
        }
`
const CheckoutDiv=styled.div`
        display:flex;
        flex-direction:column;
        width:45%;
        min-height:40vh;
        border:1px solid black;
        margin-top: 1%;
        background: white;
`

const TItleDiv=styled.div`
        display:flex;
        
`
const MainContainer=styled.div`
        display:flex;
        flex-direction: column;
        width:90%;
        align-items: center;
`
const ItemDiv=styled.div`
        
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        margin-top: .5%;
        margin-bottom: 1%;
        margin-left: 2%;
        border-bottom: 1px dashed;

`
const TotalDiv=styled.div`
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        margin-top: .5%;
        margin-bottom: 1%;
        margin-left: 2%;
        border-bottom: 1px dashed;
`

const OrderH1=styled.h1`

        font-size: 4rem;
        text-align:center;
        margin-top:.5%;
`

//
const ItemText=styled.p`
        font-size:2rem;
        text-align:center;
`

// These two switch back and forth to build the lower layout. Considering a change to make it more "modern" and make each section be the only thing visible at a time.

// container for sign up and view marketplace buttons



const Checkout = () => {

    const history = useHistory()

    const login = () => {
        history.push('/login')
    }

    const signup = () => {
        history.push('/signup')
    }

    const marketplace = () => {
        history.push('/marketplace')
    }

    const checkout = () => {
        history.push('/checkout')
    }

    return (
        <Page>
            <Header>
                <HeaderImg src={banner}/>
                <Buttons>
                    <LoginButton id='button' onClick={login}>Login</LoginButton>
                    <SignUp id='button' onClick={signup}>Signup</SignUp>
                    <ViewMarketplace  onClick={marketplace}>View Marketplace</ViewMarketplace>
                </Buttons>
            </Header>
            <MainContainer>
                <TItleDiv>
                    <Title>Checkout</Title>
                </TItleDiv>
                    <CheckoutDiv>
                        <OrderH1>Your Order</OrderH1>

                            <ItemDiv>
                                <ItemText>Items In Cart:</ItemText>
                                <Cart/>
                            </ItemDiv>
                            <TotalDiv>
                                <Total></Total>
                            </TotalDiv>
                                <p></p>
                    </CheckoutDiv>
                        <CheckoutButton>Checkout</CheckoutButton>
            </MainContainer>
        </Page>
        )
}

export default Checkout;