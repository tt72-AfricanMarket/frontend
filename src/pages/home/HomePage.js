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
    background: white;
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
    display:flex;
    flex-direction: row;
    margin: 2%;
    margin-top:-20px;
    border: .1px solid black;
    background-color: #458962;
    align-items: center;
    padding-top: 1%;
    transition: all .2s ease-in;
    
        :hover {
            transform:scale(1.01);
            box-shadow: 3px 3px black;
        }

        @media screen and (max-width: 1200px){
            flex-direction:column;
            
        }
       
`
const ImgRight = styled.div`
    display:flex;
    flex-direction:row-reverse;
    margin: 4rem;
    border-bottom: .5px solid black;
    align-items: center;
    border: .1px solid black;
    background-color: #e5c027;
    padding-top:1%;
    transition: all .2s ease-in;
    
        :hover {
            transform:scale(1.01);
            box-shadow: 3px 3px black;
        }

        @media screen and (max-width: 1200px){
            flex-direction:column;
            }
            
        @media screen and (max-width: 800px){
            width:90%;  
        }
`
// Lower layout containers
const AMImg = styled.img`
    height: 500px;

    @media screen and (max-width: 800px) {
        height: 300px;
    }
`
const TextCont = styled.div`
    margin-top:-20px;
    padding: 0 2rem;
    text-shadow:.5px .5px gray;

    @media screen and (max-width: 1200px){
        padding:2rem;
        
    }
    @media screen and (max-width: 800px){
        font-size:1rem;
    }
    
`
const AMText = styled.p`
    text-align:justify;
    
    
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
                <AMImg src={img1} />
                <TextCont>
                    <AMText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</AMText>

                    <AMText>Nam a venenatis orci. Vivamus id magna fermentum, accumsan nisl sit amet, dignissim nulla. Aenean id auctor erat, ut dictum risus. Nunc vel finibus diam. Suspendisse rhoncus leo eu justo sagittis finibus. Proin in justo et ipsum vulputate gravida a non risus. Praesent in nisl eu dolor ultrices facilisis vel at sem. Aliquam condimentum a enim quis faucibus. Nunc sapien eros, pharetra vel metus a, tristique vulputate nibh. Nam nunc mauris, posuere at sapien et, molestie tempus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent porta ex vel consectetur ornare.</AMText>

                    <AMText>Maecenas malesuada quam in suscipit tempor. Maecenas gravida venenatis vehicula. Quisque mollis efficitur ligula sit amet commodo. Nunc a ante sed felis accumsan scelerisque. Mauris id pretium odio, in dapibus nulla. Cras id euismod dolor. Maecenas ut pharetra mi. Sed rhoncus sed orci vestibulum blandit. Nullam placerat enim neque, nec faucibus massa congue semper.</AMText>
                </TextCont>
            </ImgLeft>

            <ImgRight>
                <AMImg src={img2} />
                <TextCont>
                    <AMText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</AMText>

                    <AMText>Nam a venenatis orci. Vivamus id magna fermentum, accumsan nisl sit amet, dignissim nulla. Aenean id auctor erat, ut dictum risus. Nunc vel finibus diam. Suspendisse rhoncus leo eu justo sagittis finibus. Proin in justo et ipsum vulputate gravida a non risus. Praesent in nisl eu dolor ultrices facilisis vel at sem. Aliquam condimentum a enim quis faucibus. Nunc sapien eros, pharetra vel metus a, tristique vulputate nibh. Nam nunc mauris, posuere at sapien et, molestie tempus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent porta ex vel consectetur ornare.</AMText>

                    <AMText>Maecenas malesuada quam in suscipit tempor. Maecenas gravida venenatis vehicula. Quisque mollis efficitur ligula sit amet commodo. Nunc a ante sed felis accumsan scelerisque. Mauris id pretium odio, in dapibus nulla. Cras id euismod dolor. Maecenas ut pharetra mi. Sed rhoncus sed orci vestibulum blandit. Nullam placerat enim neque, nec faucibus massa congue semper.</AMText>
                </TextCont>
            </ImgRight>

            <ImgLeft>
                <AMImg src={img3} />
                <TextCont>
                    <AMText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</AMText>

                    <AMText>Nam a venenatis orci. Vivamus id magna fermentum, accumsan nisl sit amet, dignissim nulla. Aenean id auctor erat, ut dictum risus. Nunc vel finibus diam. Suspendisse rhoncus leo eu justo sagittis finibus. Proin in justo et ipsum vulputate gravida a non risus. Praesent in nisl eu dolor ultrices facilisis vel at sem. Aliquam condimentum a enim quis faucibus. Nunc sapien eros, pharetra vel metus a, tristique vulputate nibh. Nam nunc mauris, posuere at sapien et, molestie tempus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent porta ex vel consectetur ornare.</AMText>

                    <AMText>Maecenas malesuada quam in suscipit tempor. Maecenas gravida venenatis vehicula. Quisque mollis efficitur ligula sit amet commodo. Nunc a ante sed felis accumsan scelerisque. Mauris id pretium odio, in dapibus nulla. Cras id euismod dolor. Maecenas ut pharetra mi. Sed rhoncus sed orci vestibulum blandit. Nullam placerat enim neque, nec faucibus massa congue semper.</AMText>
                </TextCont>
            </ImgLeft>



        </Page>
    )
}

export default HomePage;