import React from "react"
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

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
    margin-top:-15px;
    text-decoration: underline;
    transition: all .2s ease-in;

    :hover {
        transform:scale(1.1);
    }
`

const Page = styled.div`
    background: rgba(18, 85, 146, .4);
    
`

// Header banner, log in button needs to be in here
const Header = styled.div`
    
`
const HeaderImg = styled.img`
    opacity: 0.9;
    object-fit: cover;
    width: 100%;
    height: 18vh;
    object-position: 50% 90%;
`
const LoginButton = styled.button`
    float:right;
`
//

// These two switch back and forth to build the lower layout. Considering a change to make it more "modern" and make each section be the only thing visible at a time.
const ImgLeft = styled.div`
    display:flex;
    flex-direction: row;
    margin: 4rem;
    margin-top:-20px;
    border: .1px solid black;
    
    align-items: center;
    
    transition: all .3s ease-in;
    
        :hover {
            transform:scale(1.01);
            box-shadow: 5px 5px #0b345b;
        }
`
const ImgRight = styled.div`
    display:flex;
    flex-direction:row-reverse;
    margin: 4rem;
    border-bottom: .5px solid black;
    align-items: center;
    border: .1px solid black;
    
    transition: all .3s ease-in;
    
        :hover {
            transform:scale(1.01);
            box-shadow: 5px 5px #0b345b;
        }
    
    
    }
`
// Lower layout containers
const AMImg = styled.img`
    height: 500px;
`
const TextCont = styled.div`
    margin-top:-20px;
    padding: 0 2rem;
    text-shadow:.5px .5px gray;
    
`
const AMText = styled.p`
    text-align:justify;
    
`
// container for sign up and view marketplace buttons
const Buttons = styled.div`
    display:flex;
    justify-content: center;
`
const SignUp = styled.button`
    margin: 2rem;
    padding: .5rem;
`
const ViewMarketplace = styled.button`
    margin: 2rem;
    padding: .5rem;
`

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
                <HeaderImg src={banner}/>
                <LoginButton onClick={login}>Login</LoginButton>
            </Header>

            <Title>
                African Market
            </Title>

            <ImgLeft>
                <AMImg src={img1}/>
                <TextCont>
                <AMText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</AMText>

                <AMText>Nam a venenatis orci. Vivamus id magna fermentum, accumsan nisl sit amet, dignissim nulla. Aenean id auctor erat, ut dictum risus. Nunc vel finibus diam. Suspendisse rhoncus leo eu justo sagittis finibus. Proin in justo et ipsum vulputate gravida a non risus. Praesent in nisl eu dolor ultrices facilisis vel at sem. Aliquam condimentum a enim quis faucibus. Nunc sapien eros, pharetra vel metus a, tristique vulputate nibh. Nam nunc mauris, posuere at sapien et, molestie tempus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent porta ex vel consectetur ornare.</AMText>

                <AMText>Maecenas malesuada quam in suscipit tempor. Maecenas gravida venenatis vehicula. Quisque mollis efficitur ligula sit amet commodo. Nunc a ante sed felis accumsan scelerisque. Mauris id pretium odio, in dapibus nulla. Cras id euismod dolor. Maecenas ut pharetra mi. Sed rhoncus sed orci vestibulum blandit. Nullam placerat enim neque, nec faucibus massa congue semper.</AMText>
                </TextCont>
            </ImgLeft>

            <ImgRight>
                <AMImg src={img2}/>
                <TextCont>
                <AMText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</AMText>

                <AMText>Nam a venenatis orci. Vivamus id magna fermentum, accumsan nisl sit amet, dignissim nulla. Aenean id auctor erat, ut dictum risus. Nunc vel finibus diam. Suspendisse rhoncus leo eu justo sagittis finibus. Proin in justo et ipsum vulputate gravida a non risus. Praesent in nisl eu dolor ultrices facilisis vel at sem. Aliquam condimentum a enim quis faucibus. Nunc sapien eros, pharetra vel metus a, tristique vulputate nibh. Nam nunc mauris, posuere at sapien et, molestie tempus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent porta ex vel consectetur ornare.</AMText>

                <AMText>Maecenas malesuada quam in suscipit tempor. Maecenas gravida venenatis vehicula. Quisque mollis efficitur ligula sit amet commodo. Nunc a ante sed felis accumsan scelerisque. Mauris id pretium odio, in dapibus nulla. Cras id euismod dolor. Maecenas ut pharetra mi. Sed rhoncus sed orci vestibulum blandit. Nullam placerat enim neque, nec faucibus massa congue semper.</AMText>
                </TextCont>
            </ImgRight>

            <ImgLeft>
                <AMImg src={img3}/>
                <TextCont>
                <AMText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac dignissim leo. Fusce vestibulum nunc at neque luctus volutpat. Quisque venenatis iaculis convallis. Cras urna elit, dapibus in ultricies quis, sollicitudin non erat. Nunc scelerisque cursus orci, vel malesuada elit elementum eget. Proin sed leo vel nulla hendrerit euismod. Vestibulum faucibus augue quis convallis mattis.</AMText>

                <AMText>Nam a venenatis orci. Vivamus id magna fermentum, accumsan nisl sit amet, dignissim nulla. Aenean id auctor erat, ut dictum risus. Nunc vel finibus diam. Suspendisse rhoncus leo eu justo sagittis finibus. Proin in justo et ipsum vulputate gravida a non risus. Praesent in nisl eu dolor ultrices facilisis vel at sem. Aliquam condimentum a enim quis faucibus. Nunc sapien eros, pharetra vel metus a, tristique vulputate nibh. Nam nunc mauris, posuere at sapien et, molestie tempus velit. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent porta ex vel consectetur ornare.</AMText>

                <AMText>Maecenas malesuada quam in suscipit tempor. Maecenas gravida venenatis vehicula. Quisque mollis efficitur ligula sit amet commodo. Nunc a ante sed felis accumsan scelerisque. Mauris id pretium odio, in dapibus nulla. Cras id euismod dolor. Maecenas ut pharetra mi. Sed rhoncus sed orci vestibulum blandit. Nullam placerat enim neque, nec faucibus massa congue semper.</AMText>
                </TextCont>
            </ImgLeft>

            <Buttons>
                <SignUp onClick={signup}>Sign Up</SignUp>
                <ViewMarketplace onClick={marketplace}>View Marketplace</ViewMarketplace>
            </Buttons>

        </Page>
    )
}

export default HomePage;