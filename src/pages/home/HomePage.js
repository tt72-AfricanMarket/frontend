import React from "react"
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import banner from '../../images/banner.jpg'
import img1 from '../../images/pic01.jpeg'
import img2 from '../../images/pic02.jpeg'
import img3 from '../../images/pic03.jpeg'



// #c35b48,#e5c027,#458962,#2b2926,#125592 colors

// Return div is always called page
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

const Page = styled.div`
    margin:0;
    padding:0;
    background: #726f5c;
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    
`

// Header banner, log in button needs to be in here
const Header = styled.div`
    display:flex;
    flex-direction:column;
    // border: 1px solid black;
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
    /* align */
    margin-top: 1%;
    width: 400px;
    // border: 1px black solid;
        
        @media screen and (max-width: 1200px){
            display:flex;
            flex-direction:row;
            width: 100%;
            justify-content:space-around;
    }
    
    
    
`

const CheckoutButton = styled.button`
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
    transition: all .2s ease-in;
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
//

// These two switch back and forth to build the lower layout. Considering a change to make it more "modern" and make each section be the only thing visible at a time.
const ImgLeft = styled.div`
    width:80%;
    display:flex;
    flex-direction: row;
    margin-top:.5%;
    margin-right:15%;
    margin-bottom:1%;
    background-color: white;
    align-items: center;

    padding-top: 1%;
    transition: all .2s ease-in;
    
        :hover {
            transform:scale(1.01);
            box-shadow: 3px 3px 5px black;
        }

        @media screen and (max-width: 1300px){
            flex-direction:column;
            margin:5px auto;
            
        }
       
`
const ImgRight = styled.div`
    
    width:80%;
    display:flex;
    flex-direction:row-reverse;
    margin-top:1%;
    margin-left:12%;
    margin-bottom:1%;
    border-bottom: .5px solid black;
    align-items: center;
    background-color: white;
    padding-top:1%;
    transition: all .2s ease-in;
    
        :hover {
            transform:scale(1.01);
            box-shadow: 3px 3px 5px black;
        }

        @media screen and (max-width: 1300px){
            flex-direction:column;
            margin:5px auto;
            
        }
        @media screen and (max-width: 800px){
            width:90%;
            margin: 5px auto;
            
       
`
// Lower layout containers
const AMImg1 = styled.img`
    height: 500px;
    margin-left:1%;
    margin-bottom:1%;
    margin-right:1%;

    @media screen and (max-width: 1300px) {
        height:300px;
        
        
    }
    @media screen and (max-width: 800px) {
        height: 280px;
    }
`
const AMImg2 = styled.img`
    height: 500px;
    margin-left:1%;
    margin-bottom:1%;
    margin-right:1%;

    @media screen and (max-width: 1300px) {
        height:300px;
        
        
    }
    @media screen and (max-width: 800px) {
        height: 280px;
    }
`
const AMImg3 = styled.img`
    height: 500px;
    margin-left:1%;
    margin-bottom:1%;
    margin-right:1%;

    @media screen and (max-width: 1300px) {
        height:280px;
        
        
    }
    @media screen and (max-width: 800px) {
        height: 280px;
    }
`


const TextCont = styled.div`
    margin-top:-20px;
    padding: 0 2rem;
    text-shadow:.5px .5px darkgray;

    @media screen and (max-width: 1300px){
        padding:2rem;
        
    }
    @media screen and (max-width: 800px){
        font-size:1rem;
    }
    
`
const AMText = styled.p`
    text-align:justify;
    font-size:1.1rem;
    
    
`
const Footer=styled.div`
    background:#c35b48;
    display:flex;
    flex-direction:wrap;
    justify-content: space-between;
    align-items:center;
    width:100vw;
    height:6vh;
    border-top: 1px solid white;
    color:white;
    
    
`

const FooterP=styled.p`
    font-size:.8rem;
    margin:10%;
    

`

const FooterLink=styled.a`
    text-decoration:none;
    color:white;
    font-size:.8rem;
    font-family:robot;
        :hover{
            font-size:1rem;
            text-shadow:1px 1px 1px black;
        } 

        @media screen and (max-width:575px){
            font-size:.6rem;
        }
`
// container for sign up and view marketplace buttons



const HomePage = () => {

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
                <HeaderImg src={banner} />
                <Buttons>
                    
                    <LoginButton id='button' onClick={login}>Login</LoginButton>
                    <SignUp id='button' onClick={signup}>Signup</SignUp>
                    <ViewMarketplace onClick={marketplace}>View Marketplace</ViewMarketplace>
                </Buttons>
            </Header>



            <Title>
                African Market
            </Title>

            <ImgLeft>
                <AMImg1 src={img1} />
                <TextCont>
                    <AMText>
Informal cross-border trade is a major feature of African economies: it creates jobs, contributes to food and energy security, and alleviates poverty. However many traders are unaware of their rights, required customs procedures and documentation, making them vulnerable to corruption and harassment.</AMText>

                    <AMText>Our mission is to empower cross-border traders to exercise their rights as citizens of the EAC – able to trade legally, safely and profitably across borders.</AMText>

                    <AMText>Thanks to the generous support of our partners, we are expanding our services to border crossings across the whole East African Community.</AMText>
                </TextCont>
            </ImgLeft>

            <ImgRight>
                <AMImg2 src={img2} />
                <TextCont>
                    <AMText>Through our anonymous reporting mechanism we crowd-source data to map incidents of harassment and corruption at border crossings across East Africa.</AMText>

                    <AMText>Traders can use our number to find out what documentation, taxes and tariffs are applicable to their products, and receive regular updates on changes to border procedures.</AMText>

                    <AMText>Sauti means voice in Swahili and our mission is to empower cross-border traders to exercise their rights as citizens of the East African Community – able to trade freely and safely across borders and stand up for their rights with a loud and clear voice.</AMText>
                </TextCont>
            </ImgRight>

            <ImgLeft>
                <AMImg3 src={img3} />
                <TextCont>
                    <AMText>With our mobile-based platform, any trader with a basic mobile phone can access real-time market prices, exchange rates and trade procedures. Our platform leverages the ubiquity of mobile phones and innovates on USSD and SMS technologies to enhance delivery channels of the information necessary for East Africa’s cross-border traders.</AMText>

                    <AMText>Sauti’s nuanced understanding of the needs that face East African cross-border traders when identifying trade opportunities, complying with trade regulations, and negotiating favourable prices in foreign markets, combined with our innovative approaches to survey implementation and data-collection allow Sauti to provide enhanced stakeholder mapping with unprecedented reach and accuracy.</AMText>

                    <AMText>Sauti’s innovative data collection methods across East Africa’s cross-border spaces allow us to present key attributes of SME border trader’s business and border crossing behaviour. Our unique penetration with cross-border traders gives us superior data-driven insights, enhancing cross-border trade policy advocacy and impact reporting.</AMText>
                </TextCont>
            </ImgLeft>


            <Footer>
                <FooterP>Copyright 2021</FooterP>
                <FooterLink href='./signup'>Sign Up</FooterLink>
                <FooterLink href='./login'>Login</FooterLink>
                <FooterLink href='./marketplace'>Marketplace</FooterLink>
                <FooterP>Track Team AllStars</FooterP>
            </Footer>
        </Page>
    )
}

export default HomePage;